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

// MongoDB connection configuration
const connectionString =
	"mongodb+srv://sowmyamutya20:K8oT6RIgxfZQctyY@cluster0.lohfogg.mongodb.net/";

mongoose
	.connect(connectionString, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("Connected to MongoDB");
	})
	.catch((error) => {
		console.error("Error connecting to MongoDB:", error);
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
	jobDescriptionFile: Buffer, // Change the type to store the link
	offensesQuestion: String,
	videoFile: Buffer, // Change the type to store the link
	additionalInformation: String,
	jobDescriptionFileURL: String,
	videoFileURL: String,
});

const EmployerForm = mongoose.model("EmployerForm", employerFormSchema);

// Middleware to parse JSON and urlencoded bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Multer configuration for handling file uploads
const upload = multer({
	storage: multer.diskStorage({
		destination: (req, file, cb) => {
			// Define the upload destination directory
			const uploadDir = path.join(__dirname, "uploads");
			// Create the directory if it doesn't exist
			if (!fs.existsSync(uploadDir)) {
				fs.mkdirSync(uploadDir);
			}
			cb(null, uploadDir);
		},
		filename: (req, file, cb) => {
			// Generate a unique filename to prevent overwriting
			const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
			const ext = path.extname(file.originalname);
			cb(null, uniqueSuffix + ext);
		},
	}),
	fileFilter: (req, file, cb) => {
		// Check file types allowed for upload
		if (file.mimetype === "application/pdf" || file.mimetype === "video/mp4") {
			cb(null, true); // Accept the file
		} else {
			cb(new Error("Invalid file format")); // Reject the file
		}
	},
}).fields([
	{ name: "jobDescriptionFile", maxCount: 1 },
	{ name: "videoFile", maxCount: 1 },
]);

// Middleware to handle file uploads
app.use(upload);

// Define route for submitting employer forms
app.post("/employer_forms", async (req, res) => {
	try {
		const formData = req.body;

		// Store file paths for job description file and video file
		//const jobDescriptionFileLink = req.files['jobDescriptionFile'] ? `http://localhost:8082/uploads/${req.files['jobDescriptionFile'][0].filename}` : null;
		//const videoFileLink = req.files['videoFile'] ? `http://localhost:8082/uploads/${req.files['videoFile'][0].filename}` : null;

		const jobDescriptionFileURL = req.files["jobDescriptionFile"]
			? `/uploads/${req.files["jobDescriptionFile"][0].filename}`
			: null;
		const videoFileURL = req.files["videoFile"]
			? `/uploads/${req.files["videoFile"][0].filename}`
			: null;

		// Create a new EmployerForm document with file links and save it to the database
		const employerForm = new EmployerForm({
			...formData,
			//jobDescriptionFile: jobDescriptionFileLink,
			//videoFile: videoFileLink
			jobDescriptionFileURL,
			videoFileURL,
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
