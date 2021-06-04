/* eslint-disable no-param-reassign */
import axios from 'axios';
import { QueryValue, stringifyQuery } from 'ufo';

const api = axios.create({
  baseURL: 'https://api.allorigins.win/get?url=https://jobs.github.com',
  // baseURL: 'https://api.jsonbin.io/b/5f68a8457243cd7e8240a821',
});

api.interceptors.request.use((config) => {
  const queryWithTruthyValues = Object.fromEntries(
    Object.entries(config.params).filter(([_, value]) => Boolean(value)),
  ) as Record<string, QueryValue>;
  const stringifiedQuery = stringifyQuery(queryWithTruthyValues);

  config.params = {};
  config.url = `${config.url}?=${stringifiedQuery}`;

  return config;
});

api.interceptors.response.use((response) => {
  const data = JSON.parse(response.data.contents);

  response.data = data;

  return response;
});

export default api;
