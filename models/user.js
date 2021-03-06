const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
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

// Define schema methods
userSchema.methods = {
    checkPassword: inputPassword => {
        return bcrypt.compareSync(inputPassword, this.password)
    },
    hashPassword: plainTextPassword => {
        return bcrypt.hashSync(plainTextPassword, 10)
    }
}

// Define pre-hooks for the save method
userSchema.pre('save', function (next) {
    if (!this.password) {
        console.log('models/user.js =======NO PASSWORD PROVIDED=======')
        next()
    } else {
        console.log('models/user.js hashPassword in pre save');
        this.password = this.hashPassword(this.password)
        next()
    }
})

const User = mongoose.model("User", userSchema);

module.exports = User