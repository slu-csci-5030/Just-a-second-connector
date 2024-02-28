// ReferralForm.js
import React, { useState } from 'react';
import '../styles/ReferralForm.css';

function ReferralForm() {
    // State for the referrer's name
    const [referrerName, setReferrerName] = useState('');

    // Handle referrer name change
    const handleReferrerNameChange = (e) => {
        setReferrerName(e.target.value);
    };

    return (
        <div className="form-container">
            <h1>Referral Form</h1>

            {/* Existing form fields */}
            <form>
                <div className="form-group">
                    <label htmlFor="firstname">Jobseeker First Name</label>
                    <input type="text" id="firstname" name="firstname" placeholder="First Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="lastname">Jobseeker Last Name</label>
                    <input type="text" id="lastname" name="lastname" placeholder="Last Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Jobseeker Phone Number</label>
                    <input type="tel" id="phone" name="phone" placeholder="Phone Number" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Jobseeker Email</label>
                    <input type="email" id="email" name="email" placeholder="Email" />
                </div>
                <div className="form-group">
                    <label>I am:</label>
                    <div>
                        <input type="radio" id="jobseeker" name="iam" value="jobseeker" />
                        <label htmlFor="jobseeker">A jobseeker and I want to sign up for the fall 2023 job fair</label>
                    </div>
                    <div>
                        <input type="radio" id="community_partner" name="iam" value="community_partner" />
                        <label htmlFor="community_partner">A community partner (PO, community organization, etc.) referring a jobseeker</label>
                    </div>
                </div>

                {/* Add heading for Referrer information */}
                <div className="form-group">
                    <h2>Referrer Information</h2>
                </div>

                {/* Add text field for referrer name */}
                <div className="form-group">
                    <label htmlFor="referrerName">Referrer's Name</label>
                    <input
                        type="text"
                        id="referrerName"
                        name="referrerName"
                        placeholder="Referrer's Name"
                        value={referrerName}
                        onChange={handleReferrerNameChange}
                    />
                </div>
            </form>
        </div>
    );
}

export default ReferralForm;
