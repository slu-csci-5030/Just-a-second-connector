// ReferralForm.js
import React, { useState } from 'react';
import '../styles/ReferralForm.css';

    const JobSeekerForm = () => {
        const [felonyDate, setFelonyDate] = useState('');
        const [knowReferral, setKnowReferral] = useState(false);
        const [additionalInfo, setAdditionalInfo] = useState('');
      
        const handleFelonyDateChange = (e) => {
          setFelonyDate(e.target.value);
        };
      
        const handleKnowReferralChange = (e) => {
          setKnowReferral(e.target.checked);
        };
      
        const handleAdditionalInfoChange = (e) => {
          setAdditionalInfo(e.target.value);
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
          // Handle form submission logic here
          console.log('Submitted:', {
            felonyDate,
            knowReferral,
            additionalInfo,
          });
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
                <div className="form-group">
                    <label htmlFor="referrerOrganization">JReferrer Organization</label>
                    <input type="text" id="referrerOrganization" name="referrerOrganization" placeholder="Referrer Organization" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Referrer Email</label>
                    <input type="email" id="email" name="email" placeholder="Referrer Email" />
                </div>
                <label>Has the jobseeker been consistent in meeting your expectations (returning calls, coming to scheduled appointments, following through, etc.)?</label>
                <div class="radio-buttons">
                    <label for="1">1</label>
                    <input type="radio" id="1" name="referral_source" value="1"></input>
                    <label for="2">1</label>
                    <input type="radio" id="2" name="referral_source" value="2"></input>
                    <label for="3">1</label>
                    <input type="radio" id="3" name="referral_source" value="3"></input>
                    <label for="4">1</label>
                    <input type="radio" id="4" name="referral_source" value="4"></input>
                    <label for="5">1</label>
                    <input type="radio" id="5" name="referral_source" value="5"></input>
                </div>

                <div>
        <label htmlFor="felonyDate">Date of most recent felony conviction:</label>
        <input
          type="date"
          id="felonyDate"
          value={felonyDate}
          onChange={handleFelonyDateChange}
        />
      </div>
      <div>
        <label htmlFor="knowReferral">
          Does jobseeker know you are referring them to SLU TWA:
        </label>
        <input
          type="checkbox"
          id="knowReferral"
          checked={knowReferral}
          onChange={handleKnowReferralChange}
        />
      </div>
      <div>
        <label htmlFor="additionalInfo">Is there anything else you want:</label>
        <textarea
          id="additionalInfo"
          value={additionalInfo}
          onChange={handleAdditionalInfoChange}
        />
      </div>

                 <button type="submit">Submit</button>
            </form>
        </div>
    );

}

export default ReferralForm;
