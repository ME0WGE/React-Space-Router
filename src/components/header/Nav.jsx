import { NavLink } from "react-router-dom";
import "./nav.css";
import logo from "../../assets/shared/logo.svg";
import iconHamburger from "../../assets/shared/icon-hamburger.svg";
import iconClose from "../../assets/shared/icon-close.svg";
import { useState } from "react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="nav-container">
        <NavLink to={"/React-Space-Router"}>
          <img src={logo} alt="logo" id="logo" />
        </NavLink>

        <button
          className="burger-nav-toggle"
          aria-controls="nav-ul"
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          <img
            src={menuOpen ? iconClose : iconHamburger}
            alt={menuOpen ? "Close menu" : "Open menu"}
          />
        </button>

        <ul className={`nav-ul ${menuOpen ? "open" : ""}`} id="nav-ul">
          <li>
            <NavLink
              to={"/React-Space-Router"}
              className={({ isActive }) =>
                isActive ? "li-link active" : "li-link"
              }
              onClick={() => setMenuOpen(false)}
            >
              00 HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/destination"}
              className={({ isActive }) =>
                isActive ? "li-link active" : "li-link"
              }
              onClick={() => setMenuOpen(false)}
            >
              01 DESTINATION
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/crew"}
              className={({ isActive }) =>
                isActive ? "li-link active" : "li-link"
              }
              onClick={() => setMenuOpen(false)}
            >
              02 CREW
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/technology"}
              className={({ isActive }) =>
                isActive ? "li-link active" : "li-link"
              }
              onClick={() => setMenuOpen(false)}
            >
              03 TECHNOLOGY
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}
