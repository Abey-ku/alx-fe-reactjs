// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Import useAuth hook

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth(); // Use the useAuth hook to get authentication status

  return isAuthenticated ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
