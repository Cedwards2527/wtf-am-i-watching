import wtfLogo from "../../assets/wtf-logo.webp";
import "./Header.css";
import NavButton from "../NavButton/NavButton";

function Header() {
  return (
    <header className="header">
      <NavButton to="/">
        <img
          className="header__logo"
          src={wtfLogo}
          alt="WTF Am I Watching logo"
        />
      </NavButton>

      <div className="header__controls">
        <NavButton className="header__button_day" to="/movie-of-the-day">
          Movie Of The Day
        </NavButton>
        <NavButton className="header__button_random" to="/random">
          WTF Should I Watch Now?
        </NavButton>
        <NavButton className="header__button_about" to="/about">
          About WTF Am I Watching
        </NavButton>
      </div>
    </header>
  );
}

export default Header;
