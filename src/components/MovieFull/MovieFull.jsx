import { useState } from "react";
import { getPosterUrl } from "../../utils/image";
import { getMovieTrailer } from "../../api/tmdb";
import play_button_icon from "../../assets/play-button.png";
import close_button_icon from "../../assets/close-button.png";
import "./MovieFull.css";

function MovieFull({ movie }) {
  const [activeModal, setActiveModal] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState();
  const openTrailerModal = () => {
    getMovieTrailer(movie.id).then((data) => {
      const trailer = data.results.find(
        (video) => video.site === "YouTube" && video.type === "Trailer"
      );
      setTrailerUrl(
        "https://www.youtube.com/embed/" + trailer.key + "?autoplay=1"
      );
      setActiveModal(true);
    });
  };
  const closeTrailerModal = () => {
    setTrailerUrl("");
    setActiveModal(false);
  };

  return (
    <div className="movie-full">
      <div
        className={`modal ${activeModal ? "modal__opened" : ""}`}
        onClick={closeTrailerModal}
      >
        <div className="modal__content" onClick={(e) => e.stopPropagation()}>
          <iframe
            className="iframe__trailer"
            src={trailerUrl}
            title="video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <button
            className="modal__close-button"
            type="button"
            onClick={closeTrailerModal}
          >
            <img
              className="modal__close-image"
              src={close_button_icon}
              alt="Close Button"
            />
          </button>
        </div>
      </div>
      <button
        className="play-button"
        aria-label="Play trailer"
        title="Play trailer"
        type="button"
        onClick={openTrailerModal}
      >
        <img
          className="play-button__icon"
          src={play_button_icon}
          alt="Play Trailer"
        />
        <span className="play-button__text">Trailer</span>
      </button>
      <img
        className="movie-full__poster"
        src={getPosterUrl(movie.poster_path)}
        alt={movie.title}
      />
      <h2 className="movie-full__title">{movie.title}</h2>
      <p className="movie-full__overview">{movie.overview}</p>
    </div>
  );
}

export default MovieFull;
