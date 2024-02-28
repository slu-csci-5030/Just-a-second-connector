import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import ReferralForm from './components/ReferralForm';
import './styles/Homepage.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/referral-form" element={<ReferralForm />} />
      </Routes>
    </Router>
  );
}

export default App;
