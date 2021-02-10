const baseURL = 'https://api.themoviedb.org';
const API_KEY = '7f708811f1643542b21c8f4bf6e8e2f6';

const fetchShowDetails = showId => {
  return fetch(`${baseURL}/3/movie/${showId}?&api_key=${API_KEY}`).then(res => res.json());
};

const fetchShowWithQuery = searchQuery => {
  return fetch(`${baseURL}/3/search/movie?query=${searchQuery}&api_key=${API_KEY}`)
    .then(res => res.json())
};

const fetchPopular = () => {
    return fetch(`${baseURL}/3/trending/all/day?api_key=7f708811f1643542b21c8f4bf6e8e2f6`)
        .then(res => res.json());
}
const fetchMovieCast = showId => {
    return fetch(`${baseURL}/3/movie/${showId}/credits?&api_key=${API_KEY}`).then(res => res.json());
}
const fetchMovieReviews = showId => {
    return fetch(`${baseURL}/3/movie/${showId}/reviews?&api_key=${API_KEY}`).then(res => res.json());
}

export default { fetchShowDetails, fetchShowWithQuery, fetchPopular, fetchMovieCast, fetchMovieReviews };