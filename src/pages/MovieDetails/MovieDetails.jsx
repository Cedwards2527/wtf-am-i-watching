import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovie } from "../../api/tmdb";
import MovieFull from "../../components/MovieFull/MovieFull";

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
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading movie...</p>;
  if (error) return <p>{error}</p>;

  return <MovieFull movie={movie} />;
}

export default MovieDetails;
