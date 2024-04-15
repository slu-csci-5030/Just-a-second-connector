import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ReferralForm from "./ReferralForm";
import EmployerRegistrationForm from "./EmployerRegistrationForm";
import "../styles/Homepage.css";
import facebookLogo from '../images/facebook_logo.png';
import twitterLogo from '../images/twitter_logo.png';
import instagramLogo from '../images/instagram_logo.jpg';
import QuestionnaireForm from "./QuestionnaireForm";
import AdminLogin from "./AdminLogin";
import AdminDashBoard from './AdminDashBoard';

function Homepage() {
  const [displayBriefing, setDisplayBriefing] = useState(true);

  // Footer visibility logic
  useEffect(() => {
    const footer = document.querySelector('.footer');
    const onScroll = () => {
      if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
        footer.classList.add('footer-visible');
      } else {
        footer.classList.remove('footer-visible');
      }
    };

    // Listen for scroll events
    window.addEventListener('scroll', onScroll);

    // Clean up the event listener
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Router>
      <div className="container">
        <nav className="nav-bar">
          <div className="brand">
            <h3 className="logo">Just a Second Connector</h3>
          </div>
          <div className="options">
            <div className="button">
              <Link className="link" to="/">Home</Link>
            </div>
            <div className="button">
              <Link className="link" to="/referral-form">Referral Form</Link>
            </div>
            <div className="button">
              <Link className="link" to="/employer-registration-form">Employer Registration Form</Link>
            </div>
            <div className="button">
              <Link className="link" to="/admin-login">Admin</Link>
            </div>
          </div>
        </nav>

        <Switch>
          <Route exact path="/" render={() => (
            <>
              {displayBriefing && (
                <div className="briefing-container">
                  <center>
                  <p>
                    <h1>Transforming Futures Through Employment Opportunities</h1><br />
                    <h2>Connecting the Justice-Involved Community with Second-Chance Employers</h2><br />
                    <p>At TWA, we believe everyone deserves a second chance. We are dedicated to bridging the gap between individuals with past justice involvement and forward-thinking employers ready to embrace new talent. Join us in breaking barriers and building futures.</p><br />
                    <h2>How It Works For Job Seeker</h2>
                    <div className="instructions">
                    
                    <h4>Step 1: Fill the Referral Form</h4>
                    <p>Begin your path to employment by registering with TWA. Fill out the referral form to tell us about yourself. This is your first step towards a brighter future.</p><br />
                    <h4>Step 2: Match with a Job Coach</h4>
                    <p>Once registered, you will be paired with a job coach who will guide you through training and prepare you for the workforce. Your coach will be a key resource in your employment journey.</p><br />
                    <h4>Step 3: Complete the Questionnaire</h4>
                    <p>Help us understand your skills, preferences, and the type of work you’re looking for by filling out the questionnaire. This information will assist us in finding the right match for you.</p><br />
                    <h4>Step 4: Get Matched with Employers</h4>
                    <p>Based on your profile and questionnaire responses, we will match you with potential employers. Our goal is to find the best fit for both you and the employer to ensure long-term success.</p><br />
                    </div>
                    <p>Start Your Journey - Fill out the referral form today and take your first step toward a promising new career. Let’s redefine your future, together.</p>
                  </p>
                  </center>
                </div>
              )}
            </>
          )} />
          <Route path="/referral-form" component={ReferralForm} />
          <Route path="/employer-registration-form" component={EmployerRegistrationForm} />
          <Route path="/admin-login" component={AdminLogin} /> 
          <Route path="/admin-dashboard" exact component={AdminDashBoard} /> 
          <Route path="/questionnaire-form"  component={QuestionnaireForm} />
        </Switch>

        <footer className="footer">
        
          <div className="footer-content">
            <div className="follow-us">
              <h3>Follow Us</h3>
              <div className="social-links">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <img src={facebookLogo} alt="Facebook Logo" className="logo-image" />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                  <img src={twitterLogo} alt="Twitter Logo" className="logo-image" />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <img src={instagramLogo} alt="Instagram Logo" className="logo-image" />
                </a>
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
    </Router>
  );
}

export default Homepage;
