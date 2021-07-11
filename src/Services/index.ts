import { Config } from '@/Config';
import handleError from '@/Services/utils/handleError';
import axios from 'axios';

const instance = axios.create({
  baseURL: Config.API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 3000,
});

instance.interceptors.response.use(
  response => response,
  ({ message, response: { data, status } }) => {
    return handleError({ message, data, status });
  },
);

export default instance;
