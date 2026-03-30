import { useState, useEffect } from "react";
import { getMovie } from "../../api/tmdb";
import { wtfPicks } from "../../data/movies";
import MovieFull from "../../components/MovieFull/MovieFull";
import "./MovieOfTheDay.css";

function MovieOfTheDay() {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getMovieOfTheDayId = () => {
    const today = new Date().getDate();
    const index = today % wtfPicks.length;
    return wtfPicks[index];
  };
  useEffect(() => {
    const id = getMovieOfTheDayId();

    getMovie(id)
      .then((data) => {
        setMovie(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching movies", err);
        setError("Failed to load movies");
      });
  }, []);

  if (loading) return <p>Loading movie...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="movie-of-the-day">
      <h2 className="movie-of-the-day__header">Movie Of The DAY</h2>
      <MovieFull movie={movie} />
    </div>
  );
}

export default MovieOfTheDay;
