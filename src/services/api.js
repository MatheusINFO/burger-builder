import axios from 'axios';

const api = axios.create({
    baseURL: "https://burguerbuilder-cb5f6.firebaseio.com/"
});

export default api;