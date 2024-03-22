const express = require("express");
const bodyParser = require("body-parser");
const { Pool } = require("pg");
const app = express();
const port = process.env.PORT || 3001;
const cors = require('cors');

// Use CORS middleware
app.use(cors());


const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "server",
    password: "kiteretsu",
    port: 5432,
});

pool.connect((err) => {
    if (err) throw err;
    console.log("Database Connected");
});