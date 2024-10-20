import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import UserProfile from './components/UserProfile';
import axios from 'axios';

function App() {
  const [user, setUser] = useState(null);

  const handleSearch = async (username) => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUser(response.data);
    } catch (error) {
      console.error('Error fetching the user data:', error);
    }
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />
      <UserProfile user={user} />
    </div>
  );
}

export default App;
