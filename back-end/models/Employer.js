import mongoose from "mongoose";
const Schema = mongoose.Schema;

const employerSchema = new Schema({
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

export const Employer = mongoose.model("Employer", employerSchema);
