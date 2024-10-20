import React, { useState } from 'react';
import Search from './components/Search';
import { fetchUserData } from './services/githubService';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (username) => {
    setLoading(true);
    setError(null);
    setUser(null);  // Clear previous search results
    try {
      const data = await fetchUserData(username);
      setUser(data);
    } catch (error) {
      setError('Looks like we can’t find the user.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <Search onSearch={handleSearch} />

      {/* Conditional Rendering for Loading, Error, or User Data */}
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {user && (
        <div>
          <h2>{user.login}</h2>
          <img src={user.avatar_url} alt="User Avatar" width="100" />
          <p>{user.bio}</p>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
