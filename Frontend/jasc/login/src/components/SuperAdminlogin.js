import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SuperAdminlogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [submittedUsername, setSubmittedUsername] = useState('');
    const [submittedPassword, setSubmittedPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Check if the entered username and password match the admin credentials
        if (username === 'admin' && password === 'adminpassword') {
            // Set the submitted username and password
            setSubmittedUsername(username);
            setSubmittedPassword(password);
            // Redirect to admin dashboard
            navigate('/admin-dashboard');
        } else {
            // Display an error message or handle invalid credentials
            alert('Invalid username or password');
        }
        // Reset the form after login attempt
        setUsername('');
        setPassword('');
    };

    return (
        <div className="navbar">
            <div className="navbar-right">
                <form onSubmit={handleLogin} >
                    <input 
                        type="text" 
                        placeholder="Username" 
                        value={username} 
                        onChange={e => setUsername(e.target.value)} 
                    /><br />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={password} 
                        onChange={e => setPassword(e.target.value)} 
                    /><br />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}

export default SuperAdminlogin;
