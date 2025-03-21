import axios from 'axios';
const api = axios.create({
  baseURL: 'http://192.168.1.114:3333', // meu Ip
});
export default api;
