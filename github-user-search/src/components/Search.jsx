import React, { useState } from "react";
import { fetchAdvancedUsers } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUsers([]);
    setPage(1);

    try {
      const results = await fetchAdvancedUsers(username, location, minRepos, 1);
      if (results.length === 0) {
        setError("No users found with the given criteria.");
        setHasMore(false);
      } else {
        setUsers(results);
        setHasMore(results.length === 10); // If we got 10 results, more pages exist
      }
    } catch {
      setError("Something went wrong. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    setLoading(true);
    try {
      const nextPage = page + 1;
      const results = await fetchAdvancedUsers(username, location, minRepos, nextPage);
      setUsers((prev) => [...prev, ...results]);
      setPage(nextPage);
      setHasMore(results.length === 10); // Only allow "Load More" if we got a full page
    } catch {
      setError("Failed to load more users.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-white">
        GitHub Advanced User Search
      </h1>

      {/* Search Form */}
      <form
        onSubmit={handleSearch}
        className="grid gap-4 md:grid-cols-3 bg-gray-800 p-6 rounded-lg shadow-md"
      >
        <div className="flex flex-col">
          <label htmlFor="username" className="text-gray-300 mb-1">
            Username
          </label>
          <input
            id="username"
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="p-2 rounded bg-gray-700 text-white"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="location" className="text-gray-300 mb-1">
            Location
          </label>
          <input
            id="location"
            type="text"
            placeholder="Enter location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="p-2 rounded bg-gray-700 text-white"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="minRepos" className="text-gray-300 mb-1">
            Minimum Repos
          </label>
          <input
            id="minRepos"
            type="number"
            placeholder="Enter number"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="p-2 rounded bg-gray-700 text-white"
          />
        </div>

        <button
          type="submit"
          className="md:col-span-3 bg-blue-500 text-white py-2 mt-2 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {/* Loading & Error */}
      {loading && <p className="mt-4 text-gray-400 text-center">Loading...</p>}
      {error && <p className="mt-4 text-red-500 text-center">{error}</p>}

      {/* Results */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-gray-900 p-4 rounded-lg shadow hover:shadow-xl transition"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-20 h-20 rounded-full mx-auto mb-3"
            />
            <p className="text-white text-lg font-bold text-center">{user.login}</p>
            <p className="text-gray-400 text-sm text-center">
              Location: {user.location}
            </p>
            <p className="text-gray-400 text-sm text-center">
              Repos: {user.public_repos}
            </p>
            <div className="text-center mt-2">
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {hasMore && !loading && (
        <div className="text-center mt-6">
          <button
            onClick={loadMore}
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Search;
