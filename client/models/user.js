const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    password: {
        type: String
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User

// https://stackoverflow.com/questions/14588032/mongoose-password-hashing using bcrypt

// const userSchema = new Schema({
//     title: { 
//         type: String,
//         unique: true
//     },
//     authors: {type: Array},
//     description: { type: String },
//     image: { type: String },
//     link: { type: String }
// })