import mongoose from "mongoose";
 
const Schema = mongoose.Schema;
 
const questionnaireSchema = new Schema({
    firstName: String,
    lastName: String,
    birthDate: Date,
    phoneNumber: String,
    alternatePhoneNumber: String,
    email: {
        type: String,
        unique: true,
    },
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
 
export const Questionnaire = mongoose.model(
    "Questionnaire",
    questionnaireSchema
);