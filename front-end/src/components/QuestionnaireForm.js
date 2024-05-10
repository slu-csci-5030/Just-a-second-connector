import React, { useState } from "react";
import axios from "axios";
import "../styles/QuestionnaireForm.css";

const QuestionnaireForm = () => {
	const [isSubmit, setSubmit] = useState(false);
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		birthDate: "",
		phoneNumber: "",
		alternatePhoneNumber: "",
		email: "",
		streetAddress: "",
		city: "",
		state: "",
		zipCode: "",
		race: "",
		gender: "",
		veteranStatus: "",
		highestEducationLevel: "",
		completionStatus: "",
		transportation: "",
		commuteTime: "",
		employmentType: "",
		idealSchedule: "",
		outsideCommitments: "",
		interestedIndustries: [],
		avoidIndustries: [],
		valuableSkills: "",
		employmentBarriers: [],
		workplaceTriggers: "",
		employmentHistory: "",
		jobReadinessProgram: "",
		socialMediaPresence: "",
		voiceMailHelp: "",
		resumeProud: "",
		onlineApplicationsConfidence: "",
		emailsConfidence: "",
		backgroundDiscussConfidence: "",
		skillsetDiscussConfidence: "",
		interviewsWorkConfidence: "",
		timeManagementConfidence: "",
		justiceInvolvedSkills: "",
		covidVaccination: "",
		employmentSupports: "",
	});

	const [formErrors, setFormErrors] = useState({
		firstName: "",
		lastName: "",
		birthDate: "",
		phoneNumber: "",
		email: "",
		streetAddress: "",
		city: "",
		state: "",
		zipCode: "",
		gender: "",
		// Add more form errors here...
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.postForm(
				"http://localhost:5555/Jobseeker/questionnareform",
				formData,
				{
					headers: {
						"content-type": "application/x-www-form-urlencoded",
					},
				}
			);
			console.log(response.data);
			setSubmit(true);
		} catch (error) {
			console.error("Error submitting questionnaire form:", error);
		}
	};

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});

		// Clear previous error message when user starts typing
		setFormErrors({
			...formErrors,
			[e.target.name]: "",
		});
	};

	const handleCheckboxChange = (e) => {
		const { name, value, checked } = e.target;
		const updatedValues = [...formData[name]];
		if (checked) {
			updatedValues.push(value);
		} else {
			const index = updatedValues.indexOf(value);
			if (index !== -1) {
				updatedValues.splice(index, 1);
			}
		}
		setFormData({
			...formData,
			[name]: updatedValues,
		});
	};

	return (
		<div className={`form-container ${isSubmit ? "blur" : ""}`}>
			<h1>Jobseeker Questionnaire Form</h1>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="firstName">First Name</label>
					<input
						type="text"
						id="firstName"
						name="firstName"
						value={formData.firstName}
						onChange={handleChange}
					/>
					{formErrors.firstName && (
						<p className="error">{formErrors.firstName}</p>
					)}
				</div>
				<div className="form-group">
					<label htmlFor="lastName">Last Name</label>
					<input
						type="text"
						id="lastName"
						name="lastName"
						value={formData.lastName}
						onChange={handleChange}
					/>
					{formErrors.lastName && (
						<p className="error">{formErrors.lastName}</p>
					)}
				</div>
				<div className="form-group">
					<label htmlFor="birthDate">Birth Date</label>
					<input
						type="date"
						id="birthDate"
						name="birthDate"
						value={formData.birthDate}
						onChange={handleChange}
					/>
					{formErrors.birthDate && (
						<p className="error">{formErrors.birthDate}</p>
					)}
				</div>
				<div className="form-group">
					<label htmlFor="phoneNumber">Phone Number</label>
					<input
						type="tel"
						id="phoneNumber"
						name="phoneNumber"
						value={formData.phoneNumber}
						onChange={handleChange}
					/>
					{formErrors.phoneNumber && (
						<p className="error">{formErrors.phoneNumber}</p>
					)}
				</div>
				<div className="form-group">
					<label htmlFor="alternatePhoneNumber">Alternate Phone Number</label>
					<input
						type="tel"
						id="alternatePhoneNumber"
						name="alternatePhoneNumber"
						value={formData.alternatePhoneNumber}
						onChange={handleChange}
					/>
					{formErrors.alternatePhoneNumber && (
						<p className="error">{formErrors.alternatePhoneNumber}</p>
					)}
				</div>
				<div className="form-group">
					<label htmlFor="email">Email</label>
					<input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
					/>
					{formErrors.email && <p className="error">{formErrors.email}</p>}
				</div>
				<div className="form-group">
					<label htmlFor="streetAddress">Street Address</label>
					<input
						type="text"
						id="streetAddress"
						name="streetAddress"
						value={formData.streetAddress}
						onChange={handleChange}
					/>
					{formErrors.streetAddress && (
						<p className="error">{formErrors.streetAddress}</p>
					)}
				</div>
				<div className="form-group">
					<label htmlFor="city">City</label>
					<input
						type="text"
						id="city"
						name="city"
						value={formData.city}
						onChange={handleChange}
					/>
					{formErrors.city && <p className="error">{formErrors.city}</p>}
				</div>
				<div className="form-group">
					<label htmlFor="state">State</label>
					<input
						type="text"
						id="state"
						name="state"
						value={formData.state}
						onChange={handleChange}
					/>
					{formErrors.state && <p className="error">{formErrors.state}</p>}
				</div>
				<div className="form-group">
					<label htmlFor="zipCode">ZIP Code</label>
					<input
						type="text"
						id="zipCode"
						name="zipCode"
						value={formData.zipCode}
						onChange={handleChange}
					/>
					{formErrors.zipCode && <p className="error">{formErrors.zipCode}</p>}
				</div>
				<div className="form-group">
					<label htmlFor="race">Race</label>
					<input
						type="text"
						id="race"
						name="race"
						value={formData.race}
						onChange={handleChange}
					/>
					{formErrors.race && <p className="error">{formErrors.race}</p>}
				</div>
				<div className="form-group">
					<label htmlFor="gender">Gender</label>
					<select
						id="gender"
						name="gender"
						value={formData.gender}
						onChange={handleChange}
					>
						<option value="Male">Male</option>
						<option value="Female">Female</option>
					</select>
					{formErrors.gender && <p className="error">{formErrors.gender}</p>}
				</div>
				<div className="form-group">
					<label htmlFor="veteranStatus">Veteran Status</label>
					<select
						id="veteranStatus"
						name="veteranStatus"
						value={formData.veteranStatus}
						onChange={handleChange}
					>
						<option value="Not a Veteran">Not a Veteran</option>
						<option value="Veteran">Veteran</option>
					</select>
					{formErrors.veteranStatus && (
						<p className="error">{formErrors.veteranStatus}</p>
					)}
				</div>
				<div className="form-group">
					<label htmlFor="highestEducationLevel">Highest Education Level</label>
					<select
						id="highestEducationLevel"
						name="highestEducationLevel"
						value={formData.highestEducationLevel}
						onChange={handleChange}
					>
						<option value="High school diploma or equivalent (GED/HISET)">
							High school diploma or equivalent (GED/HISET)
						</option>
						<option value="Did not complete high school">
							Did not complete high school
						</option>
						<option value="Some college but no degree">
							Some college but no degree
						</option>
						<option value="Associates degree">Associates degree</option>
						<option value="Bachelors degree">Bachelors degree</option>
						<option value="Graduate degree">Graduate degree</option>
						<option value="Others">Others</option>
					</select>
					{formErrors.highestEducationLevel && (
						<p className="error">{formErrors.highestEducationLevel}</p>
					)}
				</div>
				<div className="form-group">
					<label htmlFor="completionStatus">
						If you do not have a high school diploma or GED/HISET, would you
						like to work on completing this?
					</label>
					<select
						id="completionStatus"
						name="completionStatus"
						value={formData.completionStatus}
						onChange={handleChange}
					>
						<option value="Yes">Yes</option>
						<option value="No">No</option>
					</select>
					{formErrors.completionStatus && (
						<p className="error">{formErrors.completionStatus}</p>
					)}
				</div>
				<div className="form-group">
					<label htmlFor="transportation">
						How will you get to interviews and work?
					</label>
					<select
						id="transportation"
						name="transportation"
						value={formData.transportation}
						onChange={handleChange}
					>
						<option value="Personal Car">Personal Car</option>
						<option value="Public Transportation">Public Transportation</option>
						<option value="Dropping">Dropping</option>
					</select>
					{formErrors.transportation && (
						<p className="error">{formErrors.transportation}</p>
					)}
				</div>
				<div className="form-group">
					<label htmlFor="commuteTime">
						What is the maximum commute time you are willing to commit to?
					</label>
					<input
						type="text"
						id="commuteTime"
						name="commuteTime"
						value={formData.commuteTime}
						onChange={handleChange}
					/>
					{formErrors.commuteTime && (
						<p className="error">{formErrors.commuteTime}</p>
					)}
				</div>
				<div className="form-group">
					<label htmlFor="employmentType">
						Are you looking for full or part-time work?
					</label>
					<select
						id="employmentType"
						name="employmentType"
						value={formData.employmentType}
						onChange={handleChange}
					>
						<option value="Full Time">Full Time</option>
						<option value="Part Time">Part Time</option>
					</select>
					{formErrors.employmentType && (
						<p className="error">{formErrors.employmentType}</p>
					)}
				</div>
				<div className="form-group">
					<label htmlFor="idealSchedule">What is your ideal schedule?</label>
					<textarea
						id="idealSchedule"
						name="idealSchedule"
						value={formData.idealSchedule}
						onChange={handleChange}
					></textarea>
					{formErrors.idealSchedule && (
						<p className="error">{formErrors.idealSchedule}</p>
					)}
				</div>
				<div className="form-group">
					<label htmlFor="outsideCommitments">
						What commitments outside of work do you currently have? Are these
						temporary or ongoing commitments?
					</label>
					<textarea
						id="outsideCommitments"
						name="outsideCommitments"
						value={formData.outsideCommitments}
						onChange={handleChange}
					></textarea>
					{formErrors.outsideCommitments && (
						<p className="error">{formErrors.outsideCommitments}</p>
					)}
				</div>
				<div className="form-group">
					<label htmlFor="interestedIndustries">
						What industries are you most interested in?
					</label>
					<textarea
						id="interestedIndustries"
						name="interestedIndustries"
						value={formData.interestedIndustries}
						onChange={handleChange}
					></textarea>
					{formErrors.interestedIndustries && (
						<p className="error">{formErrors.interestedIndustries}</p>
					)}
				</div>
				<div className="form-group">
					<label htmlFor="avoidIndustries">
						What industries would you like to avoid?
					</label>
					<textarea
						id="avoidIndustries"
						name="avoidIndustries"
						value={formData.avoidIndustries}
						onChange={handleChange}
					></textarea>
					{formErrors.avoidIndustries && (
						<p className="error">{formErrors.avoidIndustries}</p>
					)}
				</div>
				<div className="form-group">
					<label htmlFor="valuableSkills">
						What are some skills you have that will be valuable in the
						workplace?
					</label>
					<textarea
						id="valuableSkills"
						name="valuableSkills"
						value={formData.valuableSkills}
						onChange={handleChange}
					></textarea>
					{formErrors.valuableSkills && (
						<p className="error">{formErrors.valuableSkills}</p>
					)}
				</div>
				<div className="form-group">
					<label htmlFor="employmentBarriers">
						What barriers to employment do you have?
					</label>
					<textarea
						id="employmentBarriers"
						name="employmentBarriers"
						value={formData.employmentBarriers}
						onChange={handleChange}
					></textarea>
					{formErrors.employmentBarriers && (
						<p className="error">{formErrors.employmentBarriers}</p>
					)}
				</div>
				<div className="form-group">
					<label htmlFor="workplaceTriggers">
						What triggers may come up in the workplace for you? Do you have a
						plan to overcome these triggers?
					</label>
					<textarea
						id="workplaceTriggers"
						name="workplaceTriggers"
						value={formData.workplaceTriggers}
						onChange={handleChange}
					></textarea>
					{formErrors.workplaceTriggers && (
						<p className="error">{formErrors.workplaceTriggers}</p>
					)}
				</div>
				<div className="form-group">
					<label htmlFor="employmentHistory">
						Have you had trouble maintaining employment in the past? Please
						explain.
					</label>
					<textarea
						id="employmentHistory"
						name="employmentHistory"
						value={formData.employmentHistory}
						onChange={handleChange}
					></textarea>
					{formErrors.employmentHistory && (
						<p className="error">{formErrors.employmentHistory}</p>
					)}
				</div>
				<div className="form-group">
					<label htmlFor="jobReadinessProgram">
						Are you participating in or have you completed a job readiness
						program?
					</label>
					<select
						id="jobReadinessProgram"
						name="jobReadinessProgram"
						value={formData.jobReadinessProgram}
						onChange={handleChange}
					>
						<option value="Yes">Yes</option>
						<option value="No">No</option>
					</select>
					{formErrors.jobReadinessProgram && (
						<p className="error">{formErrors.jobReadinessProgram}</p>
					)}
				</div>
				<div className="form-group">
					<label htmlFor="socialMediaPresence">
						Do you have a social media presence? How do you feel it would look
						to a potential employer?
					</label>
					<textarea
						id="socialMediaPresence"
						name="socialMediaPresence"
						value={formData.socialMediaPresence}
						onChange={handleChange}
					></textarea>
					{formErrors.socialMediaPresence && (
						<p className="error">{formErrors.socialMediaPresence}</p>
					)}
				</div>
				<div className="form-group">
					<label htmlFor="voiceMailHelp">
						Do you need any help setting up and/or checking your voice mail
						(using a message employers will hear)?
					</label>
					<select
						id="voiceMailHelp"
						name="voiceMailHelp"
						value={formData.voiceMailHelp}
						onChange={handleChange}
					>
						<option value="Yes">Yes</option>
						<option value="No">No</option>
					</select>
					{formErrors.voiceMailHelp && (
						<p className="error">{formErrors.voiceMailHelp}</p>
					)}
				</div>
				<div className="form-group">
					<label htmlFor="resumeProud">
						Do you have a resume that you feel proud of and comfortable talking
						about?
					</label>
					<select
						id="resumeProud"
						name="resumeProud"
						value={formData.resumeProud}
						onChange={handleChange}
					>
						<option value="Yes">Yes</option>
						<option value="No">No</option>
					</select>
					{formErrors.resumeProud && (
						<p className="error">{formErrors.resumeProud}</p>
					)}
				</div>
				<div className="form-group">
					<label htmlFor="onlineApplicationsConfidence">
						Do you feel confident in filling out online applications?
					</label>
					<select
						id="onlineApplicationsConfidence"
						name="onlineApplicationsConfidence"
						value={formData.onlineApplicationsConfidence}
						onChange={handleChange}
					>
						<option value="Very Confident">Very Confident</option>
						<option value="Somewhat Confident">Somewhat Confident</option>
						<option value="Not Confident at All">Not Confident at All</option>
					</select>
					{formErrors.onlineApplicationsConfidence && (
						<p className="error">{formErrors.onlineApplicationsConfidence}</p>
					)}
				</div>
				<div className="form-group">
					<label htmlFor="emailsConfidence">
						Do you feel confident in checking, creating, and responding to
						emails?
					</label>
					<select
						id="emailsConfidence"
						name="emailsConfidence"
						value={formData.emailsConfidence}
						onChange={handleChange}
					>
						<option value="Very Confident">Very Confident</option>
						<option value="Somewhat Confident">Somewhat Confident</option>
						<option value="Not Confident at All">Not Confident at All</option>
					</select>
					{formErrors.emailsConfidence && (
						<p className="error">{formErrors.emailsConfidence}</p>
					)}
				</div>
				<div className="form-group">
					<label htmlFor="backgroundDiscussConfidence">
						Do you feel confident in discussing your background during an
						interview?
					</label>
					<select
						id="backgroundDiscussConfidence"
						name="backgroundDiscussConfidence"
						value={formData.backgroundDiscussConfidence}
						onChange={handleChange}
					>
						<option value="Very Confident">Very Confident</option>
						<option value="Somewhat Confident">Somewhat Confident</option>
						<option value="Not Confident at All">Not Confident at All</option>
					</select>
					{formErrors.backgroundDiscussConfidence && (
						<p className="error">{formErrors.backgroundDiscussConfidence}</p>
					)}
				</div>
				<div className="form-group">
					<label htmlFor="skillsetDiscussConfidence">
						Do you feel confident discussing your skillset during an interview?
					</label>
					<select
						id="skillsetDiscussConfidence"
						name="skillsetDiscussConfidence"
						value={formData.skillsetDiscussConfidence}
						onChange={handleChange}
					>
						<option value="Very Confident">Very Confident</option>
						<option value="Somewhat Confident">Somewhat Confident</option>
						<option value="Not Confident at All">Not Confident at All</option>
					</select>
					{formErrors.skillsetDiscussConfidence && (
						<p className="error">{formErrors.skillsetDiscussConfidence}</p>
					)}
				</div>
				<div className="form-group">
					<label htmlFor="interviewsWorkConfidence">
						Do you feel confident in getting to interviews and work?
					</label>
					<select
						id="interviewsWorkConfidence"
						name="interviewsWorkConfidence"
						value={formData.interviewsWorkConfidence}
						onChange={handleChange}
					>
						<option value="Very Confident">Very Confident</option>
						<option value="Somewhat Confident">Somewhat Confident</option>
						<option value="Not Confident at All">Not Confident at All</option>
					</select>
					{formErrors.interviewsWorkConfidence && (
						<p className="error">{formErrors.interviewsWorkConfidence}</p>
					)}
				</div>
				<div className="form-group">
					<label htmlFor="timeManagementConfidence">
						Do you feel confident in your time management skills?
					</label>
					<select
						id="timeManagementConfidence"
						name="timeManagementConfidence"
						value={formData.timeManagementConfidence}
						onChange={handleChange}
					>
						<option value="Very Confident">Very Confident</option>
						<option value="Somewhat Confident">Somewhat Confident</option>
						<option value="Not Confident at All">Not Confident at All</option>
					</select>
					{formErrors.timeManagementConfidence && (
						<p className="error">{formErrors.timeManagementConfidence}</p>
					)}
				</div>
				<div className="form-group">
					<label htmlFor="justiceInvolvedSkills">
						Can you identify skills that you have gained from being justice
						involved that may be beneficial in the workplace?
					</label>
					<select
						id="justiceInvolvedSkills"
						name="justiceInvolvedSkills"
						value={formData.justiceInvolvedSkills}
						onChange={handleChange}
					>
						<option value="Yes">Yes</option>
						<option value="No">No</option>
					</select>
					{formErrors.justiceInvolvedSkills && (
						<p className="error">{formErrors.justiceInvolvedSkills}</p>
					)}
				</div>
				<div className="form-group">
					<label htmlFor="covidVaccination">
						Do you have a COVID Vaccination or would you be willing to get one
						to obtain employment?
					</label>
					<select
						id="covidVaccination"
						name="covidVaccination"
						value={formData.covidVaccination}
						onChange={handleChange}
					>
						<option value="Vaccinated">Vaccinated</option>
						<option value="Willing to Be Vaccinated">
							Willing to Be Vaccinated
						</option>
						<option value="No">No</option>
					</select>
					{formErrors.covidVaccination && (
						<p className="error">{formErrors.covidVaccination}</p>
					)}
				</div>
				<div className="form-group">
					<label htmlFor="employmentSupports">
						What supports would be most helpful to you in obtaining and
						maintaining employment?
					</label>
					<textarea
						id="employmentSupports"
						name="employmentSupports"
						value={formData.employmentSupports}
						onChange={handleChange}
					></textarea>
					{formErrors.employmentSupports && (
						<p className="error">{formErrors.employmentSupports}</p>
					)}
				</div>
				<button type="submit">Submit</button>
			</form>
			{isSubmit && (
				<div className="submitted-animation">Form Submitted Successfully!</div>
			)}
		</div>
	);
};

export default QuestionnaireForm;
