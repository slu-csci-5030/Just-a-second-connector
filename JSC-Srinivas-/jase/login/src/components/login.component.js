// login.component.js
import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = JSON.parse(localStorage.getItem("userData")) || [];
    for (const user of userData) {
      if (user.email === email && user.password === password) {
        setIsLoggedIn(true);
        return;
      }
    }
    setIsLoggedIn(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form-div">
        <h1 className="form-h1">Log In</h1>

        <div className="mb-3">
          <label className="input-label" for="email">
            Email address
          </label>
          <input
            id="email"
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="input-label" for="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary form-btn">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right forgot-text">
          Forgot <a href=".">Password?</a>
          {!isLoggedIn && (
            <p className="invalid-text">Invalid email or password</p>
          )}
        </p>
      </form>
      {isLoggedIn && <p>Logged in successfully</p>}
    </>
  );
}

export default Login;
