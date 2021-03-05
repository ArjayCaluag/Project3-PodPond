const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    text: {
        type: String,
        required: true
    }
    // field below will likely be necessary for each comment to be associated with the user who posted them. The resulting circle of ownership (Users have saved podacsts, podcasts have comments, comments have users as owners) may not work. To be determined.
    // ,
    // owner: {
    //     type: Schema.Types.ObjectId,
    //     ref: "User"
    // }
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment