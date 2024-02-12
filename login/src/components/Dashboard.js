import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  const navigateToDashboard = (email) => {
    // Here you can perform any additional logic before navigating to the dashboard
    // For simplicity, let's assume we just navigate to the dashboard
    window.location.href = `/dashboard?username=${email}`;
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login navigateToDashboard={navigateToDashboard} />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
