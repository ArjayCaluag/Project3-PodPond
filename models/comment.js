const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    // field below will be assigned when the User makes a comment on a podcast, but no direct relationship is defined through the model.
    owner: {
        type: String,
        required: true
    }
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment