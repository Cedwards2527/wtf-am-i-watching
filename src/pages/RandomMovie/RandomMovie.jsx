import { useState } from "react";
import { getMovie } from "../../api/tmdb";
import { wtfPicks } from "../../data/movies";
import MovieFull from "../../components/MovieFull/MovieFull";
import "./RandomMovie.css";

function RandomMovie() {
  const [movie, setMovie] = useState(null);
  const [setError] = useState(null);

  const randomIndex = () => {
    const index = Math.floor(Math.random() * wtfPicks.length);
    return wtfPicks[index];
  };

  const fetchRandomMovie = () => {
    const id = randomIndex();

    getMovie(id)
      .then((data) => {
        setMovie(data);
      })
      .catch((err) => {
        console.error("Error fetching movies", err);
        setError("Failed to load movies");
      });
  };
  const handleClick = () => {
    fetchRandomMovie();
  };

  return (
    <div className="random__movie">
      <button className="random__movie_button" onClick={handleClick}>
        <h2 className="random__movie_title">WTF Should I Watch Now!?</h2>
      </button>
      {movie && <MovieFull movie={movie} />}
    </div>
  );
}

export default RandomMovie;
