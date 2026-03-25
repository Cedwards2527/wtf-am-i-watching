import { useEffect, useState } from "react";
import { getMovie } from "../../api/tmdb";
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
      <img
        className="movie-image"
        src="https://image.tmdb.org/t/p/w500/u3oWQDz0JggzzsVlsuHY7XVxp5Y.jpg"
        alt="Movie poster"
      ></img>
    </>
  );
}

export default Home;
