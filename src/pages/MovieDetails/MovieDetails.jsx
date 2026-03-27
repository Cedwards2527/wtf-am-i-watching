import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovie } from "../../api/tmdb";
import { getPosterUrl } from "../../utils/image";
import "./MovieDetails.css";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getMovie(id)
      .then((data) => {
        setMovie(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching movies", err);
        setError("Failed to load movies");
      });
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="movie-details-container">
      <img
        className="movie-poster"
        src={getPosterUrl(movie.poster_path)}
        alt={movie.title}
      />
      <h2 className="movie-title">{movie.title}</h2>

      <p className="movie-overview">{movie.overview}</p>
    </div>
  );
}

export default MovieDetails;
