import axios from "axios";
import * as $ from "jquery";
// Frontend API Calls

export default {

    spotSearch: function (search, type, token) {
        let query = `https://api.spotify.com/v1/search?q=` + search + `&type=` + type + `&limit=10`;
        return ($.ajax({
            url: query,
            type: "GET",
            beforeSend: (xhr) => {
              xhr.setRequestHeader("Authorization", "Bearer " + token);
            },
            success: (response) => {
              console.log(response)
            }
          }))
    },

    registerUser: function (userData) {
        return axios.post("/api/signup", userData);
    },

    loginUser: function (userData) {
        return axios.post("/api/login", userData);
    },
    
    // getPodcasts: function(){
    //     return axios.get("/api/podcasts")
    // },

    savePodcast: function (podcastData){
        return axios.post ("/api/savedpodcasts", podcastData)
    },

    deletePodcast: function (id){
        return axios.delete("/api/podcasts" + id)
    },

    queryPodcast: function (query){
        console.log(query);
        return axios.get("api/podcasts/search", {params: {q:query}});
    },

    comments: function(){
        return axios.post("api/podcasts/comments")
    }
}