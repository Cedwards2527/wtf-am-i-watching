import wtfLogo from "../../assets/wtf-logo.jpg";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={wtfLogo} alt="wtf-logo" />
      <button className="header__movie-of-the-day-btn" type="button">
        Movie Of The Day
      </button>
      <button className="header__random-movie-btn" type="button">
        Random Movie
      </button>
    </header>
  );
}

export default Header;
