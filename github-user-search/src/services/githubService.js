import axios from 'axios';

export const fetchUserData = async ({ searchTerm, location, minRepos }) => {
  let query = searchTerm ? `q=${searchTerm}` : '';
  
  if (location) {
    query += `+location:${location}`;
  }
  
  if (minRepos) {
    query += `+repos:>=${minRepos}`;
  }

  try {
    const response = await axios.get(`https://api.github.com/search/users?${query}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};
