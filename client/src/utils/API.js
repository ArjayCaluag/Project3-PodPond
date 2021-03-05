import axios from "axios";

export default {

    saveUser: function (userData) {
        return axios.post("/api/signup", userData);
    }
}