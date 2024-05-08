import mongoose from "mongoose";
const Schema = mongoose.Schema;
const referralSchema = new Schema({
    firstname: String,
    lastname: String,
    phone: String,
    email: {
        type: String,
        unique: true,
    },
    iam: String,
    referrername: String,
    referrerorganization: String,
    referreremail: String,
    rating: String,
    barriers: [String],
    convictions: [String],
    recentFelonyDate: String,
    knowsReferral: String,
    additionalInfo: String,
    selfDescription: String,
    selfBarriers: [String],
    backgroundCheckIssues: [String],
    felonyConvictionDate: String,
    additionalComments: String,
});
 
export const Referral = mongoose.model("Referral", referralSchema);
 