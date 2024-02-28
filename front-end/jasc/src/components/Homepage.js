// Homepage.js
import React from 'react';
import facebookLogo from '../images/facebook_logo.png';
import twitterLogo from '../images/twitter_logo.png';
import instagramLogo from '../images/instagram_logo.jpg';
import '../styles/Homepage.css';

function Homepage() {
  return (
    <div className="container">
      <nav className='nav-bar'>
        <div className='brand'>
          <h3 className='logo'>Just a Second Connector</h3>
        </div>
        <div className='options'>
            <div className='button'><h4 className='home'>Home</h4></div>  
            <div className='button'><h4 className='referral-form'>Referral Form</h4></div>
            <div className='button'><h4 className='questionnaire-form'>Questionnaire Form</h4></div>           
        </div>
      </nav>
      <footer className="footer">
        <div className="footer-content">
          <div className="follow-us">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="https://www.facebook.com" target="_blank"><img src={facebookLogo} alt="Facebook Logo" className="logo-image" /></a>
              <a href="https://www.twitter.com" target="_blank"><img src={twitterLogo} alt="Twitter Logo" className="logo-image" /></a>
              <a href="https://www.instagram.com" target="_blank"><img src={instagramLogo} alt="Instagram Logo" className="logo-image" /></a>
            </div>
          </div>
          <div className="contact-us">
            <h3>Contact Us</h3>
            <p>Email: example@example.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
          <div className="additional-content">
            <h3>More Info</h3>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Homepage;
