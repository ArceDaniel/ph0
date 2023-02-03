import axios from 'axios';


const instance = axios.create({
    baseURL:'https://ph0-api-production.up.railway.app'
});

export default instance;