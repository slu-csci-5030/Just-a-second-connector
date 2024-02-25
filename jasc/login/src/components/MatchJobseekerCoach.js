// MatchJobseekerCoach.js
import React, { useState } from 'react';

const MatchJobseekerCoach = ({ closeModal }) => {
  const [jobSeekers] = useState(['JobSeeker1', 'JobSeeker2', 'JobSeeker3']);
  const [jobCoaches] = useState(['JobCoach1', 'JobCoach2', 'JobCoach3']);

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <h2>Match Jobseeker with Job Coach</h2>
        
        <div>
          <h3>Job Seekers:</h3>
          <ul>
            {jobSeekers.map((seeker, index) => (
              <li key={index}>{seeker}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3>Job Coaches:</h3>
          <ul>
            {jobCoaches.map((coach, index) => (
              <li key={index}>{coach}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MatchJobseekerCoach;

