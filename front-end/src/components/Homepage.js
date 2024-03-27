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
              <Link to="/">Home</Link>
            </div>
            <div className="button">
              <Link to="/referral-form">Referral Form</Link>
            </div>
            <div className="button">
              <Link to="/employer-registration-form">Employer Registration Form</Link>
            </div>
            <div className="button">
              <Link to="/admin-login">Admin</Link>
            </div>
          </div>
        </nav>

        <Switch>
          <Route exact path="/" render={() => (
            <>
              {displayBriefing && (
                <div className="briefing-container">
                  <p>
                    <b>Just a Second Connector</b><br />
                    -Transformative Workforce Academy<br />
                    Work Briefing: TWA connects people who are involved with the Criminal Justice system in some way who need to find a job connect with employment opportunities at employers who are willing to give them a second chance. They currently track both sets of participants in their programs, the jobseekers and the employers, through a set of Google Docs. They need a system to help match the restrictions both groups require.
                  </p>
                </div>
              )}
            </>
          )} />
          <Route path="/referral-form" component={ReferralForm} />
          <Route path="/employer-registration-form" component={EmployerRegistrationForm} />
          <Route path="/admin-login" component={AdminLogin} /> 
          <Route path="/admin-dashboard" exact component={AdminDashBoard} /> 
          <Route path="/more-info" render={() => (
            <div className="more-info-container">
              <p>
                Hello there! Welcome to Just a Second Connector, a transformative project initiated by Transformative Workforce Academy (TWA). This platform addresses the unique needs of individuals associated with the Criminal Justice system seeking employment opportunities, connecting them with employers willing to provide a second chance. TWA currently relies on Google Docs to track both job seekers and employers, necessitating a more efficient system for matching the specific requirements of both groups. Just a Second Connector streamlines this process by providing a centralized platform for job seeker connections and employer matching. Our goal is to replace the existing Google Docs system, offering a comprehensive solution that facilitates the seamless tracking of progress for both job seekers and employers. Join us in this endeavor to make a positive impact and provide meaningful opportunities for those seeking a fresh start in the workforce.
              </p>
            </div>
          )} />
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
              <h3><Link className="additional" to="/more-info">More Info</Link></h3>
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
