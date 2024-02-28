<<<<<<< HEAD
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignUp from "./components/signup.component";
import Login from "./components/login.component";
import SuperAdminLogin from "./components/SuperAdminLogin"; // Updated import
import AdminDashboard from "./components/admin-dashboard";

function App() {
=======
import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignUp from "./components/signup.component";
import Login from "./components/login.component";
import JobSeekerForm from "./components/JobSeekerForm";




function App() {

  const [isSignUp, setIsSignUp] = useState(true);

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
  };
  

>>>>>>> c12a0f65d1112f7df759fde8e8070f4ea40dd98f
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/sign-up"}>
<<<<<<< HEAD
              Just a Second Connector
=======
              just a Second Connector
>>>>>>> c12a0f65d1112f7df759fde8e8070f4ea40dd98f
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
<<<<<<< HEAD
                  <Link className="nav-link" to={"/sign-up"}>
                    Sign Up
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/SuperAdminlogin"}>
                    SuperAdminDashboard
                  </Link>
=======
                {isSignUp ? (
        <Link className="nav-link" to="/sign-in" onClick={() => setIsSignUp(false)}>
          Sign In
        </Link>
      ) : (
        <Link className="nav-link" to="/sign-up" onClick={() => setIsSignUp(true)}>
          Sign Up
        </Link>
      )}
>>>>>>> c12a0f65d1112f7df759fde8e8070f4ea40dd98f
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
<<<<<<< HEAD
              <Route path="/SuperAdminlogin" element={<SuperAdminLogin />} /> {/* Updated route */}
              <Route path="/admin-dashboard" element={<AdminDashboard />} /> 
              <Route path="/" element={<SignUp />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/sign-in" element={<Login />} />
=======
              <Route path="/" element={<SignUp />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/job-seeker-form" element={<JobSeekerForm />} />
>>>>>>> c12a0f65d1112f7df759fde8e8070f4ea40dd98f
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
