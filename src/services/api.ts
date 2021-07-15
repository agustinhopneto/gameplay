import axios from 'axios';

const { DISCORD_API_URL } = process.env;

console.log(DISCORD_API_URL);

export const api = axios.create({
  baseURL: DISCORD_API_URL,
});
