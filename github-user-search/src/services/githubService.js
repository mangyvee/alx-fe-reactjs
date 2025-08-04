import axios from "axios";

const BASE_URL = "https://api.github.com";

export const fetchAdvancedUsers = async (username, location, minRepos) => {
  try {
    let query = "";
    if (username) query += `${username}`;
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>${minRepos}`;

    const response = await axios.get(`${BASE_URL}/search/users?q=${query}`);
    return response.data.items; // Array of users
  } catch (error) {
    throw error;
  }
};
