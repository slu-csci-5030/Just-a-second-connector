const express =require ('express');
const cors=require('cors');
const bodyParser= require('body-parser');
const mongoose =require ('mongoose');
const server=express();


server.use(cors());
server.use(bodyParser.json());

//connect to mongoDb
//Connect to MongoDB Atlas
const mongoURI = 'mongodb+srv://akurapati1:Abhilasya%401@jobseekers.wlpnfob.mongodb.net/?retryWrites=true&w=majority&appName=Jobseekers';
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));


// Define Schema and Model for Referral Form Data
const referralSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    phone: String,
    email: String,
    iam: String,
    referrername: String,
    referrerorganization: String,
    referreremail: String,
    rating: String,
    barriers: [String],
    convictions: [String],
    felonyDate: String,
    knowsReferral: String,
    additionalInfo: String,
    selfDescription: String,
    selfBarriers: [String],
    backgroundCheckIssues: [String],
    felonyConvictionDate: String,
    additionalComments: String
 });
const Referral = mongoose.model('Referral', referralSchema);


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