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

// Example of creating a document for the slam book
const slamBookEntry = new SlamBook({
    nameInYourContact: "John",
    relationship: "Friend",
    somethingYouLikeInMe: "Sense of humor",
    somethingYouHateInMe: "Procrastination",
    ifIDieYourReaction: "Shock and sadness",
    whatDidYouFeelWhenYouFirstSawMe: "Friendly",
    beautifulMessageForMe: "You're an amazing friend!",
    nickNameForMe: "J",
    songDedicatedToMe: "Lean On Me",
    canIShare: "Yes",
    yourName: "Alice"
});

// Save the slam book entry to the database
slamBookEntry.save()
    .then(savedEntry => {
        console.log("Slam book entry saved successfully:", savedEntry);
    })
    .catch(error => {
        console.error("Error saving slam book entry:", error);
    });
