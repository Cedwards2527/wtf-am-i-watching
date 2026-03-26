import { useEffect, useState } from "react";
import { wtfPicks } from "../../data/movies";
import { getMoviesFromPicks } from "../../api/tmdb";
import { getPosterUrl } from "../../utils/image";
import "./Home.css";

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img src={getPosterUrl(movie.poster_path)} alt={movie.title} />
      <h2 className="movie-title">{movie.title}</h2>
    </div>
  );
}

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getMoviesFromPicks(wtfPicks)
      .then((results) => {
        setMovies(results);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching movies", err);
        setError("Failed to load movies");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading movies...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="wtf-picks">
      <h1>WTF Picks</h1>
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;
