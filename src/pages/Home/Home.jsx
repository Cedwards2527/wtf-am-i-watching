import { useEffect, useState } from "react";
import { wtfPicks } from "../../data/movies";
import { getMoviesFromPicks } from "../../api/tmdb";
import MovieRow from "../../components/MovieRow/MovieRow";
import "./Home.css";

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
    <div className="wtf__picks">
      <h1>WTF Picks</h1>
      <div className="movies__grid">
        <MovieRow movies={movies} />
      </div>
    </div>
  );
}

export default Home;
