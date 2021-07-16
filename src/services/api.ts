import axios from 'axios';

const { DISCORD_API_URL } = process.env;

export const api = axios.create({
  baseURL: DISCORD_API_URL,
});
