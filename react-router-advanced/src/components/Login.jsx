// src/components/Login.jsx
import React from 'react';
import { useAuth } from '../context/AuthContext'; // Import useAuth hook
import { useNavigate } from 'react-router-dom';

function Login() {
  const { login } = useAuth(); // Use the useAuth hook to get login function
  const navigate = useNavigate();

  const handleLogin = () => {
    login(); // Call the login function to update authentication state
    navigate('/profile'); // Redirect to profile page after login
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
