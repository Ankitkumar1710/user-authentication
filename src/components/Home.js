import React from 'react';
import { useAuth } from '../auth';
import { Link, Navigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const { isAuthenticated, user, logout } = useAuth();

  const handleLogout = () => {
    logout(); 
    return <Navigate to="/login" />;
  };

  return (
    <div className="home">
      {isAuthenticated ? (
        <>
          <h2>Welcome, {user.name}</h2>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <h2>Welcome to the Home Page</h2>
      )}
    </div>
  );
};

export default Home;
