import axios from 'axios';

// GitHub token (secure it in production using environment variables or secrets)
const TOKEN = process.env.GITHUB_TOKEN; 

// Repositories and hackathon timeframe
const repos = ["Sunilyogi333/KukhuriKaa", "Sunilyogi333/Arduino", "Sunilyogi333/Learning_zone", "Sunilyogi333/real-estate-project", "Sunilyogi333/noskathonlite-website"];
const since = "2022-12-01T00:00:00Z"; // Keep your start date
const until = "2025-01-10T23:59:59Z"; // January 10, 2025, 23:59:59 in ISO format

// Helper function to fetch commit count with pagination and excluding "web-flow"
const getCommitData = async (repo) => {
  const url = `https://api.github.com/repos/${repo}/commits?since=${since}&until=${until}&per_page=100`;
  const headers = {
    "Authorization": `Bearer ${TOKEN}`,
  };

  let commits = [];
  let page = 1;
  let totalCommits = 0;

  try {
    // Loop through all pages of commits
    while (true) {
      const response = await axios.get(`${url}&page=${page}`, { headers });
      if (response.data.length === 0) break; // No more commits, stop

      commits = commits.concat(response.data);
      totalCommits += response.data.length; // Increment total commits count

      page++; // Move to the next page
    }

    // Process commit data
    const commitMap = {};

    commits.forEach((commit) => {
      const committerName = commit.committer ? commit.committer.login : 'Unknown'; // Handle unknown committers
      if (committerName !== "web-flow") { // Exclude web-flow
        commitMap[committerName] = (commitMap[committerName] || 0) + 1;
      }
    });

    // Format commit data by committer
    const teamData = Object.keys(commitMap).map((committerName) => ({
      committer: committerName,
      commits: commitMap[committerName],
    }));

    return { commitMap, totalCommits, teamData };
  } catch (error) {
    console.error('Error fetching commits:', error);
    return { commitMap: {}, totalCommits: 0, teamData: [] }; // Return empty data in case of error
  }
};

// Handler for API route to get leaderboard
export async function GET() {
  const leaderboard = [];

  for (const repo of repos) {
    const teamName = repo.split('/')[1].replace("-repo", "");

    const { commitMap, totalCommits, teamData } = await getCommitData(repo);

    leaderboard.push({
      team: teamName,
      totalCommits,
      members: teamData,
    });
  }

  leaderboard.sort((a, b) => b.totalCommits - a.totalCommits); // Sort leaderboard by total commits

  return new Response(JSON.stringify(leaderboard), {
    headers: { 'Content-Type': 'application/json' },
  });
}
