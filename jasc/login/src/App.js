import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SignUp from './components/signup.component'; // Ensure this file exists in the components directory
import Login from './components/login.component'; // Ensure this file exists in the components directory
import SuperAdminLogin from './components/SuperAdminLogin'; // Ensure this file exists in the components directory
import AdminDashboard from './components/admin-dashboard'; // Ensure this file exists in the components directory
import MatchDashboard from './components/MatchDashboard'; // Ensure this file exists in the components directory
import './components/match.css'; // Adjusted path to match the location

function App() {
  return (
    <Router>
      <nav>
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Login</Link>
        <Link to="/superadmin">SuperAdmin Dashboard</Link>
        <Link to="/admin-dashboard">Admin Dashboard</Link>
        <Link to="/match-dashboard">Match Job Seekers to Job Employers</Link>
      </nav>

      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/superadmin" element={<SuperAdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/match-dashboard" element={<MatchDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
