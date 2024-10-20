import React, { useState } from 'react';

function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'searchTerm') setSearchTerm(value);
    if (name === 'location') setLocation(value);
    if (name === 'minRepos') setMinRepos(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ searchTerm, location, minRepos });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 p-4 max-w-lg mx-auto">
      <input
        type="text"
        name="searchTerm"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search GitHub User..."
        className="border p-2 rounded-md"
      />
      <input
        type="text"
        name="location"
        value={location}
        onChange={handleInputChange}
        placeholder="Location (e.g., San Francisco)"
        className="border p-2 rounded-md"
      />
      <input
        type="number"
        name="minRepos"
        value={minRepos}
        onChange={handleInputChange}
        placeholder="Minimum Repositories"
        className="border p-2 rounded-md"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
        Search
      </button>
    </form>
  );
}

export default Search;
