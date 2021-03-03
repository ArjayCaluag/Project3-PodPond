const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const podSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    password: {
        type: String
    }
});

const Podcast = mongoose.model("Podcast", podSchema);

module.exports = Podcast