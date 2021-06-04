import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.allorigins.win/get?url=https://jobs.github.com',
  // baseURL: 'https://api.jsonbin.io/b/5f68a8457243cd7e8240a821',
});

api.interceptors.response.use((response) => {
  const data = JSON.parse(response.data.contents);

  // eslint-disable-next-line no-param-reassign
  response.data = data;

  return response;
});

export default api;
