import axios from "axios";

export default {

    registerUser: function (userData) {
        return axios.post("/api/signup", userData);
    },

    loginUser: function (userData) {
        return axios.post("/api/login", userData);
    }
}