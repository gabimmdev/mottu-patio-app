import axios from 'axios';

const api = axios.create({
  baseURL: '', // colocar IP do back-end Java
});

export default api;
