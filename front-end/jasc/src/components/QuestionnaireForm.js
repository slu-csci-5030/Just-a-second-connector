// QuestionnaireForm.js
import React, { useState } from 'react';
import '../styles/QuestionnaireForm.css';

const QuestionnaireForm = () => {
    const [showAdditionalQuestion, setShowAdditionalQuestion] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const entries = Object.fromEntries(formData.entries());
        alert(JSON.stringify(entries, null, 2));
    };

    
    const handleEducationLevelChange = (e) => {
        setShowAdditionalQuestion(e.target.value === "Did not complete high school");
    };

    return (
        <div className="form-container">
            <h1>Jobseeker Questionnaire Form</h1>
            <form onSubmit={handleSubmit}>
                {[
                    ['First Name', 'text'], ['Last Name', 'text'], ['Birth Date', 'date'],
                    ['Phone Number', 'tel'], ['Alternate Phone Number', 'tel'], ['Email', 'email'],
                    ['Street Address', 'text'], ['City', 'text'], ['State', 'text'], ['ZIP Code', 'text'],
                    ['Race', 'text'], ['Gender', ['Male', 'Female']], ['Veteran Status', ['Not a Veteran', 'Veteran']],
                    ['Highest Education Level', ['High school diploma or equivalent (GED/HISET)', 'Did not complete high school', 'Some college but no degree', 'Associates degree', 'Bachelors degree', 'Graduate degree', 'Others'], handleEducationLevelChange],
                    ['If you do not have a high school diploma or GED/HISET, would you like to work on completing this?', ['Yes', 'No'], showAdditionalQuestion],
                    ['How will you get to interviews and work?', ['Personal Car', 'Public Transportation', 'Dropping'], true],
                    ['What is the maximum commute time you are willing to commit to?', 'text'],
                    ['Are you looking for full or part-time work?', ['Full Time', 'Part Time']],
                    ['What is your ideal schedule?', 'textarea'],
                    ['What commitments outside of work do you currently have? Are these temporary or ongoing commitments?', 'textarea'],
                    ['What industries are you most interested in?', ['Manufacturing', 'Construction', 'Warehouse', 'Healthcare', 'Facilities/Janitorial', 'Hospitality', 'Administrative', 'Social Services', 'Transportation', 'Staffing Agency']],
                    ['What industries would you like to avoid?', ['Manufacturing', 'Construction', 'Warehouse', 'Healthcare', 'Facilities/Janitorial', 'Hospitality', 'Administrative', 'Social Services', 'Transportation', 'Staffing Agency', 'Others']],
                    ['What are some skills you have that will be valuable in the workplace?', 'textarea'],
                    ['What barriers to employment do you have?', ['Transportation', 'Housing Insecurity', 'Computer Literacy', 'ID Documentation', 'Mental Health', 'Food Insecurity', 'Lack of Education', 'Lack of Work Experience', 'Interview and/or Work Clothing (if yes, call 314-333-JOBS)', 'Child Care', 'Disability', 'Others']],
                    ['What triggers may come up in the workplace for you? Do you have a plan to overcome these triggers?', 'textarea'],
                    ['Have you had trouble maintaining employment in the past? Please explain.', 'textarea'],
                    ['Are you participating in or have you completed a job readiness program?', ['Yes', 'No']],
                    ['Do you have a social media presence? How do you feel it would look to a potential employer?', 'textarea'],
                    ['Do you need any help setting up and/or checking your voice mail (using a message employers will hear)?', ['Yes', 'No']],
                    ['Do you have a resume that you feel proud of and comfortable talking about?', ['Yes', 'No']],
                    ['Do you feel confident in filling out online applications?', ['Very Confident', 'Somewhat Confident', 'Not Confident at All']],
                    ['Do you feel confident in checking, creating, and responding to emails?', ['Very Confident', 'Somewhat Confident', 'Not Confident at All']],
                    ['Do you feel confident in discussing your background during an interview?', ['Very Confident', 'Somewhat Confident', 'Not Confident at All']],
                    ['Do you feel confident discussing your skillset during an interview?', ['Very Confident', 'Somewhat Confident', 'Not Confident at All']],
                    ['Do you feel confident in getting to interviews and work?', ['Very Confident', 'Somewhat Confident', 'Not Confident at All']],
                    ['Do you feel confident in your time management skills?', ['Very Confident', 'Somewhat Confident', 'Not Confident at All']],
                    ['Can you identify skills that you have gained from being justice involved that may be beneficial in the workplace?', ['Yes', 'No']],
                    ['Do you have a COVID Vaccination or would you be willing to get one to obtain employment?', ['Vaccinated', 'Willing to Be Vaccinated', 'No']],
                    ['What supports would be most helpful to you in obtaining and maintaining employment?', 'textarea']
                ].map(([label, options, onChange]) => (
                    <div key={label}>
                        <label htmlFor={label.toLowerCase().replace(/\s+/g, '')}>{label}:</label>
                        {typeof options === 'string' ?
                            <input type={options} id={label.toLowerCase().replace(/\s+/g, '')} name={label.toLowerCase().replace(/\s+/g, '')} required />
                            :
                            options.map(option =>
                                <div key={option}>
                                    <input type={onChange ? 'radio' : 'checkbox'} id={option.toLowerCase().replace(/\s+/g, '')} name={label.toLowerCase().replace(/\s+/g, '')} value={option} onChange={onChange} required={!onChange} />
                                    <label htmlFor={option.toLowerCase().replace(/\s+/g, '')}>{option}</label>
                                </div>
                            )
                        }
                    </div>
                ))}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default QuestionnaireForm;