import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignUp from "./components/signup.component";
import Login from "./components/login.component";
import SuperAdminLogin from "./components/SuperAdminLogin";
import AdminDashboard from "./components/admin-dashboard";
import MatchJobSeekerToCoach from "./components/MatchJobSeekerToCoach"; // Import the component

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/sign-up"}>
              Just a Second Connector
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-up"}>
                    Sign Up
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/SuperAdminlogin"}>
                    SuperAdminDashboard
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route path="/SuperAdminlogin" element={<SuperAdminLogin />} />
              <Route path="/admin-dashboard" element={<AdminDashboard />} />
              <Route path="/match-job-seeker" element={<MatchJobSeekerToCoach />} /> {/* New Route */}
              <Route path="/" element={<SignUp />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/sign-in" element={<Login />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
