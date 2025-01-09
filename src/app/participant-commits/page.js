"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "@/components/Header";

export default function ParticipantCommitsPage() {
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await axios.get("/api/leaderboard");
        console.log("Leaderboard data:", response.data);

        // Update the leaderboard to match the new structure
        const updatedLeaderboard = response.data.map((team) => ({
          ...team,
          members: team.userCommits
            .sort((a, b) => (b.commits || 0) - (a.commits || 0)), // Sort members by commits
        }));

        updatedLeaderboard.sort((a, b) => b.totalCommits - a.totalCommits); // Sort teams by total commits

        setLeaderboard(updatedLeaderboard);
      } catch (error) {
        console.error("Error fetching leaderboard:", error);
        setError("Failed to load leaderboard data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8 mt-32 lg:mt-44">
        <h1 className="font-bold text-center text-nosk-green mb-6">
          Hackathon Leaderboard
        </h1>
        <p className="text-lg text-center text-nosk-grey mb-8">
          Leaderboard based on GitHub commits during the hackathon.
        </p>

        {loading ? (
          <div className="text-center min-h-full font-bold text-gray-500">
            <h3>Loading leaderboard...</h3>
          </div>
        ) : error ? (
          <div className="text-center text-xl text-red-500">{error}</div>
        ) : (
          <div className="space-y-8">
            {leaderboard.length > 0 ? (
              leaderboard.map((team, index) => (
                <div
                  key={index}
                  className="bg-nosk-green outline-none mx-auto max-w-7xl md:outline-nosk-green hover:scale-105 duration-300 ease-in-out hover:transition-all md:bg-nosk-white md:outline-4 shadow-lg rounded-lg p-6 space-y-4"
                >
                  <h3 className="font-bold md:text-nosk-green text-nosk-white">
                    {team.team}
                  </h3>
                  <p className="text-xl md:text-nosk-green text-nosk-white">
                    <strong>Total Commits: </strong>
                    {team.totalCommits}
                  </p>
                  <p className="text-lg text-nosk-yellow">
                    <strong>Web Flow Commits: </strong>
                    {team.webFlowCommits}
                  </p>
                  <table className="min-w-full table-auto border-collapse bg-nosk-white rounded-md">
                    <thead>
                      <tr className="bg-gray-100 text-left">
                        <th className="px-4 py-2 text-base font-bold underline text-gray-600">
                          Contributor
                        </th>
                        <th className="px-4 py-2 text-base font-bold underline text-gray-600">
                          Commits
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {Array.isArray(team.members) && team.members.length > 0 ? (
                        team.members.map((member, idx) => (
                          <tr key={idx} className="border-t">
                            <td className="px-4 py-2 text-sm text-gray-700">
                              {member.committer}
                            </td>
                            <td className="px-4 py-2 text-sm text-gray-700">
                              {member.commits}
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td
                            colSpan="2"
                            className="px-4 py-2 text-sm text-center text-gray-500"
                          >
                            No contributors available
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              ))
            ) : (
              <p className="text-center text-lg text-gray-500">
                No leaderboard data available.
              </p>
            )}
          </div>
        )}
      </div>
    </>
  );
}
