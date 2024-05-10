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

  const [matchedPairs, setMatchedPairs] = useState([]);
  const [acceptedMatches, setAcceptedMatches] = useState([]);

  const setDefaultValues = () => {
    setCount(0);
  };
  useEffect(() => {
    setDefaultValues();
  }, []);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  //handling functions here
  const handleAddJobCoach = (jobcoachName) => {
    if (count === 0) {
      setMatchedPairs((previousPairs) => [...previousPairs, [jobcoachName]]);
      setCount(count + 1);
    } else {
      setCount(1);
      alert("Please select a Job seeker before selecting another Job coach");
    }
  };

  const handleAddJobSeekers = (jobseekerName) => {
    if (count === 1) {
      setMatchedPairs((previousPairs) => {
        const updatedPairs = [...previousPairs];
        updatedPairs[updatedPairs.length - 1].push(jobseekerName);
        return updatedPairs;
      });
      setJobseekersNames((previousData) =>
        previousData.filter((name) => name !== jobseekerName)
      );
      setCount(0);
    } else {
      alert("Select a Job coach before selecting a Job Seeker");
    }
  };

  const handleAcceptMatch = (jobSeeker) => {
    setAcceptedMatches((prevMatches) => [...prevMatches, jobSeeker]);
    setJobseekersNames((prevNames) =>
      prevNames.filter((name) => name !== jobSeeker.name)
    );
    setMatchedPairs((prevPairs) => {
      const updatedPairs = [...prevPairs];
      const lastPair = updatedPairs[updatedPairs.length - 1];
      lastPair.push(jobSeeker.name);
      return updatedPairs;
    });
  };

  const handleRejectMatch = (jobSeeker) => {
    setJobseekersNames((prevNames) =>
      prevNames.filter((name) => name !== jobSeeker.name)
    );
    setMatchedPairs((prevPairs) =>
      prevPairs.map((pair) => pair.filter((name) => name !== jobSeeker.name))
    );
  };

  const renderMatchEmployersContent = () => {
    const unmatchedJobSeekers = [
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
    ].filter(
      (jobSeeker) =>
        !acceptedMatches.find((match) => match.name === jobSeeker.name) &&
        !matchedPairs.flat().includes(jobSeeker.name)
    );

    return (
      <div className="scroll-section">
        <h3>Current Matches</h3>
        <div className="scrollable">
          <div className="content-long">
            <ul>
              {unmatchedJobSeekers.map((jobSeeker) => (
                <li key={jobSeeker.id}>
                  {jobSeeker.name} - Matched with {jobSeeker.employer}
                  <button
                    className="accept-button"
                    onClick={() => handleAcceptMatch(jobSeeker)}
                  >
                    Accept
                  </button>
                  <button
                    className="reject-button"
                    onClick={() => handleRejectMatch(jobSeeker)}
                  >
                    Reject
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };

  const renderMatchedJobseekersContent = () => {
    return (
      <div className="scroll-section">
        <h3>Matched Jobseekers with Coaches</h3>
        <div className="scrollable">
          <div className="content-long">
            {matchedPairs.map((pair, index) => (
              <div className="paired-data" key={index}>
                <p>
                  <strong>Job Coach:</strong> {pair[0]}
                </p>
                <p>
                  <strong>Job Seeker:</strong>{" "}
                  {pair[1] ? pair[1] : "Not selected"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderMatchedEmployersContent = () => {
    return (
      <div className="scroll-section">
        <h3>Matched Jobseekers with Employers</h3>
        <div className="scrollable">
          <div className="content-long">
            {acceptedMatches.map((jobSeeker, index) => (
              <div className="paired-data" key={index}>
                <p>
                  <strong>Job Seeker:</strong> {jobSeeker.name}
                </p>
                <p>
                  <strong>Employer:</strong> {jobSeeker.employer}
                </p>
              </div>
            ))}
          </div>
        </div>
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
            onClick={() => handleOptionClick("matchedEmployers")}
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
            {selectedOption === "matchEmployers" &&
              renderMatchEmployersContent()}
            {selectedOption === "matchedJobseekers" &&
              renderMatchedJobseekersContent()}
            {selectedOption === "matchedEmployers" &&
              renderMatchedEmployersContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
