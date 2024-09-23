import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SNACKS_API_URL,
  timeout: 5000,
  headers: {
    'api-key': process.env.NEXT_PUBLIC_SNACKS_API_KEY,
  },
});

export default instance;
