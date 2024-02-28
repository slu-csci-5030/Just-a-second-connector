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
      <div className="form-group">
      <label for="name">Tell us about yourself</label><br>
        <textarea id="name" name="name" rows="5" cols="30"></textarea><br>
        
        <h3>What barriers or issues do you want us to know about that might make it hard for you to look for or keep a job?
            (Check as many boxes as apply.)</h3>
        <label for="barrier1"><input type="checkbox" id="barrier1" name="barrier[]" value="Transportation"> Transportation</input></label></br>
        <label for="barrier2"><input type="checkbox" id="barrier2" name="barrier[]" value="Housing insecurity"> Housing insecurity</input></label></br>
        <label for="barrier3"><input type="checkbox" id="barrier3" name="barrier[]" value="Computer literacy"> Computer literacy</input></label><br>
        <label for="barrier4"><input type="checkbox" id="barrier4" name="barrier[]" value="ID documentation"> ID documentation</input></label><br>
        <label for="barrier5"><input type="checkbox" id="barrier5" name="barrier[]" value="Mental health"> Mental health</input></label><br>
        <label for="barrier6"><input type="checkbox" id="barrier6" name="barrier[]" value="Food insecurity"> Food insecurity</input></label></br>
        <label for="barrier7"><input type="checkbox" id="barrier7" name="barrier[]" value="Lack of educationi"> Lack of education</input></label></br>
        <label for="barrier8"><input type="checkbox" id="barrier8" name="barrier[]" value="Lack of work experience"> Lack of work experience</input></label></br>
        <label for="barrier9"><input type="checkbox" id="barrier9" name="barrier[]" value="Interview and/or work clothing"> Interview and/or work clothing</input></label><br>
        <label for="barrier10"><input type="checkbox" id="barrier10" name="barrier[]" value="Childcare"> Childcare</input></label></br>
        <label for="barrier11"><input type="checkbox" id="barrier11" name="barrier[]" value="Disability"> Disability</input></label><br></br>
        <label for="barrier12"><input type="checkbox" id="barrier12" name="barrier[]" value="None"> None</input></label><br></br>
        <label for="barrier13"><input type="checkbox" id="barrier13" name="barrier[]" value="Other..."> Other...</input></label><br>
        <br>
        <input type="submit" value="Submit"></input>
       </div>
            </form>
        </div>
        
    );
}

export default ReferralForm;
