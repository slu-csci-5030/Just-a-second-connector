const express = require('express');
const cors = require('cors');
require('dotenv').config(); 
const referralRoutes = require('./routes/referralRoutes'); 

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.use('/api', referralRoutes);

app.use((error, req, res, next) => {
    console.error(error.stack);
    res.status(500).send({ error: 'An error occurred!' });
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
