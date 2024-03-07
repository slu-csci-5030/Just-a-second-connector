import React, { useState } from 'react';
import '../styles/ReferralForm.css';

function ReferralForm() {
    const [isSubmit, setSubmit] = useState(false);
    const [jobSeekers, setJobSeekers] = useState([]);
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        phone: '',
        email: '',
        iam: '',
    });
    const [formErrors, setFormErrors] = useState({
        firstname: '',
        lastname: '',
        phone: '',
        email: '',
        iam: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        
        // Clear previous error message when user starts typing
        setFormErrors({
            ...formErrors,
            [e.target.name]: '',
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate form fields
        const errors = {};
        Object.keys(formData).forEach((key) => {
            if (!formData[key]) {
                errors[key] = 'This field is required';
            }
        });

        // If there are errors, display warnings and prevent form submission
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        // Update jobSeekers state with the form data
        setJobSeekers((prevJobSeekers) => [...prevJobSeekers, formData]);

        // Show submitted animation
        setSubmit(true);
        
        // Clear the form data and errors after submission
        setFormData({
            firstname: '',
            lastname: '',
            phone: '',
            email: '',
            iam: '',
        });
        setFormErrors({
            firstname: '',
            lastname: '',
            phone: '',
            email: '',
            iam: '',
        });
    }

    return (
        <div>
             <div className={`form-container ${isSubmit ? 'blur' : ''}`}>
            <h1>Referral Form</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="firstname">Jobseeker First Name</label>
                    <input type="text" id="firstname" name="firstname" placeholder="First Name" value={formData.firstname} onChange={handleChange} />
                    {formErrors.firstname && <p className="error">{formErrors.firstname}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="lastname">Jobseeker Last Name</label>
                    <input type="text" id="lastname" name="lastname" placeholder="Last Name" value={formData.lastname} onChange={handleChange} />
                    {formErrors.lastname && <p className="error">{formErrors.lastname}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Jobseeker Phone Number</label>
                    <input type="tel" id="phone" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
                    {formErrors.phone && <p className="error">{formErrors.phone}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Jobseeker Email</label>
                    <input type="email" id="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                    {formErrors.email && <p className="error">{formErrors.email}</p>}
                </div>
                <div className="form-group">
                    <label>I am:</label>
                    <div>
                        <label htmlFor="jobseeker"> 
                            <input type="radio" id="jobseeker" name="iam" value="jobseeker" checked={formData.iam === 'jobseeker'} onChange={handleChange} />
                            A jobseeker and I want to sign up for the fall 2023 job fair
                        </label>
                        {formErrors.iam && <p className="error">{formErrors.iam}</p>}
                    </div>
                    <div>
                        <label htmlFor="community_partner">
                            <input type="radio" id="community_partner" name="iam" value="community_partner" checked={formData.iam === 'community_partner'} onChange={handleChange} />
                            A community partner (PO, community organization, etc.) referring a jobseeker
                        </label>
                    </div>
                </div>
                <button type='submit' className='submitButton'>Submit</button>
            </form>
        </div>
        {isSubmit && (
                <div className="submitted-animation">
                    Submitted!
                </div>
            )}
        </div>
       
    );
}

export default ReferralForm;
