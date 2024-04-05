import React, { useState } from 'react';
import '../styles/AdminDashBoard.css'; // Make sure to include your CSS styles

const AdminDashboard = () => {
    const [selectedOption, setSelectedOption] = useState('matchCoaches'); // Default selected option

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };
    const renderMatchEmployersContent = () => {
        const matchedJobSeekers = [
            // Add matched job seekers here 
        ];        

        return (
            <div className="scroll-section">
                <h3>Current Matches</h3>
                <div className="scrollable">
                    <div className="content-long">
                        {/* Implement the ACCEPT and REJECT button functionality for a list of matched jobseekers with employers */}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="admin-dashboard-container">
            {/* Navbar Section */}
            <h2 className="dashboard-heading">Welcome to the Admin Dashboard!</h2>
            <div className="navbar">
                <div className="navbar-left">
                    <div className="content" onClick={() => handleOptionClick('matchCoaches')}>Match job seekers with job coaches</div>
                    <div className="content" onClick={() => handleOptionClick('matchEmployers')}>Match Jobseekers with Employers</div>
                </div>
                <div className="navbar-right">
                    {selectedOption === 'matchCoaches' && (
                        <div className="scroll-section">
                            <h3>Job Coaches</h3>
                            <div className="scrollable">
                                <div className="content-long">
                                    <ul>
                                        <li>Daniel Miller <button>+</button></li>
                                        <li>Olivia Martinez <button>+</button></li>
                                        <li>Noah Brown <button>+</button></li>
                                        <li>Isabella Davis <button>+</button></li>
                                        <li>William Wilson <button>+</button></li>
                                        <li>Sophia Moore <button>+</button></li>
                                        <li>James Taylor <button>+</button></li>
                                        <li>Charlotte Anderson <button>+</button></li>
                                        <li>Benjamin Thomas <button>+</button></li>
                                        <li>Amelia Jackson <button>+</button></li>
                                        <li>John Doe <button>+</button></li>
                                        <li>Jane Smith <button>+</button></li>
                                        <li>Michael Johnson <button>+</button></li>
                                        <li>Sarah Brown <button>+</button></li>
                                        {/* Add more names here */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}
                    {selectedOption === 'matchCoaches' && (
                        <div className="scroll-section">
                            <h3>Job Seekers</h3>
                            <div className="scrollable">
                                <div className="content-long">
                                    <ul>
                                        {/* Add job seekers here */}
                                        <li>Emily White <button>+</button></li>
                                        <li>Christopher Green <button>+</button></li>
                                        <li>Jessica Turner <button>+</button></li>
                                        <li>Matthew Harris <button>+</button></li>
                                        <li>Ashley Clark <button>+</button></li>
                                        <li>Joshua Lewis <button>+</button></li>
                                        <li>Amanda Robinson <button>+</button></li>
                                        <li>Andrew Walker <button>+</button></li>
                                        <li>Elizabeth Allen <button>+</button></li>
                                        <li>Ryan Young <button>+</button></li>
                                        {/* Add more names here */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}
                    {selectedOption === 'matchEmployers' && renderMatchEmployersContent()}
                </div>
            </div>

            <div className="confirm-matches-container">
                <button className="confirm-matches-button">Confirm Matches</button>
            </div>

            {/* Main Dashboard Content */}
            
        </div>
    );
};

export default AdminDashboard;
