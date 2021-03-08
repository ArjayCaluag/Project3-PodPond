import axios from "axios";
// Frontend API Calls

export default {

    registerUser: function (userData) {
        return axios.post("/api/signup", userData);
    },

    loginUser: function (userData) {
        return axios.post("/api/login", userData);
    },
    
    getPodcasts: function(){
        return axios.get("/api/podcasts")
    },

    savePodcast: function (podcastData){
        return axios.post ("/api/savedpodcasts", podcastData)
    },

    deletePodcast: function (id){
        return axios.delete("/api/podcasts" + id)
    },

    queryPodcast: function (query){
        console.log(query);
        return axios.get("api/podcasts/search", {params: {q:query}});
    }
}