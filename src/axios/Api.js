import axios from "axios";
axios.defaults.baseURL = 'https://nosql-backend.vercel.app/api';
export default axios.create({
    headers: {
        Authorization: "Bearer " + localStorage.getItem("CC_Token")
    }
})