import { NavLink } from "react-router-dom";
import "./NavButton.css";

function NavButton({ to, children, className = "", ...props }) {
  return (
    <NavLink
      to={to}
      {...props}
      className={({ isActive }) => {
        const activeClass = isActive
          ? "nav-button nav-button--active"
          : "nav-button";
        return `${activeClass} ${className}`.trim();
      }}
    >
      {children}
    </NavLink>
  );
}

export default NavButton;
