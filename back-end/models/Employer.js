import mongoose from "mongoose";
const Schema = mongoose.Schema;

const employerSchema = new Schema({});

export const Employer = mongoose.model("Employer", employeeSchema);
