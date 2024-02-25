import React, { useState } from 'react';
import './EmployerRegistrationForm.css';

const EmployerRegistrationForm = () => {
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    let formIsValid = true;

    if (!companyName.trim()) {
      formIsValid = false;
      errors["companyName"] = "*Please enter company name.";
    }

    if (!email) {
      formIsValid = false;
      errors["email"] = "*Please enter email.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formIsValid = false;
      errors["email"] = "*Please enter a valid email.";
    }

    if (!password) {
      formIsValid = false;
      errors["password"] = "*Please enter password.";
    } else if (password.length < 8) {
      formIsValid = false;
      errors["password"] = "*Password must be at least 8 characters.";
    }

    setErrors(errors);
    return formIsValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log({ companyName, email, password });
      // Here, you would typically send the form data to a server or API endpoint.
      alert('Form is valid and submitted. Check console for data.');
    }
  };

  return (
    <div className="registration-form-container">
      <div className="registration-form-content">
        <h3 className="registration-form-title">Employer Registration</h3>
        <form onSubmit={handleSubmit} className="registration-form">
          <div className="form-group">
            <label htmlFor="companyName">Company Name</label>
            <input type="text" placeholder="Company Name"
              name="companyName" id="companyName"
              value={companyName}
              onChange={e => setCompanyName(e.target.value)} />
            {errors.companyName && <div className="error">{errors.companyName}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Email"
              name="email" id="email"
              value={email}
              onChange={e => setEmail(e.target.value)} />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Password"
              name="password" id="password"
              value={password}
              onChange={e => setPassword(e.target.value)} />
            {errors.password && <div className="error">{errors.password}</div>}
          </div>
          <div className="form-group">
            <button className="submit-button">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployerRegistrationForm;
