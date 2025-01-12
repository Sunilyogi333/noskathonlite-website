import axios from "axios";

// GitHub token (secure it in production using environment variables or secrets)
const TOKEN = process.env.GITHUB_TOKEN;

// Repositories list
const repos = [
  "Team_iterators", "Error_404", "Serenity_Coders", "godcod", "DASA",
  "GDP_Gurus", "Never_fail", "PASA", "WasteSort_AI", "perception_motion_squad",
  "Slothes", "3Bit_Wizards", "lemon_tea", "Chatuyantra", "FutureX",
  "smartResQ", "Tech_Titans", "Error404", "The_DOMinators", "The_Realists",
  "FloodForesight", "B.AI", "Hp_Tech", "GreenHorn", "Navin_Soch",
  "Commit_To_Change", "Ctrl_Alt_Delete_Crew", "Team_Odyssey", "Yantra", "Puspa",
  "Bastion", "API_Avengers", "Dkgtech", "Connect_Ninjas", "Team_Magma",
  "Shahayak", "Rocket", "Suksma", "AKL", "Traffic_Dai", "0xCoders",
  "pied_piper", "Sahayog", "Rachana_Yatra", "Ke_Xa", "2_Bit", "Aisle",
  "Code_Blooded", "Team_Funity", "Team_Semicolon",
];
// const repos = ["Test1", "Test2", "Test3", "Test4"]

const since = "2022-12-01T00:00:00Z";
const until = "2025-01-13T23:59:59Z";

// Helper function to fetch commit data
const getCommitData = async (repo) => {
  const url = `https://api.github.com/repos/Noskathon-Lite/${repo}/commits?since=${since}&until=${until}&per_page=100`;
  const headers = { Authorization: `Bearer ${TOKEN}` };

  let commits = [];
  let page = 1;

  try {
    while (true) {
      const response = await axios.get(`${url}&page=${page}`, { headers });
      if (response.data.length === 0) break;

      commits = commits.concat(response.data);
      page++;
    }

    const userCommitsMap = {};
    commits.forEach((commit) => {
      const committerName = commit.committer ? commit.committer.login : "Unknown";
      if (committerName !== "web-flow") {
        userCommitsMap[committerName] = (userCommitsMap[committerName] || 0) + 1;
      }
    });

    const userCommits = Object.keys(userCommitsMap).map((committer) => ({
      committer,
      commits: userCommitsMap[committer],
    }));

    return {
      totalCommits: commits.length,
      webFlowCommits: commits.filter((commit) => commit.committer?.login === "web-flow").length,
      userCommits,
    };
  } catch (error) {
    if (error.response?.status === 409) {
      console.warn(`Repository "${repo}" has no commits.`);
      return { totalCommits: 0, webFlowCommits: 0, userCommits: [] };
    } else {
      console.error(`Error fetching commits for repo: ${repo}`, error);
      return { totalCommits: 0, webFlowCommits: 0, userCommits: [] };
    }
  }
};

// API handler
export async function GET(request) {
  const urlParams = new URL(request.url);
  const page = parseInt(urlParams.searchParams.get("page") || "1", 10);
  const limit = 10;

  // Fetch all repository data
  const allRepoData = await Promise.all(
    repos.map(async (repo) => {
      const { totalCommits, webFlowCommits, userCommits } = await getCommitData(repo);
      return { team: repo, totalCommits, webFlowCommits, members: userCommits };
    })
  );

  // Sort by totalCommits in descending order
  const sortedRepos = allRepoData.sort((a, b) => b.totalCommits - a.totalCommits);

  // Paginate sorted data
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const leaderboard = sortedRepos.slice(startIndex, endIndex);

  return new Response(
    JSON.stringify({
      leaderboard,
      totalPages: Math.ceil(repos.length / limit),
      currentPage: page,
    }),
    { headers: { "Content-Type": "application/json" } }
  );
}