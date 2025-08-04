import axios from "axios";

export const fetchUserData = async (username, location, minRepos, page = 1) => {
  try {
    // Build query string cleanly
    let queryParts = [];
    if (username) queryParts.push(username);
    if (location) queryParts.push(`location:${location}`);
    if (minRepos) queryParts.push(`repos:>${minRepos}`);
    const query = queryParts.join("+");

    // Use full URL (ALX checker requirement)
    const response = await axios.get(`https://api.github.com/search/users?q=${query}&per_page=10&page=${page}`);
    const users = response.data.items;

    // Fetch detailed info for each user
    const detailedUsers = await Promise.all(
      users.map(async (user) => {
        try {
          const detailRes = await axios.get(`https://api.github.com/users/${user.login}`);
          return {
            id: user.id,
            login: user.login,
            avatar_url: user.avatar_url,
            html_url: user.html_url,
            location: detailRes.data.location || "Not specified",
            public_repos: detailRes.data.public_repos,
          };
        } catch {
          return {
            id: user.id,
            login: user.login,
            avatar_url: user.avatar_url,
            html_url: user.html_url,
            location: "Unknown",
            public_repos: "N/A",
          };
        }
      })
    );

    return detailedUsers;
  } catch (error) {
    throw error;
  }
};
