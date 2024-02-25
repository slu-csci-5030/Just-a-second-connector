import React, { useState } from 'react';
import './match.css'; // Import the CSS file for styling

function MatchDashboard() {
  // Sample data for job seekers and employers
  const jobSeekers = [
    { id: 1, name: 'Alice Johnson' },
    { id: 2, name: 'Bob Smith' },
    { id: 3, name: 'Charlie Davis' },
  ];

  const employers = [
    { id: 1, name: 'Tech Innovations Inc.' },
    { id: 2, name: 'Health Solutions Ltd.' },
    { id: 3, name: 'Green Energy Corp.' },
  ];

  const [selectedJobSeeker, setSelectedJobSeeker] = useState('');
  const [selectedEmployer, setSelectedEmployer] = useState('');

  // Function to simulate matching job seekers with employers
  const handleMatch = () => {
    console.log(`Matching job seeker ${selectedJobSeeker} with employer ${selectedEmployer}`);
    // Here you would typically update some state or make an API call
  };

  return (
    <div className="match-dashboard">
      <h1>Match Job Seekers to Employers</h1>
      <div>
        <select value={selectedJobSeeker} onChange={e => setSelectedJobSeeker(e.target.value)}>
          <option value="">Select Job Seeker</option>
          {jobSeekers.map(seeker => (
            <option key={seeker.id} value={seeker.id}>{seeker.name}</option>
          ))}
        </select>
        <select value={selectedEmployer} onChange={e => setSelectedEmployer(e.target.value)}>
          <option value="">Select Employer</option>
          {employers.map(employer => (
            <option key={employer.id} value={employer.id}>{employer.name}</option>
          ))}
        </select>
        <button onClick={handleMatch}>Match</button>
      </div>
    </div>
  );
}

export default MatchDashboard;
