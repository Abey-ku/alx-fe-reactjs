import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

function App() {
  return (
    <Router>
      <div style={{ padding: '20px' }}>
        <h1>Recipe Sharing App</h1>
        <Routes>
          <Route path="/" element={<div><AddRecipeForm /><RecipeList /></div>} />
          <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
        </Routes>
        <FavoritesList />
        <RecommendationsList />
      </div>
    </Router>
  );
}

export default App;
