import express from "express";
import { Referral } from "../models/Referral.js";
import { Questionnaire } from "../models/Questionnaire.js";

const referralRouter = express.Router();

referralRouter.get("/", async (req, res) => {
	try {
		const allReferals = await Referral.find({});
		res.status(200).send(allReferals);
	} catch (error) {
		res.status(404).send({ message: error.message });
	}
});

referralRouter.post("/referral", async (req, res) => {
	try {
		const formData = req.body;

		// // Query the database to find the maximum existing ID
		// const maxIdDocument = await Referral.findOne(
		// 	{},
		// 	{ Id: 1 },
		// 	{ sort: { Id: -1 } }
		// );
		// let nextId = 1001; // Default next ID if no documents exist

		// if (maxIdDocument) {
		// 	nextId = maxIdDocument.Id + 1; // Increment the maximum ID by 1
		// }

		// Add the generated ID to the form data
		// formData.Id = nextId;

		// Create a new referral document with the form data
		const referral = new Referral(formData);

		// Save the referral document to the database
		await referral.save();

		console.log("Form data saved to MongoDB:", formData);
		res.status(200).json({ message: "Form data saved successfully" });
	} catch (error) {
		console.error("Error saving form data to MongoDB:", error);
		res.status(500).json({ error: error.message });
	}
});

referralRouter.post("/questionnareform", async (req, res) => {
	try {
		const newQuestionnaire = new Questionnaire(req.body);
		await newQuestionnaire.save();
		console.log(
			"Questionnaire form data saved successfully:",
			newQuestionnaire
		);
		res.status(200).send("Questionnaire form data saved successfully");
	} catch (error) {
		console.error("Error saving questionnaire form data:", error);
		res.status(500).send({ error: error.message });
	}
});

export default referralRouter;
