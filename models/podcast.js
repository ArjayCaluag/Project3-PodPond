const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const podSchema = new Schema({
    title: {
        type: String,
        unique: true,
        required: true
    },
    spotifyID: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    link: {
        type: String
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