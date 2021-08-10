import axios from 'axios';

// axios.defaults.baseURL = 'https://api.themoviedb.org/';

export const fetchMovies = async (searchQuery) => {
    const API_KEY = 'cdce60bca2fa8769cb98ca2cac52f3de';
    // const params = `3/searh/movie?api_key=${API_KEY}&query=${searchQuery}`;
    // const response = await axios.get(`${params}`);
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}`);
    return response.data.results;
};