const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const app = express();

const port = 8082;
const cors = require("cors");

// Use CORS middleware
app.use(cors());

// Use bodyParser to parse JSON and urlencoded bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// MongoDB connection configuration
const connectionString = "mongodb+srv://sowmyamutya20:K8oT6RIgxfZQctyY@cluster0.lohfogg.mongodb.net/";
mongoose.connect(connectionString)
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});


// Define MongoDB schema and model
const Schema = mongoose.Schema;
const employerFormSchema = new Schema({
  name: String,
  email: String,
  companyName: String,
  companyLocation: String,
  hiringManagerQuestion: String,
  specificPositions: String,
  payRate: String,
  eligibleBenefits: String,
  shifts: [String],
  hiringType: String,
  jobDescriptionFile: String,
  offensesQuestion: String,
  videoFile: String,
  additionalInformation: String,
  jobDescriptionFileURL: String,
  videoFileURL: String,
});

const EmployerForm = mongoose.model('EmployerForm', employerFormSchema);

// Configure Multer for file storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = path.join(__dirname, 'uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir); // Create the directory if it doesn't exist
    }
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, `${file.fieldname}-${uniqueSuffix}${path.extname(file.originalname)}`); // Generate a unique filename
  }
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    // Check file types allowed for upload
    if (file.mimetype === 'application/pdf' || file.mimetype === 'video/mp4') {
      cb(null, true); // Accept the file
    } else {
      cb(new Error('Invalid file format'), false); // Reject the file
    }
  }
});

// Define route for submitting employer forms
app.post("/employer_forms", upload.fields([
  { name: 'jobDescriptionFile', maxCount: 1 },
  { name: 'videoFile', maxCount: 1 }
]), async (req, res) => {
  try {
    const formData = req.body;

    // Retrieve the file paths for job description file and video file
    const jobDescriptionFileURL = req.files['jobDescriptionFile'] ? `/uploads/${req.files['jobDescriptionFile'][0].filename}` : null;
    const videoFileURL = req.files['videoFile'] ? `/uploads/${req.files['videoFile'][0].filename}` : null;

    // Create a new EmployerForm document with file links and save it to the database
    const employerForm = new EmployerForm({
      ...formData,
      jobDescriptionFileURL,  // Store the URL for the job description file
      videoFileURL,           // Store the URL for the video file
    });
    await employerForm.save();

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
