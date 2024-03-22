const express =require ('express');
const cors=require('cors');
const server=express();


server.use(cors());
server.post('/demo', async (req, res) => {
    try {
        const formData = req.body;
        const referral = new Referral(formData);
        await referral.save();
        console.log('Form data saved to MongoDB:', formData);
        res.status(200).json({ message: 'Form data saved successfully' });
    } catch (error) {
        console.error('Error saving form data to MongoDB:', error);
        res.status(500).json({ error: 'An error occurred while saving form data' });
    }
});


server .listen(8080,()=> {
    console.log("Server Started")
} )