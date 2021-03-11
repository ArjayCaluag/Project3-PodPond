import axios from "axios";
// Frontend API Calls

export default {

    registerUser: function (userData) {
        return axios.post("/api/signup", userData);
    },

    loginUser: function (userData) {
        return axios.post("/api/login", userData);
    },

    getPodcasts: function () {
        return axios.get("/api/savedpodcasts");
    },

    savePodcast: function (podcastData) {
        return axios.post("/api/savedpodcasts", podcastData)
    },

    deletePodcast: function (id) {
        return axios.delete("/api/podcasts/" + id);
    },

    getComments: function (spotifyID) {
        return axios.get("/api/podcasts/comments/" + spotifyID);
    },

    saveComment: function (commentData) {
        return axios.post("/api/podcasts/comments", commentData)
    }
}