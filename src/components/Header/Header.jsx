import wtfLogo from "../../assets/wtf-logo.jpg";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={wtfLogo} alt="wtf-logo" />
      <div className="header__controls">
        <button className="header__movie-of-the-day-btn" type="button">
          Movie Of The Day
        </button>
        <button className="header__random-movie-btn" type="button">
          WTF Should I Watch Now?
        </button>
        <button className="header__about" type="button">
          About WTF Am I Watching
        </button>
      </div>
    </header>
  );
}

export default Header;
