import React, { useState, useEffect } from "react";
import "../styles/AdminDashBoard.css"; // Make sure to include your CSS styles

const AdminDashboard = () => {
  const [selectedOption, setSelectedOption] = useState("matchCoaches"); // Default selected option
  const [count, setCount] = useState(0);
  const [JobcoachesNames, setJobcoachesNames] = useState([
    "Daniel Miller",
    "Olivia Martinez",
    "Noah Brown",
    "Isabella Davis",
    "William Wilson",
    "Sophia Moore",
    "James Taylor",
    "Charlotte Anderson",
    "Benjamin Thomas",
    "Amelia Jackson",
    "John Doe",
    "Jane Smith",
    "Michael Johnson",
    "Sarah Brown",
  ]);

  const [JobseekersNames, setJobseekersNames] = useState([
    "Smith",
    "Johnson",
    "Williams",
    "Jones",
    "Brown",
    "Davis",
    "Miller",
    "Wilson",
    "Moore",
    "Taylor",
  ]);

  const [matchedPair, setMatchedPair] = useState([]);

  const setDefaultValues = () => {
    setCount(0);
  };
  useEffect(() => {
    setDefaultValues();
  }, []);
  const handleOptionClick = (option) => {
    console.log("CLicked");
    setSelectedOption(option);
  };

  //handleing functions here
  const handleAddJobCoach = (jobcoachName) => {
    console.log(count);
    if (count === 0) {
      console.log("clicked job coaches button", jobcoachName);
      setMatchedPair((previousData) => [...previousData, jobcoachName]);
      setCount(count + 1);
    } else {
      setCount(1);
      alert("Please select Job seeker, Before Selecting another Job coach");
    }
  };

  const handleAddJobSeekers = (jobseekerName) => {
    if (count === 1) {
      console.log("clicked job coaches button", jobseekerName);
      setMatchedPair((previousData) => [...previousData, jobseekerName]);
      setJobseekersNames(previousData => previousData.filter(name => name !== jobseekerName))
      setCount(0);
    } else {
      alert("Select a Job coach, Before selecting Job Seeker");
    }
  };
  
  const renderMatchEmployersContent = () => {
    const matchedJobSeekers = [
      { id: 1, name: "Emily White", employer: "ABC Corp" },
      { id: 2, name: "Christopher Green", employer: "XYZ Inc" },
      { id: 3, name: "Jessica Turner", employer: "123 Industries" },
      { id: 4, name: "Matthew Harris", employer: "Tech Solutions Ltd." },
      { id: 5, name: "Ashley Clark", employer: "Global Innovations" },
      { id: 6, name: "Joshua Lewis", employer: "NextGen Tech" },
      { id: 7, name: "Amanda Robinson", employer: "Acme Corporation" },
      { id: 8, name: "Andrew Walker", employer: "Innovate Now" },
      { id: 9, name: "Elizabeth Allen", employer: "Tech Titans" },
      { id: 10, name: "Ryan Young", employer: "Digital Dreamers" },
      // Add more matched job seekers here if needed
    ];
    
    return (
      <div className="scroll-section">
        <h3>Current Matches</h3>
        <div className="scrollable">
          <div className="content-long">
            <ul>
              {matchedJobSeekers.map((jobSeeker) => (
                <li key={jobSeeker.id}>
                  {jobSeeker.name} - Matched with {jobSeeker.employer}
                  <button className="accept-button">Accept</button>
                  <button className="reject-button">Reject</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };

  const renderMatchedJobseekersContent = () => {
    // You can implement logic to render matched jobseekers with job coaches here
    return (
      <div className="scroll-section">
        <h3>Matched Jobseekers with Job Coaches</h3>
        {matchedPair.length > 0 && (
  <div className="matched-pair-box">
    {matchedPair.map((name, index) => {
      if (index % 2 === 0) { // Always display job coach
        return (
          <div key={index / 2} className="paired-data">
            <p>
              <strong>Job Coach:</strong> {name}
            </p>
            <p>
              <strong>Job Seeker:</strong> {matchedPair[index + 1] || 'Not selected'}
            </p>
          </div>
        );
      } else {
        return null; // Skip rendering if not paired with job coach
      }
    })}
  </div>
)}
      </div>
    );
  };

  return (
    <div className="admin-dashboard-container">
      {/* Navbar Section */}

      <div className="navbar">
        <div className="navbar-left">
          <div
            className="content"
            onClick={() => handleOptionClick("matchCoaches")}
          >
            Match job seekers with job coaches
          </div>
          <div
            className="content"
            onClick={() => handleOptionClick("matchEmployers")}
          >
            Match job seekers with employers
          </div>
          <div
            className="content"
            onClick={() => handleOptionClick("matchedJobseekers")}
          >
            Matched jobseekers with job coaches
          </div>
          <div
            className="content"
            onClick={() => handleOptionClick("matchedJobseekers")}
          >
            Matched jobseekers with Employers
          </div>
        </div>

        <div className="navbar-right">
          <div className="dashboard-heading">
            <h2 style={{ color: "black" }}>Welcome to the Admin Dashboard!</h2>
          </div>
          <div className="matching-area">
            {selectedOption === "matchCoaches" && (
              <div className="scroll-section">
                <h3 style={{ color: "black" }}>Job Coaches</h3>
                <div className="scrollable">
                  <div className="content-long">
                    {JobcoachesNames.map((data) => {
                      return (
                        <div className="match-data">
                          <pre className="job-coach-name">{data}</pre>
                          <div
                            className="add-btn"
                            onClick={() => handleAddJobCoach(data)}
                          >
                            +
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
            {selectedOption === "matchCoaches" && (
              <div className="scroll-section">
                <h3 style={{ color: "black" }}>Job seekers</h3>
                <div className="scrollable">
                  <div className="content-long">
                    {JobseekersNames.map((data) => {
                      return (
                        <div className="match-data">
                          <pre className="job-coach-name">{data}</pre>
                          <div
                            className="add-btn"
                            onClick={() => handleAddJobSeekers(data)}
                          >
                            +
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="confirm-matches-container">
                  <button className="confirm-matches-button">
                    Confirm Matches
                  </button>
                </div>
              </div>
            )}
            {selectedOption === 'matchEmployers' && renderMatchEmployersContent()}
            {selectedOption === 'matchedJobseekers' && renderMatchedJobseekersContent()}
          </div>
        </div>
      </div>

      {/* Main Dashboard Content */}
    </div>
  );
};

export default AdminDashboard;