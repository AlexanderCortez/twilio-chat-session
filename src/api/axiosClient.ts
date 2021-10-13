import axios from 'axios';
import { stringify } from 'qs';

const { REACT_APP_API_URL } = process.env;

const api = axios.create({
  baseURL: REACT_APP_API_URL,
  paramsSerializer: (params) => stringify(params, { arrayFormat: 'brackets' }),
});

export default api;
