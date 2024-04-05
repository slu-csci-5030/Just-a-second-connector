const { Pool } = require('pg');
const pool = new Pool({
    user: 'yourUser',
    host: 'yourHost',
    database: 'yourDatabase',
    password: 'yourPassword',
    port: 'yourPort',
});

module.exports = pool;
const pool = require('./db'); 

const getLatestName = async (req, res) => {
    try {
        const latestName = await pool.query('SELECT yourNameColumn FROM people ORDER BY yourTimestampOrIDColumn DESC LIMIT 1');
        if (latestName.rows.length > 0) {
            res.json({ latestName: latestName.rows[0].yourNameColumn });
        } else {
            res.json({ latestName: 'No names found' });
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
const express = require('express');
const router = express.Router();
const { getLatestName } = require('./yourControllerFile'); 
router.get('/latest-name', getLatestName);

module.exports = router;
fetch('/api/latest-name')
    .then(response => response.json())
    .then(data => {
        document.getElementById('latest-name').textContent = data.latestName;
    })
    .catch(error => console.error('Error:', error));
