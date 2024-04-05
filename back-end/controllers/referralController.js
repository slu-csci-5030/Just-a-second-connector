const Referral = require('../models/referral'); 
exports.saveReferral = async (req, res, next) => {
    try {
        const formData = req.body;
        const referral = new Referral(formData);
        await referral.save();
        console.log('Form data saved to MongoDB:', formData);
        res.status(200).json({ message: 'Form data saved successfully' });
    } catch (error) {
        console.error('Error saving form data to MongoDB:', error);
        next(error);
    }
};