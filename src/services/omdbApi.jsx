const API_KEY = 'f1286296'; // Replace with your actual OMDB API key
const BASE_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

export const fetchMovies = async (query, type = '', page = 1) => {
    const response = await fetch(`${BASE_URL}&s=${query}&type=${type}&page=${page}`);
    return response.json();
};

export const fetchMovieDetails = async (id) => {
    const response = await fetch(`${BASE_URL}&i=${id}`);
    return response.json();
};
