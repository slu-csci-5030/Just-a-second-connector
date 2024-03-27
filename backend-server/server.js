const express = require("express");
const bodyParser = require("body-parser");
const { Pool } = require("pg");
const app = express();
const port = process.env.PORT || 3001;
const cors = require("cors");

// Use CORS middleware
app.use(cors());

// PostgreSQL connection configuration
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "server",
  password: "Sowmya@1234",
  port: 5432,y
});

pool.connect((err) => {
  if (err) throw err;
  console.log(`Connected to the database`);
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



// Define your routes here
app.post("/referral_forms", async (req, res) => {
  try {
    const formData = req.body;

    // Insert form data into the database
    const query = `
            INSERT INTO referral_forms (firstname, lastname, phone, email, iam, referrername, referrerorganization, referreremail, rating, barriers, convictions, felonyDate, knowsReferral, additionalInfo, selfDescription, selfBarriers, backgroundCheckIssues, felonyConvictionDate, additionalComments)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19)
        `;
    await pool.query(query, [
      formData.firstname,
      formData.lastname,
      formData.phone,
      formData.email,
      formData.iam,
      formData.referrername,
      formData.referrerorganization,
      formData.referreremail,
      formData.rating,
      formData.barriers,
      formData.convictions,
      formData.felonyDate,
      formData.knowsReferral,
      formData.additionalInfo,
      formData.selfDescription,
      formData.selfBarriers,
      formData.backgroundCheckIssues,
      formData.felonyConvictionDate,
      formData.additionalComments,
    ]);

    res
      .status(200)
      .json({ status: "success", message: "Form data saved successfully." });
  } catch (error) {
    console.error("Error while saving form data:", error);
    res.status(500).json({ status: "error", message: "Internal Server Error" });
  }
});

// Handle POST request for employer forms
app.post("/employer_forms", async (req, res) => {
  try {
    const formData = req.body;

    // Convert shifts array into a string in the format '{value1, value2, ...}'
    const shiftsArrayString = `{${formData.shifts.join(",")}}`;

    // Use the converted string in the query
    const query = `
    INSERT INTO employer_forms (
        name,
        email,
        companyName,
        companyLocation,
        hiringManagerQuestion,
        specificPositions,
        payRate,
        eligibleBenefits,
        shifts,
        hiringType,
        jobDescriptionFile,
        offensesQuestion,
        videoFile,
        additionalInformation
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
`;

    await pool.query(query, [
      formData.name,
      formData.email,
      formData.companyName,
      formData.companyLocation,
      formData.hiringManagerQuestion,
      formData.specificPositions,
      formData.payRate,
      formData.eligibleBenefits,
      shiftsArrayString, // Use the converted string here
      formData.hiringType,
      formData.jobDescriptionFile,
      formData.offensesQuestion,
      formData.videoFile,
      formData.additionalInformation,
    ]);

    res.status(201).send("Employer form submitted successfully!");
  } catch (error) {
    console.error("Error submitting employer form:", error);
    res.status(500).send("Internal server error");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
