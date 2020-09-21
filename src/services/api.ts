import axios from 'axios';

const api = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://jobs.github.com',
  // baseURL: 'https://api.jsonbin.io/b/5f68a8457243cd7e8240a821',
});

export default api;
