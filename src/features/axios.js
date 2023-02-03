import axios from 'axios';


const instance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL || 'https://ph0-api-production.up.railway.app'
});

export default instance;