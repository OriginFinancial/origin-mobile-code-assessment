import axios from 'axios';

const baseURL =
  'https://tque3jpn1e.execute-api.us-east-1.amazonaws.com/mobile-tha' as const;

export const apiBase = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});
