import React, { useState } from 'react';
import Search from './components/Search';
import { fetchUserData } from './services/githubService';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (searchParams) => {
    setLoading(true);
    setError(null);
    setUsers([]);
    try {
      const data = await fetchUserData(searchParams);
      setUsers(data.items);  // The response contains an `items` array of users
    } catch (error) {
      setError('Error fetching users.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl text-center mb-6">GitHub User Search</h1>
      <Search onSearch={handleSearch} />

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {users.map(user => (
          <div key={user.id} className="border p-4 rounded-md">
            <h2 className="text-xl">{user.login}</h2>
            <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
            <p>Location: {user.location || 'N/A'}</p>
            <p>Repositories: {user.public_repos || 'N/A'}</p>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
