import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SuperAdminlogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const userData = JSON.parse(localStorage.getItem("userData")) || [];
        if (email === email && password === password) {
            // Set the submitted email and password
            setIsLoggedIn(true);
            // Redirect to admin dashboard
            navigate('/admin-dashboard');
        } else {
            // Display an error message or handle invalid credentials
            alert('Invalid email or password');
        }

        // Reset the form after login attempt
        setEmail('');
        setPassword('');
    };

    const handleForgotPassword = () => {
        const emailInput = prompt("Enter your email to reset the password:", "");
        if (emailInput) {
            // Perform further logic, e.g., send email or display alert
            alert(`An email has been sent to ${emailInput} to reset the password.`);
        }
        
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="form-div">
                <h1 className="form-h1">Log In</h1>

                <div className="mb-3">
                    <label className="input-label" htmlFor="email">
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
                    <label className="input-label" htmlFor="password">
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
                        Login
                    </button>
                </div>
                <p className="forgot-password text-right forgot-text">
                    Forgot <button type="button" onClick={handleForgotPassword}>Password?</button>
                    {!isLoggedIn && (
                        <p className="invalid-text">Invalid email or password</p>
                    )}
                </p>
            </form>
            {isLoggedIn && <p>Logged in successfully</p>}
        </>
    );
}

export default SuperAdminlogin;
