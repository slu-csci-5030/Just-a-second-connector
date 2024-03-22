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

// Set up multer for file uploads
const upload = multer();

// Middleware to parse request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev')); 

// Log incoming requests and responses
// Route for handling employer registration form submissions
app.post('/register', upload.fields([{ name: 'jobDescriptionFile' }, { name: 'videoFile' }]), (req, res) => {
  console.log('Received form data:', req.body);
  console.log('Received files:', req.files);

  const {
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
    offensesQuestion,
    additionalInformation
  } = req.body;

  const jobDescriptionFile = req.files['jobDescriptionFile'] ? req.files['jobDescriptionFile'][0].buffer : null;
  const videoFile = req.files['videoFile'] ? req.files['videoFile'][0].buffer : null;

  const newEmployer = new Employer({
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
  });
// Send the saved employer data in the response
  newEmployer.save()
    .then(savedEmployer => {
      console.log('Employer registration successful:', savedEmployer);
      res.json(savedEmployer); 
    })
    .catch(err => {
      console.error('Error saving employer:', err);
      res.status(400).json('Error: ' + err);
    });
});
