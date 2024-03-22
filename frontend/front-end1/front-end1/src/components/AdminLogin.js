import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory hook for navigation
import '../styles/AdminLogin.css';

const AdminLogin = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const [loginError, setLoginError] = useState(false); // State to track login error
    const history = useHistory(); // useHistory hook for navigation

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Hardcoded username and password
        const correctUsername = 'admin';
        const correctPassword = 'adminpassword';

        // Check if entered username and password match the hardcoded values
        if (formData.username === correctUsername && formData.password === correctPassword) {
            // Redirect to admin dashboard if login is successful
            history.push('/admin-dashboard');
        } else {
            // Display login error message
            setLoginError(true);
        }
    };

    return (
        <div className="admin-login-container">
            <h2>Admin Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
                </div>
                <button type="submit">Login</button>
                {loginError && <p className="error-message">Invalid username or password</p>}
            </form>
        </div>
    );
};

export default AdminLogin;
