// ReferralForm.js
import React from 'react';
import { useState } from 'react';
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
    });

    const [formErrors, setFormErrors] = useState({
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

    const handleCheckboxChange = (e) => {
        const { name, value, checked } = e.target;

        // Update the corresponding array based on checkbox changes
        setFormData((prevFormData) => {
            const updatedArray = checked
                ? [...(prevFormData[name] || []), value]
                : (prevFormData[name] || []).filter((item) => item !== value);

            return {
                ...prevFormData,
                [name]: updatedArray,
            };
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        
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
        const response = await fetch("http://localhost:8080/demo", {
            method:'POST',
            body:JSON.stringify(formData),
            headers:{
                'Content-Type':'application/json'
            }

        })
        const data= await response.json();
        console.log(data);  
        setJobSeekers((prevJobSeekers) => [...prevJobSeekers, formData]);
        
       
        setSubmit(true);
        

        

        // Clear the form data and errors after submission
        setFormData({
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
        });
        setFormErrors({
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
        });

        
    };
    return (
        <div>
            <div className={`form-container ${isSubmit ? 'blur' : ''}`}>
            <h1>Referral Form</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="firstname">Jobseeker First Name</label>
                    <input type="text" id="firstname" name="firstname" placeholder="First Name" onChange={handleChange}/>
                    {formErrors.firstname && <p className="error">{formErrors.firstname}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="lastname">Jobseeker Last Name</label>
                    <input type="text" id="lastname" name="lastname" placeholder="Last Name" onChange={handleChange}/>
                    {formErrors.lastname && <p className="error">{formErrors.lastname}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Jobseeker Phone Number</label>
                    <input type="tel" id="phone" name="phone" placeholder="Phone Number" onChange={handleChange}/>
                    {formErrors.phone && <p className="error">{formErrors.phone}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Jobseeker Email</label>
                    <input type="email" id="email" name="email" placeholder="Email" onChange={handleChange}/>
                    {formErrors.email && <p className="error">{formErrors.email}</p>}

                </div>
                <div className="form-group">
                    <label>I am:</label>
                    <div>
                        <label htmlFor="jobseeker"><input type="radio" id="jobseeker" name="iam" value="jobseeker" onChange={handleChange}/>A jobseeker and I want to sign up for the fall 2023 job fair</label>
                        
                    </div>
                    <div>
                        
                        <label htmlFor="community_partner"><input type="radio" id="community_partner" name="iam" value="community_partner" onChange={handleChange}/>A community partner (PO, community organization, etc.) referring a jobseeker</label>
                        
                    </div>
                    {formErrors.iam && <p className="error">{formErrors.iam}</p>}
                </div>
                <h2>Referrer Information</h2>
                <label>Thanks for taking the time to give us information about the jobseeker you are referring!</label>
                <div className="form-group">
                    <label htmlFor="referrername">Referrer Name</label>
                    <input type="text" id="referrername" name="referrername" placeholder="Name" onChange={handleChange}/>
                    {formErrors.referrername && <p className="error">{formErrors.referrername}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="referrerorganization">Referrer Organization</label>
                    <input type="text" id="lastname" name="referrerorganization" placeholder="Organization" onChange={handleChange}/>
                    {formErrors.referrerorganization && <p className="error">{formErrors.referrerorganization}</p>}
                </div> 
                <div className="form-group">
                    <label htmlFor="email">Referrer Email</label>
                    <input type="email" id="email" name="referreremail" placeholder="Email" onChange={handleChange}/>
                    {formErrors.referreremail && <p className="error">{formErrors.referreremail}</p>}
                </div>
                <br></br>
                <br></br><br></br>
                <label>Has the jobseeker been consistent in meeting your expectations (returning calls, coming to scheduled appointments, following through, etc.)?</label>
                <br></br><br></br>
                <div className="radio-button-icons">
                    <label htmlFor="rating1">1</label><br></br>
                    <label htmlFor="rating2">2</label><br></br>
                    <label htmlFor="rating3">3</label><br></br>
                    <label htmlFor="rating4">4</label><br></br>
                    <label htmlFor="rating5">5</label><br></br>
                </div>
                <div className="radio-buttons">
                    <label><input type="radio" id="rating1" name="rating" value="1" onChange={handleChange}></input></label><br></br>
                    <label><input type="radio" id="rating2" name="rating" value="2" onChange={handleChange}></input></label><br></br>
                    <label><input type="radio" id="rating3" name="rating" value="3" onChange={handleChange}></input></label><br></br>
                    <label><input type="radio" id="rating4" name="rating" value="4" onChange={handleChange}></input></label><br></br>
                    <label><input type="radio" id="rating5" name="rating" value="5" onChange={handleChange}></input></label><br></br>
                    {formErrors.rating && <p className="error">{formErrors.rating}</p>}
                </div>
                <br></br><br></br>
                <label>What barriers have you identified that the jobseeker has that relate to employment? (Check as many as apply.)</label>
                <br></br><br></br>
                    <div className="checkbox-container">
                        <label htmlFor="barrier1"><input type="checkbox" id="barrier1" name="barriers" value="Transportation" onChange={handleCheckboxChange}></input>  Transportation </label><br></br>
                    </div>
                    <div className="checkbox-container">
                        <label htmlFor="barrier2"><input type="checkbox" id="barrier2" name="barriers" value="Housing insecurity" onChange={handleCheckboxChange}></input> Housing insecurity</label><br></br>
                    </div>
                    <div className="checkbox-container">
                        <label htmlFor="barrier3"><input type="checkbox" id="barrier3" name="barriers" value="Computer literacy" onChange={handleCheckboxChange}></input>  Computer literacy</label><br></br>
                    </div>
                    <div className="checkbox-container">
                        <label htmlFor="barrier4"><input type="checkbox" id="barrier4" name="barriers" value="ID documentation" onChange={handleCheckboxChange}></input> ID documentation</label><br></br>
                    </div>
                    <div className="checkbox-container">
                        <label htmlFor="barrier5"><input type="checkbox" id="barrier5" name="barriers" value="Mental health" onChange={handleCheckboxChange}></input>  Mental health</label><br></br>
                    </div>
                    <div className="checkbox-container">
                        <label htmlFor="barrier6"><input type="checkbox" id="barrier6" name="barriers" value="Food insecurity" onChange={handleCheckboxChange}></input>  Food insecurity</label><br></br>
                    </div>
                    <div className="checkbox-container">
                        <label htmlFor="barrier7"><input type="checkbox" id="barrier7" name="barriers" value="Lack of educationi" onChange={handleCheckboxChange}></input>  Lack of education</label><br></br>
                    </div>
                    <div className="checkbox-container">
                        <label htmlFor="barrier8"><input type="checkbox" id="barrier8" name="barriers" value="Lack of work experience" onChange={handleCheckboxChange}></input>  Lack of work experience</label><br></br>
                    </div>
                    <div className="checkbox-container">
                        <label htmlFor="barrier9"><input type="checkbox" id="barrier9" name="barriers" value="Interview and/or work clothing" onChange={handleCheckboxChange}></input>  Interview and/or work clothing</label><br></br>
                    </div>
                    <div className="checkbox-container">
                        <label htmlFor="barrier10"><input type="checkbox" id="barrier10" name="barriers" value="Childcare" onChange={handleCheckboxChange}></input>  Childcare</label><br></br>
                    </div>
                    <div className="checkbox-container">
                        <label htmlFor="barrier11"><input type="checkbox" id="barrier11" name="barriers" value="Disability" onChange={handleCheckboxChange}></input>  Disability</label><br></br>
                    </div>
                    <div className="checkbox-container">
                        <label htmlFor="barrier12"><input type="checkbox" id="barrier12" name="barriers" value="None" onChange={handleCheckboxChange}></input>  Unknown</label><br></br>
                    </div>
                    <div className="checkbox-container">
                        <label htmlFor="barrier13"><input type="checkbox" id="barrier13" name="barriers" value="Other..." onChange={handleCheckboxChange}></input>  Other...</label><br></br>
                    </div>
                    {formErrors.barriers && <p className="error">{formErrors.barriers}</p>}
                    <br></br><br></br>
                <label>What convictions does the jobseeker have?</label>
                <br></br><br></br>
                    <div className="checkbox-container">
                        <label htmlFor="barrier1"><input type="checkbox" id="barrier1" name="convictions" value="Sex offense" onChange={handleCheckboxChange}></input>  Sex offense </label><br></br>
                    </div>
                    <div className="checkbox-container">
                        <label htmlFor="barrier2"><input type="checkbox" id="barrier2" name="convictions" value="Violent offense" onChange={handleCheckboxChange}></input> Violent offense</label><br></br>
                    </div>
                    <div className="checkbox-container">
                        <label htmlFor="barrier3"><input type="checkbox" id="barrier3" name="convictions" value="Armed Criminal Action" onChange={handleCheckboxChange}></input>  Armed Criminal Action</label><br></br>
                    </div>
                    <div className="checkbox-container">
                        <label htmlFor="barrier4"><input type="checkbox" id="barrier4" name="convictions" value="Offense involving children" onChange={handleCheckboxChange}></input> Offense involving children</label><br></br>
                    </div>
                    <div className="checkbox-container">
                        <label htmlFor="barrier5"><input type="checkbox" id="barrier5" name="convictions" value="Theft" onChange={handleCheckboxChange}></input>  Theft</label><br></br>
                    </div>
                    <div className="checkbox-container">
                        <label htmlFor="barrier6"><input type="checkbox" id="barrier6" name="convictions" value="Drug-related offense" onChange={handleCheckboxChange}></input>  Drug-related offense</label><br></br>
                    </div>
                    {formErrors.convictions && <p className="error">{formErrors.convictions}</p>}
                <div className="form-group">
                <br></br><br></br>
                    <label htmlFor="shortanswer">Date of most recent felony conviction</label>
                    <input type="text" id="shortanswer" name="felonyDate" placeholder="Answer" rows="6" cols="30" onChange={handleChange}></input>
                    {formErrors.felonyDate && <p className="error">{formErrors.felonyDate}</p>}
                </div>
                <br></br><br></br>
                <div className="form-group">
                    <label>Does the jobseeker know that you are referring them to SLU TWA?</label>
                    <div>
                        <label htmlFor="yes"><input type="radio" id="yes" name="knowsReferral" value="yes" onChange={handleChange}></input>  Yes</label>
                    </div>
                    <div>
                        <label htmlFor="no"><input type="radio" id="no" name="knowsReferral" value="no" onChange={handleChange}></input>  No</label>
                    </div>
                    {formErrors.knowsReferral && <p className="error">{formErrors.knowsReferral}</p>}

                </div>   
                <br></br><br></br>
                <div className="form-group">
                    <label htmlFor="shortanswer">Is there anything else you want TWA to know about the jobseeker you are referring? (Optional)</label>
                    <input type="text" id="shortanswer" name="additionalInfo" placeholder="Answer" rows="6" cols="30" onChange={handleChange}></input>
                    {formErrors.additionalInfo && <p className="error">{formErrors.additionalInfo}</p>}

                </div>
                <br></br><br></br>
                <div className="form-group">
                    <label htmlFor="description">  Tell Us About Yourself</label>
                    <input type="text" id="description" name="selfDescription" placeholder="Description" rows="6" cols="30" onChange={handleChange}></input>
                    {formErrors.selfDescription && <p className="error">{formErrors.selfDescription}</p>}

                </div>
                <br></br><br></br>
                <label>What barriers or issues do you want us to know about that might make it hard for you to look for or keep a job? (Check as many boxes as apply.)</label>
                <br></br><br></br>
                    <div className="checkbox-container">
                        <label htmlFor="barrier1"><input type="checkbox" id="barrier1" name="selfBarriers" value="Transportation" onChange={handleCheckboxChange}></input>  Transportation </label><br></br>
                    </div>
                    <div className="checkbox-container">
                        <label htmlFor="barrier2"><input type="checkbox" id="barrier2" name="selfBarriers" value="Housing insecurity"onChange={handleCheckboxChange}></input> Housing insecurity</label><br></br>
                    </div>
                    <div className="checkbox-container">
                        <label htmlFor="barrier3"><input type="checkbox" id="barrier3" name="selfBarriers" value="Computer literacy" onChange={handleCheckboxChange}></input>  Computer literacy</label><br></br>
                    </div>
                    <div className="checkbox-container">
                        <label htmlFor="barrier4"><input type="checkbox" id="barrier4" name="selfBarriers" value="ID documentation" onChange={handleCheckboxChange}></input> ID documentation</label><br></br>
                    </div>
                    <div className="checkbox-container">
                        <label htmlFor="barrier5"><input type="checkbox" id="barrier5" name="selfBarriers" value="Mental health" onChange={handleCheckboxChange}></input>  Mental health</label><br></br>
                    </div>
                    <div className="checkbox-container">
                        <label htmlFor="barrier6"><input type="checkbox" id="barrier6" name="selfBarriers" value="Food insecurity" onChange={handleCheckboxChange}></input>  Food insecurity</label><br></br>
                    </div>
                    <div className="checkbox-container">
                        <label htmlFor="barrier7"><input type="checkbox" id="barrier7" name="selfBarriers" value="Lack of educationi" onChange={handleCheckboxChange}></input>  Lack of education</label><br></br>
                    </div>
                    <div className="checkbox-container">
                        <label htmlFor="barrier8"><input type="checkbox" id="barrier8" name="selfBarriers" value="Lack of work experience"onChange={handleCheckboxChange}></input>  Lack of work experience</label><br></br>
                    </div>
                    <div className="checkbox-container">
                        <label htmlFor="barrier9"><input type="checkbox" id="barrier9" name="selfBarriers" value="Interview and/or work clothing"onChange={handleCheckboxChange}></input>  Interview and/or work clothing</label><br></br>
                    </div>
                    <div className="checkbox-container">
                        <label htmlFor="barrier10"><input type="checkbox" id="barrier10" name="selfBarriers" value="Childcare" onChange={handleCheckboxChange}></input>  Childcare</label><br></br>
                    </div>
                    <div className="checkbox-container">
                        <label htmlFor="barrier11"><input type="checkbox" id="barrier11" name="selfBarriers" value="Disability" onChange={handleCheckboxChange}></input>  Disability</label><br></br>
                    </div>
                    <div className="checkbox-container">
                        <label htmlFor="barrier12"><input type="checkbox" id="barrier12" name="selfBarriers" value="None" onChange={handleCheckboxChange}></input>  Unknown</label><br></br>
                    </div>
                    <div className="checkbox-container">
                        <label htmlFor="barrier13"><input type="checkbox" id="barrier13" name="selfBarriers" value="Other..." onChange={handleCheckboxChange}></input>  Other...</label><br></br>
                    </div>
                    {formErrors.selfBarriers && <p className="error">{formErrors.selfBarriers}</p>}
                    <br></br><br></br>
                <label>We want to make sure to match you with employers who do not have restrictions on hiring someone with your particular background.  To your comfort level, please check any boxes for charges that you think will come up when an employer does your background check:</label>
                <br></br><br></br>
                    <div className="checkbox-container">
                        <label htmlFor="barrier1"><input type="checkbox" id="barrier1" name="backgroundCheckIssues" value="Sex offense" onChange={handleCheckboxChange}></input>  Sex offense </label><br></br>
                    </div>
                    <div className="checkbox-container">
                        <label htmlFor="barrier2"><input type="checkbox" id="barrier2" name="backgroundCheckIssues" value="Violent offense" onChange={handleCheckboxChange}></input> Violent offense</label><br></br>
                    </div>
                    <div className="checkbox-container">
                        <label htmlFor="barrier3"><input type="checkbox" id="barrier3" name="backgroundCheckIssues" value="Armed Criminal Action" onChange={handleCheckboxChange}></input>  Armed Criminal Action</label><br></br>
                    </div>
                    <div className="checkbox-container">
                        <label htmlFor="barrier4"><input type="checkbox" id="barrier4" name="backgroundCheckIssues" value="Offense involving children" onChange={handleCheckboxChange}></input> Offense involving children</label><br></br>
                    </div>
                    <div className="checkbox-container">
                        <label htmlFor="barrier5"><input type="checkbox" id="barrier5" name="backgroundCheckIssues" value="Theft" onChange={handleCheckboxChange}></input>  Theft</label><br></br>
                    </div>
                    <div className="checkbox-container">
                        <label htmlFor="barrier6"><input type="checkbox" id="barrier6" name="backgroundCheckIssues" value="Drug-related offense" onChange={handleCheckboxChange}></input>  Drug-related offense</label><br></br>
                    </div>
                    <div className="checkbox-container">
                        <label htmlFor="barrier7"><input type="checkbox" id="barrier7" name="backgroundCheckIssues" value="other.." onChange={handleCheckboxChange}></input>  Other..</label><br></br>
                    </div>
                    {formErrors.backgroundCheckIssues && <p className="error">{formErrors.backgroundCheckIssues}</p>}

                    <br></br><br></br>
                <div className="form-group">
                    <label htmlFor="description">  Date of most recent felony conviction (estimate to the best of your knowledge)</label>
                    <input type="text" id="description" name="felonyConvictionDate" placeholder="Description" rows="6" cols="30" onChange={handleChange}></input>
                    {formErrors.felonyConvictionDate && <p className="error">{formErrors.felonyConvictionDate}</p>}
                </div>
                <br></br><br></br>
                <div className="form-group">
                    <label htmlFor="description">  (Optional) Is there anything else we should know before we pair you with a volunteer job coach?</label>
                    <input type="text" id="description" name="additionalComments" placeholder="Description" rows="6" cols="30" onChange={handleChange}></input>
                    {formErrors.additionalComments && <p className="error">{formErrors.additionalComments}</p>}

                </div>
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
