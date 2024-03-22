import React, { useState } from 'react';

const EmployerRegistrationForm = () => {
    const [isSubmit, setSubmit] = useState(false);
    const [formData, setFormData] = useState({
        jobDescriptionFile: null,
        offensesQuestion: '',
    });

    const [formErrors, setFormErrors] = useState({
        jobDescriptionFile: '',
        offensesQuestion: '',
    });

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        if (type === 'file') {
            setFormData({
                ...formData,
                [name]: e.target.files[0],
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }

        // Clear previous error message when user starts typing
        setFormErrors({
            ...formErrors,
            [name]: '',
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

        // Perform form submission logic here
        // For example, you can send formData to your backend server

        setSubmit(true);

        // Clear the form data and errors after submission
        setFormData({
            jobDescriptionFile: null,
            offensesQuestion: '',
        });
        setFormErrors({
            jobDescriptionFile: '',
            offensesQuestion: '',
        });
    };

    return (
        <div>
            <div className={`form-container ${isSubmit ? 'blur' : ''}`}>
                <h1>Employer Registration Form</h1>
                <form onSubmit={handleSubmit}>
                    <h2>Employer Registration Form</h2>
                    <div className="form-group">
                        <label>To ensure your individualized slide deck contains videos of candidates most relevant to your hiring needs, please consider uploading job descriptions for the roles you will be hiring for below.</label>
                        <input type="file" id="jobDescriptionFile" name="jobDescriptionFile" onChange={handleChange} />
                        {formErrors.jobDescriptionFile && <p className="error">{formErrors.jobDescriptionFile}</p>}
                    </div>
                    <div className="form-group">
                        <label>Are there any offenses that would render someone ineligible for these roles? If so, which ones? TWA screens all candidates and will only introduce candidates to companies with roles for which they are eligible.</label>
                        <textarea id="offensesQuestion" name="offensesQuestion" placeholder="Answer here" value={formData.offensesQuestion} onChange={handleChange}></textarea>
                        {formErrors.offensesQuestion && <p className="error">{formErrors.offensesQuestion}</p>}
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
            {isSubmit && (
                <div className="submitted-animation">
                    Employer Registration Form Submitted Successfully!
                </div>
            )}
        </div>
    );
};

export default EmployerRegistrationForm;
