const mongoose = require('mongoose');

// Define the schema for the slam book entry
const slambookSchema = new mongoose.Schema({
    nameInYourContact: String,
    relationship: String,
    somethingYouLikeInMe: String,
    somethingYouHateInMe: String,
    ifIDieYourReaction: String,
    whatDidYouFeelWhenYouFirstSawMe: String,
    beautifulMessageForMe: String,
    nickNameForMe: String,
    songDedicatedToMe: String,
    canIShare: String,
    yourName: String
});

// Create a Mongoose model based on the schema
const SlamBook = mongoose.model('SlamBook', slambookSchema);
