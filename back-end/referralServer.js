import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

let router = express.Router();
router.use(cors()); // Enable CORS for all routes
router.use(bodyParser.json());


const referralSchema = new mongoose.Schema({
    Id: { type: Number, required: true }, // Add an Id field of type Number
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


// Create a MongoDB collection named "Referral" based on the defined schema
const Referral = mongoose.model('Referral', referralSchema);

//connect to mongoDb
//Connect to MongoDB Atlas
const mongoURI = 'mongodb+srv://sowmyamutya20:K8oT6RIgxfZQctyY@cluster0.lohfogg.mongodb.net/';
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));


router.post('/', async (req, res) => {
    try {
        const formData = req.body;

        // Query the database to find the maximum existing ID
        const maxIdDocument = await Referral.findOne({}, { Id: 1 }, { sort: { Id: -1 } });
        let nextId = 1001; // Default next ID if no documents exist

        if (maxIdDocument) {
            nextId = maxIdDocument.Id + 1; // Increment the maximum ID by 1
        }

        // Add the generated ID to the form data
        formData.Id = nextId;

        // Create a new referral document with the form data
        const referral = new Referral(formData);
        
        // Save the referral document to the database
        await referral.save();
        
        console.log('Form data saved to MongoDB:', formData);
        res.status(200).json({ message: 'Form data saved successfully', Id: nextId });
    } catch (error) {
        console.error('Error saving form data to MongoDB:', error);
        res.status(500).json({ error: 'An error occurred while saving form data' });
    }
});

export default router;


/* router.listen(8080, () => {
    console.log("Server Started")
});
 */