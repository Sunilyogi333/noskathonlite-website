"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "@/components/Header";

export default function ParticipantCommitsPage() {
  const [leaderboard, setLeaderboard] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchLeaderboard = async (page) => {
    try {
      setLoading(true);
      const response = await axios.get(`/api/leaderboard?page=${page}`);
      setLeaderboard(response.data.leaderboard);
      setTotalPages(response.data.totalPages);
      setCurrentPage(response.data.currentPage);
    } catch (error) {
      console.error("Error fetching leaderboard:", error);
      setError("Failed to load leaderboard data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeaderboard(currentPage);
  }, [currentPage]);

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
          <>
          <div className="space-y-8">
          {leaderboard.map((team, index) => (
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
              ))}
            </div>

            {/* Pagination Section */}
            <div className="flex justify-center items-center mt-10 space-x-4">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={`px-6 py-2 rounded-md font-semibold text-white ${
                  currentPage === 1
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-nosk-green hover:bg-nosk-dark-green transition"
                }`}
              >
                Previous
              </button>
              <span className="text-lg font-medium">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className={`px-6 py-2 rounded-md font-semibold text-white ${
                  currentPage === totalPages
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-nosk-green hover:bg-nosk-dark-green transition"
                }`}
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
