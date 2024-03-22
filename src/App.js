import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { useAuth } from './auth';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import store from './store';

const App = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/signup" />} />
          <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to="/" />} />
          <Route path="/signup" element={!isAuthenticated ? <Signup /> : <Navigate to="/" />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
