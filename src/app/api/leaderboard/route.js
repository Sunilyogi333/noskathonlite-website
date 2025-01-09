import axios from 'axios';

// GitHub token (secure it in production using environment variables or secrets)
const TOKEN = process.env.GITHUB_TOKEN; 

// Repositories and hackathon timeframe
const repos = ["Test1"];

const since = "2022-12-01T00:00:00Z"; // Keep your start date
const until = "2025-01-13T23:59:59Z"; // January 10, 2025, 23:59:59 in ISO format

// Helper function to fetch commit data with pagination and excluding "web-flow"
const getCommitData = async (repo) => {
  const url = `https://api.github.com/repos/Noskathon-Lite/${repo}/commits?since=${since}&until=${until}&per_page=100`;
  const headers = {
    "Authorization": `Bearer ${TOKEN}`,
  };

  let commits = [];
  let page = 1;
  let totalCommits = 0;
  let webFlowCommits = 0; // Count web-flow commits

  try {
    // Loop through all pages of commits
    while (true) {
      const response = await axios.get(`${url}&page=${page}`, { headers });
      if (response.data.length === 0) break; // No more commits, stop
      commits = commits.concat(response.data);
      totalCommits += response.data.length; // Increment total commits count

      // Count web-flow commits (e.g., automated commits from GitHub Actions, etc.)
      webFlowCommits += response.data.filter((commit) =>
        commit.committer && commit.committer.login === "web-flow"
      ).length;

      page++; // Move to the next page
    }

    // Process commit data
    const userCommitsMap = {};

    commits.forEach((commit) => {
      const committerName = commit.committer ? commit.committer.login : "Unknown"; // Handle unknown committers

      // Skip web-flow commits
      if (committerName === "web-flow") {
        return;
      }

      // Count user commits
      userCommitsMap[committerName] = (userCommitsMap[committerName] || 0) + 1;
    });

    // Format commit data for users
    const userCommits = Object.keys(userCommitsMap).map((committerName) => ({
      committer: committerName,
      commits: userCommitsMap[committerName],
    }));

    return { userCommits, totalCommits, webFlowCommits, userCommitsMap };
  } catch (error) {
    console.error("Error fetching commits:", error);
    return { userCommits: [], totalCommits: 0, webFlowCommits: 0, userCommitsMap: {} };
  }
};

// Handler for API route to get leaderboard
export async function GET() {
  const leaderboard = [];

  for (const repo of repos) {
    const teamName = repo; // Extract team name from repository name 

    const { userCommits, totalCommits, webFlowCommits, userCommitsMap } = await getCommitData(repo);

    leaderboard.push({
      team: teamName,
      totalCommits,
      webFlowCommits, // Include web-flow commit count
      userCommits,    // Include user commit count
    });
  }

  leaderboard.sort((a, b) => b.totalCommits - a.totalCommits); // Sort leaderboard by total commits

  console.log("Leaderboard data:", leaderboard);

  return new Response(JSON.stringify(leaderboard), {
    headers: { "Content-Type": "application/json" },
  });
}
