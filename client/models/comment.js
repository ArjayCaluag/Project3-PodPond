const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    password: {
        type: String
    }
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment