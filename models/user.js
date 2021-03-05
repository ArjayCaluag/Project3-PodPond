const mongoose = require("mongoose");
const passportLocalMongoose = require('passport-local-mongoose'); 
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        minLength: [3, 'Password must be at least 3 characters long'],
        required: true
    },
    saved: [
        {
            type: Schema.Types.ObjectId,
            ref: "Podcast"
        }
    ]
});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", userSchema);

module.exports = User