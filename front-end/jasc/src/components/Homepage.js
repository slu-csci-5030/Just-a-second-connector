
import React from 'react';
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
      <footer class="footer">
  <div class="footer-content">
    <div class="follow-us">
      <h3>Follow Us</h3>
      <div class="social-links">
        <a href="https://www.facebook.com" target="_blank"><img src="../images/facebook_logo.png" alt="Facebook Logo" className="logo-image" /></a>
        <a href="https://www.twitter.com" target="_blank"><img src="../images/twitter_logo.png" alt="Twitter Logo" className="logo-image" /></a>
        <a href="https://www.instagram.com" target="_blank"><img src="../images/instagram_logo.jpg" alt="Instagram Logo" className="logo-image" /></a>
      </div>
    </div>
    <div class="contact-us">
      <h3>Contact Us</h3>
      <p>Email: example@example.com</p>
      <p>Phone: +123 456 7890</p>
    </div>
    <div class="additional-content">
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
