"use client";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '@/components/Header';

export default function ParticipantCommitsPage() {
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true); // Set loading state
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await axios.get('/api/leaderboard'); // Using axios for GET request
        const filteredData = response.data.map(team => ({
          ...team,
          // Exclude "web-flow" and sort members by commit count in descending order
          members: team.members
            .filter(member => member.committer !== "web-flow")
            .sort((a, b) => (b.commits || 0) - (a.commits || 0)), // Ensure valid number comparison
        }));

        // Sort teams by the total number of commits (descending order)
        filteredData.sort((a, b) => b.totalCommits - a.totalCommits);

        setLeaderboard(filteredData); // Set filtered and sorted leaderboard data to state
      } catch (error) {
        console.error("Error fetching leaderboard:", error);
        setError("Failed to load leaderboard data. Please try again later.");
      } finally {
        setLoading(false); // Stop loading when done
      }
    };

    fetchLeaderboard(); // Call the API when the page loads
  }, []);

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8 mt-32 lg:mt-44">
        <h1 className="text-4xl font-semibold text-center text-blue-600 mb-6">Hackathon Leaderboard</h1>
        <p className="text-lg text-center text-gray-700 mb-8">Leaderboard based on GitHub commits during the hackathon.</p>

        {loading ? (
          <div className="text-center text-xl text-gray-500">Loading leaderboard...</div>
        ) : error ? (
          <div className="text-center text-xl text-red-500">{error}</div> // Display error message if there's an error
        ) : (
          <div className="space-y-8">
            {leaderboard.length > 0 ? (
              leaderboard.map((team, index) => (
                <div key={index} className="bg-nosk-green shadow-lg rounded-lg p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-blue-500">{team.team}</h3>
                  <p className="text-xl"><strong>Total Commits: </strong>{team.totalCommits}</p>
                  <table className="min-w-full table-auto border-collapse bg-nosk-white rounded-md">
                    <thead>
                      <tr className="bg-gray-100 text-left">
                        <th className="px-4 py-2 text-sm font-semibold text-gray-600">Contributor</th>
                        <th className="px-4 py-2 text-sm font-semibold text-gray-600">Commits</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Render sorted members */}
                      {Array.isArray(team.members) && team.members.length > 0 ? (
                        team.members.map((member, idx) => (
                          <tr key={idx} className="border-t">
                            <td className="px-4 py-2 text-sm text-gray-700">{member.committer}</td>
                            <td className="px-4 py-2 text-sm text-gray-700">{member.commits}</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="2" className="px-4 py-2 text-sm text-center text-gray-500">No contributors available</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              ))
            ) : (
              <p className="text-center text-lg text-gray-500">No leaderboard data available.</p>
            )}
          </div>
        )}
      </div>
    </>
  );
}
