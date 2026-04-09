import { useState } from "react";
import wtfLogo from "../../assets/wtf-logo.webp";
import "./Header.css";
import NavButton from "../NavButton/NavButton";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="header">
      <NavButton to="/">
        <img
          className="header__logo"
          src={wtfLogo}
          alt="WTF Am I Watching logo"
        />
      </NavButton>
      <button
        className="header__menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
      >
        ☰
      </button>
      <nav className="header__controls">
        <NavButton className="header__button_day" to="/movie-of-the-day">
          Movie Of The Day
        </NavButton>
        <NavButton className="header__button_random" to="/random">
          WTF Should I Watch Now?
        </NavButton>
        <NavButton className="header__button_about" to="/about">
          About WTF Am I Watching
        </NavButton>
      </nav>
      {menuOpen && (
        <nav id="mobile-navigation" className="header__mobile-menu">
          <NavButton to="/movie-of-the-day" onClick={() => setMenuOpen(false)}>
            Movie Of The Day
          </NavButton>
          <NavButton to="/random" onClick={() => setMenuOpen(false)}>
            WTF Should I Watch Now?
          </NavButton>
          <NavButton to="/about" onClick={() => setMenuOpen(false)}>
            About WTF Am I Watching
          </NavButton>
        </nav>
      )}
    </header>
  );
}

export default Header;
