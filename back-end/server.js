const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const server = express();

server.use(cors());
server.use(bodyParser.json());

// PostgreSQL connection configuration
const pool = new Pool({
    user: 'admin',
    host: 'localhost',
    database: 'jasc',
    password: 'root',
    port: 5432, // Default PostgreSQL port
});

pool.connect()
    .then(() => console.log('PostgreSQL connected'))
    .catch(err => console.error('PostgreSQL connection error:', err));

// Define PostgreSQL Schema and Model
const referralSchema = `
    CREATE TABLE IF NOT EXISTS referrals (
        id SERIAL PRIMARY KEY,
        firstname VARCHAR(255),
        lastname VARCHAR(255),
        phone VARCHAR(255),
        email VARCHAR(255),
        iam VARCHAR(255),
        referrername VARCHAR(255),
        referrerorganization VARCHAR(255),
        referreremail VARCHAR(255),
        rating VARCHAR(255),
        barriers TEXT[],
        convictions TEXT[],
        felonyDate VARCHAR(255),
        knowsReferral VARCHAR(255),
        additionalInfo TEXT,
        selfDescription TEXT,
        selfBarriers TEXT[],
        backgroundCheckIssues TEXT[],
        felonyConvictionDate VARCHAR(255),
        additionalComments TEXT
    )
`;

pool.query(referralSchema)
    .then(() => console.log('Referral table created successfully'))
    .catch(err => console.error('Error creating referral table:', err));

// POST endpoint to save form data to PostgreSQL
server.post('/demo', async (req, res) => {
    try {
        const formData = req.body;
        const query = `
            INSERT INTO referrals 
            (firstname, lastname, phone, email, iam, referrername, referrerorganization, referreremail, rating, barriers, convictions, felonyDate, knowsReferral, additionalInfo, selfDescription, selfBarriers, backgroundCheckIssues, felonyConvictionDate, additionalComments)
            VALUES 
            ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19)
        `;
        const values = [
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
            formData.additionalComments
        ];
        await pool.query(query, values);
        console.log('Form data saved to PostgreSQL:', formData);
        res.status(200).json({ message: 'Form data saved successfully' });
    } catch (error) {
        console.error('Error saving form data to PostgreSQL:', error);
        res.status(500).json({ error: 'An error occurred while saving form data' });
    }
});

server.listen(8080, () => {
    console.log("Server Started");
});