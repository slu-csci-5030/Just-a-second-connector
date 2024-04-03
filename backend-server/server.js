const express = require('express');
const multer = require('multer');
const { Sequelize, DataTypes } = require('sequelize');

const app = express();
const PORT = process.env.PORT || 3001;

// Initialize Sequelize
const sequelize = new Sequelize('your_database_name', 'your_username', 'your_password', {
  host: 'localhost',
  dialect: 'postgres',
});

// Define your model
const EmployerForm = sequelize.define('EmployerForm', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  companyName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  companyLocation: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  hiringManagerQuestion: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  specificPositions: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  payRate: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  eligibleBenefits: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  shifts: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
  },
  hiringType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  jobDescriptionFile: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  offensesQuestion: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  videoFile: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  additionalInformation: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

// Sync the model with the database
sequelize.sync();

// Configure multer to handle file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Directory where files will be uploaded
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // File name in the uploads directory
  }
});

const upload = multer({ storage: storage });

// Middleware to parse JSON bodies
app.use(express.json());

// Route to handle form submission with file uploads
app.post('/employer_forms', upload.fields([
  { name: 'jobDescriptionFile', maxCount: 1 },
  { name: 'videoFile', maxCount: 1 }
]), async (req, res) => {
  try {
    // Create a new form entry in the database
    const form = await EmployerForm.create({
      name: req.body.name,
      email: req.body.email,
      companyName: req.body.companyName,
      companyLocation: req.body.companyLocation,
      hiringManagerQuestion: req.body.hiringManagerQuestion,
      specificPositions: req.body.specificPositions,
      payRate: req.body.payRate,
      eligibleBenefits: req.body.eligibleBenefits,
      shifts: req.body.shifts,
      hiringType: req.body.hiringType,
      jobDescriptionFile: req.files['jobDescriptionFile'] ? req.files['jobDescriptionFile'][0].path : null,
      offensesQuestion: req.body.offensesQuestion,
      videoFile: req.files['videoFile'] ? req.files['videoFile'][0].path : null,
      additionalInformation: req.body.additionalInformation,
    });
    res.status(201).json(form);
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
