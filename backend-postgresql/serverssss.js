// Import required modules
const express = require('express');
const { Pool } = require('pg');

// Create an instance of Express
const app = express();
const port = 3000; // Choose your desired port

// PostgreSQL connection configuration
const pool = new Pool({
    user: 'your_username',
    host: 'localhost',
    database: 'your_database_name',
    password: 'your_password',
    port: 5432 // Default PostgreSQL port
});

// Middleware to parse JSON requests
app.use(express.json());

// Route to handle employer registration form submission
app.post('/register', async (req, res) => {
    try {
        // Extract form data from request body
        const { name, email, companyName, companyLocation, hiringManagerQuestion, specificPositions, payRate, eligibleBenefits, shifts, hiringType, offensesQuestion, additionalInformation } = req.body;

        // Insert form data into PostgreSQL database
        const insertQuery = `
            INSERT INTO employer_registration_forms (name, email, company_name, company_location, hiring_manager_question, specific_positions, pay_rate, eligible_benefits, shifts, hiring_type, offenses_question, additional_information)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
        `;
        await pool.query(insertQuery, [name, email, companyName, companyLocation, hiringManagerQuestion, specificPositions, payRate, eligibleBenefits, shifts, hiringType, offensesQuestion, additionalInformation]);

        // Respond with success message
        res.status(200).send('Form submitted successfully');
    } catch (error) {
        console.error('Error submitting form:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
