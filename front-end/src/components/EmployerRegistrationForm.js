import React, { useState } from 'react';
import '../styles/EmployerRegistrationForm.css';

const EmployerRegistrationForm = () => {
    const [isSubmit, setSubmit] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        companyName: '',
        companyLocation: '',
        hiringManagerQuestion: '',
        specificPositions: '',
    });

    const [formErrors, setFormErrors] = useState({
        name: '',
        email: '',
        companyName: '',
        companyLocation: '',
        hiringManagerQuestion: '',
        specificPositions: '',
    });

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        if (type === 'checkbox') {
            const isChecked = e.target.checked;
            const shift = e.target.value;

            if (isChecked) {
                setFormData({
                    ...formData,
                    shifts: [...formData.shifts, shift],
                });
            } else {
                setFormData({
                    ...formData,
                    shifts: formData.shifts.filter((item) => item !== shift),
                });
            }
        } else if (type === 'file') {
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
            name: '',
            email: '',
            companyName: '',
            companyLocation: '',
            hiringManagerQuestion: '',
            specificPositions: '',
        });
        setFormErrors({
            name: '',
            email: '',
            companyName: '',
            companyLocation: '',
            hiringManagerQuestion: '',
            specificPositions: '',
        });
    };

    return (
        <div>
            <div className={`form-container ${isSubmit ? 'blur' : ''}`}>
                <h1>Employer Registration Form</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
                        {formErrors.name && <p className="error">{formErrors.name}</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                        {formErrors.email && <p className="error">{formErrors.email}</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="companyName">Company Name</label>
                        <input type="text" id="companyName" name="companyName" placeholder="Company Name" value={formData.companyName} onChange={handleChange} />
                        {formErrors.companyName && <p className="error">{formErrors.companyName}</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="companyLocation">Company Location(s)</label>
                        <input type="text" id="companyLocation" name="companyLocation" placeholder="Company Location(s)" value={formData.companyLocation} onChange={handleChange} />
                        {formErrors.companyLocation && <p className="error">{formErrors.companyLocation}</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="hiringManagerQuestion">Are you the hiring manager or person(s) making final employment hiring decisions? If yes, please list name and best method of contact. If not, whom is the final point of contact?</label>
                        <textarea id="hiringManagerQuestion" name="hiringManagerQuestion" placeholder="Answer here" value={formData.hiringManagerQuestion} onChange={handleChange}></textarea>
                        {formErrors.hiringManagerQuestion && <p className="error">{formErrors.hiringManagerQuestion}</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="specificPositions">Please list the specific positions for which your company will be hiring.</label>
                        <textarea id="specificPositions" name="specificPositions" placeholder="Answer here" value={formData.specificPositions} onChange={handleChange}></textarea>
                        {formErrors.specificPositions && <p className="error">{formErrors.specificPositions}</p>}
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