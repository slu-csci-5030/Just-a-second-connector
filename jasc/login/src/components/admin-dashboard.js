// AdminDashboard.js
import React, { useState } from 'react';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [showModal, setShowModal] = useState(false);

  const handleMatchButtonClick = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="admin-dashboard">
      <h1>Welcome to Admin Dashboard</h1>
      <button onClick={handleMatchButtonClick}>
        Match Jobseeker with Job Coach
      </button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>
              &times;
            </span>
            <h2>Match Jobseeker with Job Coach</h2>
            <p>Modal content goes here...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;



