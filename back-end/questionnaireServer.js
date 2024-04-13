const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 8081;

// MongoDB connection URI
const MONGODB_URI = 'mongodb+srv://sowmyamutya20:K8oT6RIgxfZQctyY@cluster0.lohfogg.mongodb.net/';

// Connect to MongoDB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Create mongoose schema and model for Questionnaire form
const questionnaireSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    birthDate: Date,
    phoneNumber: String,
    alternatePhoneNumber: String,
    email: String,
    streetAddress: String,
    city: String,
    state: String,
    zipCode: String,
    race: String,
    gender: String,
    veteranStatus: String,
    highestEducationLevel: String,
    completionStatus: String,
    transportation: String,
    commuteTime: String,
    employmentType: String,
    idealSchedule: String,
    outsideCommitments: String,
    interestedIndustries: [String],
    avoidIndustries: [String],
    valuableSkills: String,
    employmentBarriers: [String],
    workplaceTriggers: String,
    employmentHistory: String,
    jobReadinessProgram: String,
    socialMediaPresence: String,
    voiceMailHelp: String,
    resumeProud: String,
    onlineApplicationsConfidence: String,
    emailsConfidence: String,
    backgroundDiscussConfidence: String,
    skillsetDiscussConfidence: String,
    interviewsWorkConfidence: String,
    timeManagementConfidence: String,
    justiceInvolvedSkills: String,
    covidVaccination: String,
    employmentSupports: String,
});

const Questionnaire = mongoose.model('Questionnaire', questionnaireSchema);

// Handle JSON and form data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Handle POST request for questionnaire form data
app.post('/questionnareform', async (req, res) => {
    try {
        const newQuestionnaire = new Questionnaire(req.body);
        await newQuestionnaire.save();
        console.log('Questionnaire form data saved successfully:', newQuestionnaire);
        res.status(200).send('Questionnaire form data saved successfully');
    } catch (error) {
        console.error('Error saving questionnaire form data:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server1 is running on http://localhost:8081`);
});
