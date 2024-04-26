import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import multer from "multer";
import path from "path";
import fs from "fs";
const app = express();

import employerRouter from './employerServer.js';
import questionnaireRouter from './questionnaireServer.js';
import referralRouter from './referralServer.js';

const port = 8080;

// Middleware to parse JSON and urlencoded bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/employer_forms', employerRouter);
app.use('/questionnareform', questionnaireRouter);
app.use('/demo', referralRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});