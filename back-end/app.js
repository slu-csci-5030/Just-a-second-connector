import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import multer from "multer";
import path from "path";
import fs from "fs";
import employerRouter from './employerServer.js';
import questionnaireRouter from './questionnaireServer.js';
import referralRouter from './referralServer.js';

const app = express();
const port = 8080;

// Middleware to parse JSON and urlencoded bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Ensuring a single MongoDB connection
if (mongoose.connection.readyState === 0) {
  mongoose.connect('your_mongodb_uri')
  .then(() => console.log('Connected to MongoDB successfully'))
  .catch(err => console.error('Failed to connect to MongoDB', err));
}

app.use('/employer_forms', employerRouter);
app.use('/questionnareform', questionnaireRouter);
app.use('/demo', referralRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

