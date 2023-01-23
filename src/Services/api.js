import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const BASE_KEY = '170e8e1b84e1b03b900301172e694ee0';


const options = {
  api_key: BASE_KEY,
};


export const getMovieById = async id => {
  const response = await axios.get(`/movie/${id}`, {
    params: options,
  });
  return response.data;
};

export const getTrendingMovie = async () => {
  const response = await axios.get('/trending/movie/day', { params: options });
  return response.data.results;
};

export const getReviewsById = async id => {
  const response = await axios.get(`/movie/${id}/reviews`, {
    params: options,
  });
  return response.data.results;
};

export const getCastById = async id => {
  const response = await axios.get(`/movie/${id}/credits`, {
    params: options,
  });
  return response.data.cast;
};

export const getSearchMovie = async name => {
  const newOptions = { ...options, query: name };
  const response = await axios.get(`/search/movie`, {
    params: newOptions,
  });
  return response.data.results;
};

