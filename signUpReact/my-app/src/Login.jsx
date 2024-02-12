import React, { useState } from 'react';
import './css/Sign_upstyle.css'; // Ensure the path to your CSS file is correct
import image2 from './images/V1.webp'; // Ensure the path to your image file is correct

const Login = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Here you might want to replace this with actual login logic
  };

  return (
    <div className="main">
      <section className="signup">
        <div className="container">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-title">Login In</h2>
              <h3 className="form-title">Get your self a better life, get the second chance here, Just A Second Chance.</h3>
              <form className="register-form" id="register-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email"><i className="zmdi zmdi-email"></i></label>
                  <input type="email" name="email" id="email" placeholder="Your Email" onChange={handleInputChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="pass"><i className="zmdi zmdi-lock"></i></label>
                  <input type="password" name="password" id="pass" placeholder="Password" onChange={handleInputChange} />
                </div>
                <div className="form-group form-button">
                  <input type="submit" name="signup" id="signup" className="form-submit" value="Login" />
                </div>
              </form>
            </div>
            <div className="signup-image">
              {/* Ensure the path to the images is correct */}
              <figure><img src={image2} alt="login visual" /></figure>
              <a href="/signup" className="signup-image-link">New Here?</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
