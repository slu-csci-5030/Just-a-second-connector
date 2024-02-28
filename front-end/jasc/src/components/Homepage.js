// Homepage.js
import React from 'react';
import '../styles/Homepage.css'; // Adjust the import path

function Homepage() {
  return (
    <div className="container">
      <nav className='nav-bar'>
        <div className='brand'>
          <h3 className='logo'>Just a second connector</h3>
        </div>
        <div className='options'>
            <div className='button'><h4 className='home'>Home</h4></div>  
            <div className='button'><h4 className='referral-form'>Referral Form</h4></div>
            <div className='button'><h4 className='questionnaire-form'>Questionnaire Form</h4></div>           
        </div>
      </nav>
    </div>
  );
}

export default Homepage;
