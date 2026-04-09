import { getPosterUrl } from "../../utils/image";
import "./MovieFull.css";

function MovieFull({ movie }) {
  return (
    <div className="movie-full">
      <img
        className="movie-full__poster"
        src={getPosterUrl(movie.poster_path)}
        alt={movie.title}
      />
      <h2 className="movie-full__title">{movie.title}</h2>
      <p className="movie-full__overview">{movie.overview}</p>
    </div>
  );
}

export default MovieFull;
