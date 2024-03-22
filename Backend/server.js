const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const morgan = require('morgan');
const path = require('path');

// Set up 
const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
const MONGODB_URI = 'mongodb://localhost:27017/jasc';
mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Define the employer 
const employerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  companyName: { type: String, required: true },
  companyLocation: { type: String, required: true },
  hiringManagerQuestion: { type: String, required: true },
  specificPositions: { type: String, required: true },
  payRate: { type: String, required: true },
  eligibleBenefits: { type: String, required: true },
  shifts: [{ type: String }],
  hiringType: { type: String, required: true },
  jobDescriptionFile: { type: Buffer },
  offensesQuestion: { type: String, required: true },
  videoFile: { type: Buffer },
  additionalInformation: { type: String, required: true }
});

const Employer = mongoose.model('Employer', employerSchema);
