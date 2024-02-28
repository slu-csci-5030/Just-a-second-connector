

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MatchJobSeekerToCoach from './MatchJobSeekerToCoach'; // Import the new component





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
            {/* Links and Routes should be declared at a higher level, typically in App.js */}
            <div>
                {/* Example link that might be moved to the appropriate component or App.js */}
                <Link to="/match-job-seeker">Match Job Seeker to Job Coach</Link>
                {/* Routes definition should be moved to the main Router context in App.js */}
            </div>
        </div>
    );
}

export default AdminDashboard;