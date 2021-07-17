import axios from 'axios';

const { RAWG_API_URL } = process.env;
const { RAWG_TOKEN } = process.env;

export const rawgApi = axios.create({
  baseURL: RAWG_API_URL,
  params: {
    key: RAWG_TOKEN,
  },
});
