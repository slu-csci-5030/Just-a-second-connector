import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from "./SignUp"; // Assuming the import name matches the file name but corrected
import Login from "./Login";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} /> {/* Updated to render Login by default */}
          <Route path="/signup" element={<SignUp />} /> {/* Corrected path */}
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
