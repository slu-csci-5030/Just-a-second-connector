// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from "./components/Homepage";
import "./App.css";
import "./components/ReferralForm";
import ReferralForm from "./components/ReferralForm";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <Homepage />
        </header>
      </div>
      
    </>
  );
}

export default App;
