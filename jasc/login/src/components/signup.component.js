import React, { useState } from "react";
import "./Login.css";

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const existingData = JSON.parse(localStorage.getItem("userData")) || [];
    if (firstName && lastName && email && password) {
      // Check if the email already exists
      const emailExists = existingData.some((user) => user.email === email);
      if (emailExists) {
        alert("Email already exists. Please use a different email.");
      } else {
        // Append new user data
        const newData = [
          ...existingData,
          { firstName, lastName, email, password },
        ];
        // Store updated user data in local storage
        localStorage.setItem("userData", JSON.stringify(newData));
        alert("Registered successfully");
      }
    } else {
      alert("Please fill in all details");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="form-h1">Sign Up</h1>

      <div className="mb-3">
        <label className="input-label" for="firstName">
          First name
        </label>
        <input
          id="firstName"
          type="text"
          className="form-control"
          placeholder="First name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="input-label" for="lastName">
          Last name
        </label>
        <input
          id="lastName"
          type="text"
          className="form-control"
          placeholder="Last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="input-label" for="email">
          Email address
        </label>
        <input
          id="email"
          type="email"
          className="form-control"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="input-label" for="password">
          Password
        </label>
        <input
          id="password"
          type="password"
          className="form-control"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary form-btn">
          Sign Up
        </button>
      </div>
      <p className="forgot-password text-right  forgot-text">
        Already registered <a href="/sign-in">Sign In?</a>
      </p>
    </form>
  );
}

export default SignUp;
