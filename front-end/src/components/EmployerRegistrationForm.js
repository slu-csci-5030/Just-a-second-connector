import React, { useState } from 'react';
import axios from 'axios';
import '../styles/EmployerRegistrationForm.css';

const initialFormData = {
    // Define your initial form data fields here
    name: '',
    email: '',
    companyName: '',
    companyLocation: '',
    hiringManagerQuestion: '',
    specificPositions: '',
    payRate: '',
    eligibleBenefits: '',
    shifts: [],
    hiringType: '',
    jobDescriptionFile: null,
    offensesQuestion: '',
    videoFile: null,
    additionalInformation: '',

};

function EmployerRegistrationForm() {
    const [isSubmit, setSubmit] = useState(false);
    const [formData, setFormData] = useState(initialFormData);
    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
    
        // Handle checkboxes separately
        if (type === 'checkbox') {
            // Create a new array based on the current shifts array
            const updatedShifts = formData.shifts.includes(value)
                ? formData.shifts.filter(shift => shift !== value)
                : [...formData.shifts, value];
    
            setFormData({
                ...formData,
                shifts: updatedShifts,
            });
        } else {
            // For other inputs, update the state as usual
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    
        // Clear the corresponding error message
        setFormErrors({
            ...formErrors,
            [name]: '',
        });
    };
    

    const handleSubmit = async (e) => {
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

        try {
            // Send form data to the server
            const response = await axios.post('http://localhost:3001/employer_forms', formData);
            console.log(response.data);
            setSubmit(true);

            // Clear the form data after submission
            setFormData(initialFormData);
            setFormErrors({});
        } catch (error) {
            console.error('Error submitting form:', error);
        }
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
                    <div className="form-group">
                        <label htmlFor="payRate">What is the typical pay rate associated with these positions?</label>
                        <textarea id="payRate" name="payRate" placeholder="Answer here" value={formData.payRate} onChange={handleChange}></textarea>
                        {formErrors.payRate && <p className="error">{formErrors.payRate}</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="eligibleBenefits">Are these positions eligible for benefits? If so, which ones?</label>
                        <textarea id="eligibleBenefits" name="eligibleBenefits" placeholder="Answer here" value={formData.eligibleBenefits} onChange={handleChange}></textarea>
                        {formErrors.eligibleBenefits && <p className="error">{formErrors.eligibleBenefits}</p>}
                    </div>
                    <div className="form-group">
                        <label>What shifts does your company have available?</label>
                        <div>
                            <input type="checkbox" id="1st-shift" name="shifts" value="1st Shift (9am-5pm)" checked={formData.shifts.includes('1st Shift (9am-5pm)')} onChange={handleChange} />
                            <label htmlFor="1st-shift">1st Shift (9am-5pm)</label>
                        </div>
                        <div>
                            <input type="checkbox" id="2nd-shift" name="shifts" value="2nd Shift (5pm-12am)" checked={formData.shifts.includes('2nd Shift (5pm-12am)')} onChange={handleChange} />
                            <label htmlFor="2nd-shift">2nd Shift (5pm-12am)</label>
                        </div>
                        <div>
                            <input type="checkbox" id="3rd-shift" name="shifts" value="3rd Shift (12am-8am)" checked={formData.shifts.includes('3rd Shift (12am-8am)')} onChange={handleChange} />
                            <label htmlFor="3rd-shift">3rd Shift (12am-8am)</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Are you looking for an immediate hire or do you have ongoing positions throughout the year?</label>
                        <div>
                            <input type="radio" id="immediate-hire" name="hiringType" value="Immediate hire" checked={formData.hiringType === 'Immediate hire'} onChange={handleChange} />
                            <label htmlFor="immediate-hire">Immediate hire</label>
                        </div>
                        <div>
                            <input type="radio" id="ongoing" name="hiringType" value="Ongoing" checked={formData.hiringType === 'Ongoing'} onChange={handleChange} />
                            <label htmlFor="ongoing">Ongoing</label>
                        </div>
                        <div>
                            <input type="radio" id="both" name="hiringType" value="Both" checked={formData.hiringType === 'Both'} onChange={handleChange} />
                            <label htmlFor="both">Both</label>
                        </div>
                    </div>
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
                    <div className="form-group">
                        <label>(Optional) Past employer feedback has indicated that recruiters would like the opportunity to advocate for their company to jobseekers before they make decisions about their employment preferences. Employers are therefore invited to upload a two-minute video pitching their company to jobseekers. Feel free to cover topics such as available positions, pay, benefits, work environment, and any other perks of working for your company.</label>
                        <input type="file" id="videoFile" name="videoFile" onChange={handleChange} />
                        {formErrors.videoFile && <p className="error">{formErrors.videoFile}</p>}
                    </div>
                    <div className="form-group">
                        <label>Is there any additional information TWA should relay to jobseekers to best prepare them for your company's hiring process?</label>
                        <textarea id="additionalInformation" name="additionalInformation" placeholder="Answer here" value={formData.additionalInformation} onChange={handleChange}></textarea>
                        {formErrors.additionalInformation && <p className="error">{formErrors.additionalInformation}</p>}
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
}

export default EmployerRegistrationForm;
