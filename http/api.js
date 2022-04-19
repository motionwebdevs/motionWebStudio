import axios from 'axios';

const api = axios.create({
    baseURL: `https://motion-django.herokuapp.com/`,
});

export default api;
