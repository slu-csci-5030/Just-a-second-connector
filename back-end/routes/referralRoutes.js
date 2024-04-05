const express = require('express');
const router = express.Router();
const { saveReferral, getReferrals } = require('../controllers/referralController');

router.post('/demo', saveReferral);
module.exports = router;