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
// userSchema.methods = {
//   checkPassword: function (inputPassword) {
//   return bcrypt.compareSync(inputPassword, this.password)
// },
//   hashPassword: plainTextPassword => {
//   return bcrypt.hashSync(plainTextPassword, 10)
//   }
// }

const User = mongoose.model("User", userSchema);

module.exports = User