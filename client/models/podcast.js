const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const podSchema = new Schema({
    title: {
        type: String,
        unique: true,
        required: true
    },
    commentIDs: [
        {
            type: Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
});

const Podcast = mongoose.model("Podcast", podSchema);

module.exports = Podcast