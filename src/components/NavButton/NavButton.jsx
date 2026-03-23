import { NavLink } from "react-router-dom";
import "./NavButton.css";

function NavButton({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "nav-button nav-button--active" : "nav-button"
      }
    >
      {children}
    </NavLink>
  );
}

export default NavButton;
