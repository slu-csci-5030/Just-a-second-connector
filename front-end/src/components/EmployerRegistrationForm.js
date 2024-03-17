import React, { useState } from 'react';
import '../styles/EmployerRegistrationForm.css';

const EmployerRegistrationForm = () => {
    const [selectedJobDescriptionFile, setSelectedJobDescriptionFile] = useState(null);
    const [selectedVideoFile, setSelectedVideoFile] = useState(null);
    const [selectedShifts, setSelectedShifts] = useState([]);
    const [selectedHiringType, setSelectedHiringType] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        if (selectedJobDescriptionFile) {
            formData.append('jobDescriptionFile', selectedJobDescriptionFile);
        }
        if (selectedVideoFile) {
            formData.append('videoFile', selectedVideoFile);
        }
        // Append selected shifts to form data
        selectedShifts.forEach(shift => {
            formData.append('shifts', shift);
        });
        if (selectedHiringType) {
            formData.append('hiringType', selectedHiringType);
        }
        const entries = Object.fromEntries(formData.entries());
        alert(JSON.stringify(entries, null, 2));
    };

    const handleJobDescriptionFileChange = (e) => {
        setSelectedJobDescriptionFile(e.target.files[0]);
    };

    const handleVideoFileChange = (e) => {
        setSelectedVideoFile(e.target.files[0]);
    };

    const handleShiftCheckboxChange = (e) => {
        const shift = e.target.value;
        setSelectedShifts(prevShifts => {
            if (prevShifts.includes(shift)) {
                return prevShifts.filter(s => s !== shift);
            } else {
                return [...prevShifts, shift];
            }
        });
    };

    const handleHiringTypeChange = (e) => {
        setSelectedHiringType(e.target.value);
    };

    return (
        <div className="form-container">
            <h1>Employer Registration Form</h1>
            <form onSubmit={handleSubmit}>
                {[
                    ['Name', 'text'],
                    ['Email', 'email'],
                    ['Company Name', 'text'],
                    ['Street Address', 'text'],
                    ['City', 'text'],
                    ['State', 'text'],
                    ['ZIP Code', 'text'],
                    ['Are you the hiring manager or person(s) making final employment hiring decisions?', 'textarea'],
                    ['Please list the specific positions for which your company will be hiring.', 'textarea'],
                    ['What is the typical pay rate associated with these positions?', 'textarea'],
                    ['Are these positions eligible for benefits? If so, which ones?', 'textarea'],
                    ['What shifts does your company have available?', ['1st Shift (9am-5pm)', '2nd Shift (5pm-12am)', '3rd Shift (12am-8am)', 'other']],
                    ['Are you looking for an immediate hire or do you have ongoing positions throughout the year?', ['Immediate hire', 'Ongoing', 'both']],
                    ['To ensure your individualized slide deck contains videos of candidates most relevant to your hiring needs, please consider uploading job descriptions for the roles you will be hiring for below.', 'file'],
                    ['Are there any offenses that would render someone ineligible for these roles?', 'textarea'],
                    ['(Optional) Past employer feedback has indicated that recruiters would like the opportunity to advocate for their company to jobseekers before they make decisions about their employment preferences. Employers are therefore invited to upload a two minute video pitching their company to jobseekers. Feel free to cover topics such as available positions, pay, benefits, work environment, and any other perks of working for your company.', 'file'],
                    ['Is there any additional information TWA should relay to jobseekers to best prepare them for your companys hiring process?', 'textarea']
                ].map((item, index) => {
                    if (Array.isArray(item)) {
                        const [label, options] = item;
                        if (label === 'What shifts does your company have available?' || label === 'Are you looking for an immediate hire or do you have ongoing positions throughout the year?') {
                            return (
                                <div key={index}>
                                    <label>{label}</label>
                                    <br />
                                    {options.map((option, idx) => (
                                        <div key={idx}>
                                            <input
                                                type="checkbox"
                                                id={`${label.replace(/\s+/g, '-')}-${idx}`}
                                                name={label === 'What shifts does your company have available?' ? 'shifts' : 'hiringType'}
                                                value={option}
                                                onChange={label === 'What shifts does your company have available?' ? handleShiftCheckboxChange : handleHiringTypeChange}
                                            />
                                            <label htmlFor={`${label.replace(/\s+/g, '-')}-${idx}`}>{option}</label>
                                            <br />
                                        </div>
                                    ))}
                                </div>
                            );
                        } else {
                            return (
                                <div key={index}>
                                    <label htmlFor={label.toLowerCase().replace(/\s+/g, '')}>{label}:</label>
                                    {options === 'textarea' ? (
                                        <textarea id={label.toLowerCase().replace(/\s+/g, '')} name={label.toLowerCase().replace(/\s+/g, '')} required />
                                    ) : options === 'file' ? (
                                        <input type="file" id={label.toLowerCase().replace(/\s+/g, '')} name={label.toLowerCase().replace(/\s+/g, '')} onChange={label === 'To ensure your individualized slide deck contains videos of candidates most relevant to your hiring needs, please consider uploading job descriptions for the roles you will be hiring for below.' ? handleJobDescriptionFileChange : handleVideoFileChange} required />
                                    ) : (
                                        <input type={options} id={label.toLowerCase().replace(/\s+/g, '')} name={label.toLowerCase().replace(/\s+/g, '')} required />
                                    )}
                                </div>
                            );
                        }
                    } else if (typeof item === 'string') {
                        return (
                            <div key={index}>
                                <label>{item}</label>
                            </div>
                        );
                    } else {
                        return null;
                    }
                })}
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default EmployerRegistrationForm;
