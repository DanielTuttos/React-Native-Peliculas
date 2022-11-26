import axios from 'axios';

const movieDb = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '1549f7b72847ab2fab119c4964c3dfd4',
    language: 'es-ES',
  },
  headers: {
    Accept: 'application/x-www-form-urlencoded',
    'Content-Type': 'application/json; charset=utf-8',
  },
});

export default movieDb;
