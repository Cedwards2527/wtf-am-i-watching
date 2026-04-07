import MovieCard from "../MovieCard/MovieCard";
import "./MovieRow.css";

function MovieRow({ movies }) {
  return (
    <ul className="movie__row">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}

export default MovieRow;
