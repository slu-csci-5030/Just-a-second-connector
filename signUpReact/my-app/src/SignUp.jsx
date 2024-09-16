import React, { useState } from 'react';
import './css/Sign_upstyle.css'; // Make sure the path is correct
import image1 from './images/signup-image.jpg';
import { Link } from 'react-router-dom'; // Make sure the path is correct
import login from './Login.jsx'; // Make sure the path is correct




const SignUp = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
    agreeTerms: false,
  });

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle the form submission, e.g., sending data to an API
    console.log(formData);
  };

  return (
    <div className="main">
      <section className="signup">
        <div className="container">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-title">Sign up</h2>
              <h3 className="form-title">Your First Step Towards Success</h3>
              <form className="register-form" id="register-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                  <input type="text" name="name" id="name" placeholder="Your Name" onChange={handleInputChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="email"><i className="zmdi zmdi-email"></i></label>
                  <input type="email" name="email" id="email" placeholder="Your Email" onChange={handleInputChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="pass"><i className="zmdi zmdi-lock"></i></label>
                  <input type="password" name="password" id="pass" placeholder="Password" onChange={handleInputChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="re-pass"><i className="zmdi zmdi-lock-outline"></i></label>
                  <input type="password" name="repeatPassword" id="re_pass" placeholder="Repeat your password" onChange={handleInputChange} />
                </div>
                <div className="form-group">
                  <input type="checkbox" name="agreeTerms" id="agree-term" className="agree-term" onChange={handleInputChange} />
                  <label htmlFor="agree-term" className="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" className="term-service">Terms of service</a></label>
                </div>
                <div className="form-group form-button">
                  <input type="submit" name="signup" id="signup" className="form-submit" value="Register" />
                </div>
              </form>
            </div>
                <div className="signup-image">
                    <figure><img src={image1} alt="sign up" /></figure> {/* Make sure the path to the image is correct */}
      
                    <p>New to our platform? <Link to="./Login.jsx">I am already a member</Link></p>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
