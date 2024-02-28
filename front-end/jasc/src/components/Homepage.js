import React, { useState } from 'react';
import '../styles/Homepage.css';
import facebookLogo from '../images/facebook_logo.png';
import twitterLogo from '../images/twitter_logo.png';
import instagramLogo from '../images/instagram_logo.jpg';

function Homepage() {
  const [displayBriefing, setDisplayBriefing] = useState(false);

  const toggleBriefing = () => {
    setDisplayBriefing(!displayBriefing);
  };

  return (
    <div className="container">
      <nav className="nav-bar">
        <div className="brand">
          <h3 className="logo">Just a Second Connector</h3>
        </div>
        <div className="options">
          <div className="button" onClick={toggleBriefing}>
            <h4 className="home">Home</h4>
          </div>
          <div className="button">
            <h4 className="referral-form">Referral Form</h4>
          </div>
          <div className="button">
            <h4 className="questionnaire-form">Questionnaire Form</h4>
          </div>
        </div>
      </nav>

      {displayBriefing && (
        <div><center>
          <p>
            <b>Just a Second Connector</b><br></br>
            -Transformative Workforce Academy<br></br>
            Work Briefing: TWA connects people who are involved with the Criminal Justice system in some way who need to find a job connect with employment opportunities at employers who are willing to give them a second chance. They currently track both sets of participants in their programs, the jobseekers and the employers, through a set of Google Docs. They need a system to help match the restrictions both groups require.
          </p></center>
        </div>
      )}

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