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

  if (loading) return <p className="loading__text">Loading movies...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section>
      <h2 className="wtf-picks__title">WTF Picks</h2>
      <div className="movies__grid">
        <MovieRow movies={movies} />
      </div>
    </section>
  );
}

export default Home;
