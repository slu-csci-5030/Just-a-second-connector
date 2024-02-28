// ReferralForm.js
import React from 'react';
import '../styles/ReferralForm.css';

function ReferralForm() {
    return (
        <div className="form-container">
            <h1>Referral Form</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="firstname">Jobseeker First Name</label>
                    <input type="text" id="firstname" name="firstname" placeholder="First Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="lastname">Jobseeker Last Name</label>
                    <input type="text" id="lastname" name="lastname" placeholder="Last Name" />
                </div>
            </form>
        </div>
    );
}

export default ReferralForm;
