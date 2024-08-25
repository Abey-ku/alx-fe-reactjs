// src/components/SearchBar.jsx
import React from 'react';
import { useRecipeStore } from '../recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value); // Update search term in Zustand store
    filterRecipes(); // Filter recipes based on the updated search term
  };

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={handleSearch}
      style={{ marginBottom: '20px', padding: '8px', width: '100%' }}
    />
  );
};

export default SearchBar;
