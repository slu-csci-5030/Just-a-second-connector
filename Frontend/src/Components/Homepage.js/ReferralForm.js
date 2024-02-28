// Import necessary libraries and components
import React, { useState } from "react";

// ReferralForm component
function ReferralForm() {
  // State for the referrer's name
  const [referrerName, setReferrerName] = useState("");

  // Handle referrer name change
  const handleReferrerNameChange = (e) => {
    setReferrerName(e.target.value);
  };

  return (
    <div className="referral-form-container">
      <h2>Referral Form</h2>
      
      {/* Add heading for Referrer information */}
      <h3>Referrer Information</h3>

      {/* Add text field for referrer name */}
      <div className="form-group">
        <label htmlFor="referrerName">Referrer's Name:</label>
        <input
          type="text"
          id="referrerName"
          name="referrerName"
          value={referrerName}
          onChange={handleReferrerNameChange}
        />
      </div>

      {/* Add more form fields for the referral form as needed */}
    </div>
  );
}

export default ReferralForm;
