import React, { useState, useEffect } from 'react';

// Dummy data for job seekers and job coaches
// In a real app, you'd fetch this data from a server
const jobSeekers = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
const jobCoaches = [{ id: 1, name: 'Coach 1' }, { id: 2, name: 'Coach 2' }];

function MatchJobSeekerToCoach() {
  const [selectedJobSeeker, setSelectedJobSeeker] = useState('');
  const [selectedJobCoach, setSelectedJobCoach] = useState('');

  // Function to handle the matching (placeholder for your logic)
  const handleMatch = () => {
    alert(`Matching ${selectedJobSeeker} with ${selectedJobCoach}`);
    // Here you would typically update your backend with the match
  };

  return (
    <div>
      <h2>Match Job Seeker to Job Coach</h2>
      <select
        value={selectedJobSeeker}
        onChange={(e) => setSelectedJobSeeker(e.target.value)}
      >
        <option value="">Select Job Seeker</option>
        {jobSeekers.map((seeker) => (
          <option key={seeker.id} value={seeker.name}>{seeker.name}</option>
        ))}
      </select>
      <select
        value={selectedJobCoach}
        onChange={(e) => setSelectedJobCoach(e.target.value)}
      >
        <option value="">Select Job Coach</option>
        {jobCoaches.map((coach) => (
          <option key={coach.id} value={coach.name}>{coach.name}</option>
        ))}
      </select>
      <button onClick={handleMatch}>Match</button>
      <div className="match-container">
    <h2 className="match-heading">Match Job Seeker to Job Coach</h2>
    <select
      className="match-select"
      value={selectedJobSeeker}
      onChange={(e) => setSelectedJobSeeker(e.target.value)}
    >
      {/* Options */}
    </select>
    <select
      className="match-select"
      value={selectedJobCoach}
      onChange={(e) => setSelectedJobCoach(e.target.value)}
    >
      {/* Options */}
    </select>
    <button className="match-button" onClick={handleMatch}>Match</button>
  </div>
    </div>
    
  );
}

export default MatchJobSeekerToCoach;
