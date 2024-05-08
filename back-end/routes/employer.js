import express from "express";
import { Employer } from "../models/Employer.js";
import matching_response from "./matching.js";
import { Match } from "../models/Match.js";

const employerRouter = express.Router();

employerRouter.get("/", async (req, res) => {
	try {
		const allEmployers = await Employer.find({});
		res.status(200).send(allEmployers);
	} catch (error) {
		res.status(404).send({ message: error.message });
	}
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

employerRouter.post("/pmatches", async (req, res) => {
	try {
		let matches = await matching_response();
		console.log(matches);
		matches = new Match({ data: matches });
		await matches.save();
		res.status(200).send("Success!");
	} catch (error) {
		res.status(404).send({ error: error.message });
	}
});

employerRouter.get("/gmatches", async (req, res) => {
	try {
		const matches = await Match.find({});
		res.status(200).json(matches);
	} catch (error) {
		res.status(404).send({ error: error.message });
	}
});

export default employerRouter;
