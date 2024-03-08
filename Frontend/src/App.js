// App.js
import React from "react";
import Homepage from "./components/Homepage";
import "./App.css";
import "./components/ReferralForm";
import "./components/QuestionnaireForm"

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
