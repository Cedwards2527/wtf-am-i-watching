const baseURL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const handleServerResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

export const getMovie = (id) => {
  return fetch(`${baseURL}/movie/${id}?api_key=${API_KEY}`).then(
    handleServerResponse
  );
};

export const getMoviesFromPicks = (ids) => {
  return Promise.all(ids.map((id) => getMovie(id)));
};
