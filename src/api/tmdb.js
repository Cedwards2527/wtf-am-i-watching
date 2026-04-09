import { BASE_URL, API_KEY } from "../config/tmdb";

const handleServerResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

export const getMovie = (id) => {
  return fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`).then(
    handleServerResponse
  );
};

export const getMoviesFromPicks = (ids) => {
  return Promise.all(
    ids.map((id) =>
      getMovie(id).catch((error) => {
        console.warn(`Skipping invalid TMDB id ${id}:`, error);
        return null;
      })
    )
  ).then((movies) => movies.filter(Boolean));
};
