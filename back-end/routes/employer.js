import express from "express";
import { Employer } from "../models/Employer.js";
 
const employerRouter = express.Router();
 
employerRouter.get("/", (req, res) => {
	res.status(200).send({ message: "Hello, World!" });
});
 
// employerRouter.post("/registration", async (req, res) => {});
 
// Define route for submitting employer forms
employerRouter.post("/registration", async (req, res) => {
	try {
		const formData = req.body;
 
		// Store file paths for job description file and video file
		//const jobDescriptionFileLink = req.files['jobDescriptionFile'] ? `http://localhost:8082/uploads/${req.files['jobDescriptionFile'][0].filename}` : null;
		//const videoFileLink = req.files['videoFile'] ? `http://localhost:8082/uploads/${req.files['videoFile'][0].filename}` : null;
 
		// const jobDescriptionFileURL = req.files["jobDescriptionFile"]
		// 	? `/uploads/${req.files["jobDescriptionFile"][0].filename}`
		// 	: null;
		// const videoFileURL = req.files["videoFile"]
		// 	? `/uploads/${req.files["videoFile"][0].filename}`
		// 	: null;
 
		// Create a new EmployerForm document with file links and save it to the database
		const employerForm = new Employer({
			...formData,
			//jobDescriptionFile: jobDescriptionFileLink,
			//videoFile: videoFileLink
			// jobDescriptionFileURL,
			// videoFileURL,
		});
		await employerForm.save();
 
		res.status(201).send("Employer form submitted successfully!");
	} catch (error) {
		console.error("Error submitting employer form:", error);
		res.status(500).send("Internal server error");
	}
});
 
export default employerRouter;
