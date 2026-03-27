import { getPosterUrl } from "../../utils/image";
import { NavLink } from "react-router-dom";
import "./MovieCard.css";

function MovieCard({ movie }) {
  return (
    <div className="movie__card">
      <NavLink className="movie__link" to={`/movie/${movie.id}`}>
        <img
          className="movie__card_img"
          src={getPosterUrl(movie.poster_path)}
          alt={movie.title}
        />
        <h2 className="movie__title">{movie.title}</h2>
      </NavLink>
    </div>
  );
}

export default MovieCard;
