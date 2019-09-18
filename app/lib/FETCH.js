import axios from 'axios';
import { API_URL } from '../../config';

const FETCH = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});

export default FETCH;
