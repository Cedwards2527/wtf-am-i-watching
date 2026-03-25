import { useEffect, useState } from "react";
import { getMovie } from "../../api/tmdb";
import { getPosterUrl } from "../../utils/image";
import "./Home.css";

function Home() {
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    getMovie(24804)
      .then((data) => {
        setMovie(data);
      })

      .catch(console.error);
  }, []);
  return (
    <>
      {movie && <h2 className="movie-title">{movie.title}</h2>}
      {movie && (
        <img
          className="movie-image"
          src={getPosterUrl(movie.poster_path)}
          alt="Movie poster"
        ></img>
      )}
    </>
  );
}

export default Home;
