import express from "express";
import { Employer } from "../models/Employer.js";

const employerRouter = express.Router();

employerRouter.get("/", (req, res) => {
	res.status(200).send({ message: "Hello, World!" });
});

employerRouter.post("/registration", async (req, res) => {
	try {
		const formData = req.body;

		// Create a new EmployerForm document with file links and save it to the database
		const employerForm = new Employer({
			...formData,
		});
		await employerForm.save();

		res.status(201).send("Employer form submitted successfully!");
	} catch (error) {
		console.error("Error submitting employer form:", error);
		res.status(500).send("Internal server error");
	}
});

export default employerRouter;
