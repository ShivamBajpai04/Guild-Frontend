import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // Replace with your backend URL
});

export const fetchGuilds = () => api.get('/guilds');
export const fetchGuild = (id) => api.get(`/guilds/?id=${id}`);
export const fetchQuests = () => api.get('/quests');
export const fetchQuest = (id) => api.get(`/quests/${id}`);
