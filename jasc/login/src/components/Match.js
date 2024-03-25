import React from 'react';
import './match.css'; // Import CSS for home component

const Match = () => {
    // Dummy data for job coaches and job seekers
    const jobCoaches = ['Coach 1', 'Coach 2', 'Coach 3', 'Coach 4', 'Coach 5'];
    const jobSeekers = ['Seeker 1', 'Seeker 2', 'Seeker 3', 'Seeker 4', 'Seeker 5'];

    return (
        <div className="match">
            <div className="job-coaches">
                <h2>Job Coaches</h2>
                <ul>
                    {jobCoaches.map((coach, index) => (
                        <li key={index}>{coach}</li>
                    ))}
                </ul>
            </div>
            <div className="job-seekers">
                <h2>Job Seekers</h2>
                <ul>
                    {jobSeekers.map((seeker, index) => (
                        <li key={index}>{seeker}</li>
                    ))}
                </ul>
            </div>
            <button className="confirm-matches-button">Confirm Matches</button>
        </div>
    );
}

export default Match;
