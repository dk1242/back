const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: String,
    location: String,
    email: String,
    years: Number,
    email: String,
    createdAt: Date,
    updatedAt: Date,
    menu: [String], 
})


module.exports = mongoose.model("User", userSchema)