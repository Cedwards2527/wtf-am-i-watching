import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovie } from "../../api/tmdb";
import MovieFull from "../../components/MoiveFull/MovieFull";

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

  return <MovieFull movie={movie} />;
}

export default MovieDetails;
