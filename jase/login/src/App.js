import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignUp from "./components/signup.component";
import Login from "./components/login.component";
import SuperAdmin from "./components/SuperAdmin";


function App() {

  const [isSignUp, setIsSignUp] = useState(true);

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
  };
  

  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/sign-up"}>
              just a Second Connector
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                
                <div className="nav-link wrapper">
                <li className="nav-item">
                {isSignUp ? (
                    <Link className="nav-link" to="/sign-in" onClick={() => setIsSignUp(false)}>
                      Sign In
                    </Link>
                    ) : (
                      <Link className="nav-link" to="/sign-up" onClick={() => setIsSignUp(true)}>
                        Sign Up
                      </Link>
                    )}
      
                </li>
                </div>
                
              </ul>
              <ul>
              <div className="nav-link wrapper">
              <li className="nav-item">
                <Link className="nav-link" to="/superadmin" onClick={() => setIsSignUp(false)}>
                Super Admin
              </Link></li>
              </div>
              </ul>
            </div>
          </div>
        </nav>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route path="/" element={<SignUp />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/superadmin" element={<SuperAdmin />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
