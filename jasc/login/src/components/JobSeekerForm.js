import React, { useState } from "react";
import "./JobSeekerForm.css";

function JobSeekerForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [about, setAbout] = useState("");
  const [resume, setResume] = useState(null);
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!firstName.trim()) {
      errors.firstName = "First name is required";
      isValid = false;
    }

    if (!lastName.trim()) {
      errors.lastName = "Last name is required";
      isValid = false;
    }

    if (!phoneNumber.trim()) {
      errors.phoneNumber = "Phone number is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(phoneNumber)) {
      errors.phoneNumber = "Invalid phone number";
      isValid = false;
    }

    if (!email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Invalid email address";
      isValid = false;
    }

    if (!dob) {
      errors.dob = "Date of birth is required";
      isValid = false;
    }

    if (!about.trim()) {
      errors.about = "Tell us about yourself";
      isValid = false;
    }

    if (!resume) {
      errors.resume = "Resume is required";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      console.log("Form submitted:", {
        firstName,
        lastName,
        phoneNumber,
        email,
        dob,
        about,
        resume,
      });

      // Form submission logic here
      const formData = new FormData();
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("phoneNumber", phoneNumber);
      formData.append("email", email);
      formData.append("dob", dob);
      formData.append("about", about);
      formData.append("resume", resume);

      // Simulating form submission with a POST request
      fetch("https://example.com/submit-form", {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          if (response.ok) {
            console.log("Form submitted successfully!");
            // Optionally, reset form fields after successful submission
            setFirstName("");
            setLastName("");
            setPhoneNumber("");
            setEmail("");
            setDob("");
            setAbout("");
            setResume(null);
          } else {
            console.error("Error submitting form:", response.statusText);
          }
        })
        .catch((error) => {
          console.error("Network error:", error.message);
        });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Job Seeker Information Form</h1>
      <div className="form-group">
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        {formErrors.firstName && (
          <span className="error-message">{formErrors.firstName}</span>
        )}
      </div>
      <div className="form-group">
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        {formErrors.lastName && (
          <span className="error-message">{formErrors.lastName}</span>
        )}
      </div>
      <div className="form-group">
        <input
          type="tel"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        {formErrors.phoneNumber && (
          <span className="error-message">{formErrors.phoneNumber}</span>
        )}
      </div>
      <div className="form-group">
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {formErrors.email && (
          <span className="error-message">{formErrors.email}</span>
        )}
      </div>
      <div className="form-group">
        <input
          type="date"
          placeholder="Date of Birth"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        {formErrors.dob && (
          <span className="error-message">{formErrors.dob}</span>
        )}
      </div>
      <div className="form-group">
        <textarea
          placeholder="Tell us about yourself"
          value={about}
          onChange={(e) => setAbout(e.target.value)}
        ></textarea>
        {formErrors.about && (
          <span className="error-message">{formErrors.about}</span>
        )}
      </div>
      <div className="form-group">
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={(e) => setResume(e.target.files[0])}
        />
        {formErrors.resume && (
          <span className="error-message">{formErrors.resume}</span>
        )}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default JobSeekerForm;
