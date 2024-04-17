// App.js
import React from "react";
import Homepage from "./components/Homepage";
import AdminDashBoard from "./components/AdminDashBoard"; // Import AdminDashboard
import "./App.css";
import "./components/ReferralForm";
import "./components/EmployerRegistrationForm"

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <Homepage />
          <AdminDashBoard />  
        </header>
      </div>
      
    </>
  );
}

export default App;
