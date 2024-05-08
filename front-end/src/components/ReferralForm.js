import React, { useState } from 'react';
import '../styles/ReferralForm.css';

// Default form data
const initialFormData = {
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    iam: '',
    referrername: '',
    referrerorganization: '',
    referreremail: '',
    rating: '',
    barriers: [],
    convictions: [],
    felonyDate: '',
    knowsReferral: '',
    additionalInfo: '',
    selfDescription: '',
    selfBarriers: [],
    backgroundCheckIssues: [],
    felonyConvictionDate: '',
    additionalComments: '',
};

// Default form errors
const initialFormErrors = {
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    iam: '',
    referrername: '',
    referrerorganization: '',
    referreremail: '',
    rating: '',
    felonyDate: '',
    knowsReferral: '',
    selfDescription: '',
    felonyConvictionDate: '',
};

// Function to validate form data
const validateForm = (formData) => {
    const errors = {};
    Object.keys(formData).forEach((key) => {
        if (!formData[key] && key !== 'additionalInfo' && key !== 'additionalComments') {
            errors[key] = 'This field is required';
        }
    });
    return errors;
};

function ReferralForm() {
    const [isSubmit, setSubmit] = useState(false);
    const [jobSeekers, setJobSeekers] = useState([]);
    const [formData, setFormData] = useState(initialFormData);
    const [formErrors, setFormErrors] = useState(initialFormErrors);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setFormErrors((prevErrors) => ({
            ...prevErrors,
            [name]: '',
        }));
    };

    const handleCheckboxChange = (e) => {
        const { name, value, checked } = e.target;
        const updatedArray = checked
            ? [...(formData[name] || []), value]
            : formData[name].filter((item) => item !== value);
        
        setFormData({
            ...formData,
            [name]: updatedArray,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const errors = validateForm(formData);
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        const response = await fetch("http://localhost:8080/demo", {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await response.json();
        console.log(data);

        setJobSeekers((prevJobSeekers) => [...prevJobSeekers, formData]);
        setSubmit(true);

        // Reset form and errors
        setFormData(initialFormData);
        setFormErrors(initialFormErrors);
    };

    return (
        <div>
            <div className={`form-container ${isSubmit ? 'blur' : ''}`}>
                <h1>Referral Form</h1>
                <form onSubmit={handleSubmit}>
                    {/* Form fields */}
                    {/* Example: */}
                    <div className="form-group">
                        <label htmlFor="firstname">Jobseeker First Name</label>
                        <input type="text" id="firstname" name="firstname" placeholder="First Name" onChange={handleChange} />
                        {formErrors.firstname && <p className="error">{formErrors.firstname}</p>}
                    </div>
                    
                    {/* Include other form fields with corresponding error handling */}
                    
                    <button type="submit">Submit</button>
                </form>
            </div>
            {isSubmit && (
                <div className="submitted-animation">
                    Referral Form Submitted Successfully!
                </div>
            )}
        </div>
    );
}

export default ReferralForm;
