import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { PORT, mongoDBURL } from "./config.js";
import employerRouter from './routes/getEmployers.js';

const app = express();
app.use(express.json());

app.use(cors({
  origin: "http://localhost:5555",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"],
}));

app.use('/', employerRouter);

app.get("/", (req, res) => {
  return res.status(200).send("<h1>Hello, JAC Team!</h1>");
});

mongoose.connect(mongoDBURL).then(() => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
    console.log(`Check http://localhost:${PORT}`);
  });
}).catch((err) => {
  console.error(err);
});
