import { PORT, mongoDBURL } from "./config.js";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import employerRouter from "./routes/employer.js";
import referralRouter from "./routes/referral.js";
import upload from "./upload.js";
import bodyParser from "body-parser";
import matching_response from "./routes/matching.js";

const app = express();

// app.use((req, res, next) => {
//  res.status(503).send({ message: "Site Under maintainance!" });
// });

// Middleware to handle file uploads
app.use(upload);

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/Employer", employerRouter);
app.use("/Jobseeker", referralRouter);
// app.use("/Assets/equipments", equipmentRouter);
// app.use("/User", userRouter);

app.use(
	cors({
		"Access-Control-Allow-Origin": "*",
		methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
		preflightContinue: false,
		optionsSuccessStatus: 204,
	})
);

app.get("/", (req, res) => {
	return res.status(200).send("<h1>Hello, JAC Team!</h1>");
});

mongoose
	.connect(mongoDBURL)
	.then(() => {
		console.log("Connected to MongoDB");
		app.listen(PORT, () => {
			console.log(`Example app listening on port ${PORT}`);
			console.log(`Check http://localhost:${PORT}`);
		});
	})
	.then(() => {
		app.get("http://localhost:5555/Employer/pmatches", (res) => {
			console.log(res.json());
		});
	})
	.catch((err) => {
		console.log(err);
	});
