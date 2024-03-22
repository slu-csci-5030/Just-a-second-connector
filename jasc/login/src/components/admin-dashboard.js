import React from 'react';
import { Link } from 'react-router-dom';
import './admin-dashboard.css'; // Import CSS for admin dashboard

const AdminDashboard = () => {
    return (
        <div className="admin-dashboard">
            <div className="navbar">
                <ul>
                    <li><Link to="/admin-dashboard/Match">Match job seekers with Job coaches</Link></li>
                    <li><Link to="/admin-dashboard/referral-form">Referral form</Link></li>
                    <li><Link to="/admin-dashboard/questionnaire">Questionnaire</Link></li>
                    <li><Link to="/admin-dashboard/match1">Match Jobseekers with Employers</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default AdminDashboard;
