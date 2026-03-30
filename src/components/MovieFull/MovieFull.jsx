import { getPosterUrl } from "../../utils/image";
import "./MovieFull.css";

function MovieFull({ movie }) {
  return (
    <div className="movie__full_container">
      <img
        className="movie__poster"
        src={getPosterUrl(movie.poster_path)}
        alt={movie.title}
      />
      <h2 className="movie__title">{movie.title}</h2>
      <p className="movie__overview">{movie.overview}</p>
    </div>
  );
}

export default MovieFull;
