import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'cdce60bca2fa8769cb98ca2cac52f3de';

export const fetchTrendingMovies = async () => {
    const response = await axios.get(`/trending/movie/week?api_key=${API_KEY}`);
    return response.data.results;
};

export const fetchMovies = async (searchQuery) => {
    const response = await axios.get(`/search/movie?api_key=${API_KEY}&query=${searchQuery}`);
    return response.data.results;
};

export const fetchMovieDetails = async (movieId) => {
    const response = await axios.get(`/movie/${movieId}?api_key=${API_KEY}`);
    return response.data;
};


export const fetchMovieCast = async (movieId) => {
    const response = await axios.get(`/movie/${movieId}/credits?api_key=${API_KEY}`);
    return response.data.cast;
};

export const fetchMovieReviews = async (movieId) => {
    const response = await axios.get(`/movie/${movieId}/reviews?api_key=${API_KEY}`);
    return response.data.results;
};



