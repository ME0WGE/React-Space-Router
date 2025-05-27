import { NavLink } from "react-router-dom";
import "./nav.css";
import logo from "../../assets/shared/logo.svg";

export default function Nav() {
  return (
    <>
      <div className="nav-container">
        <a
          href="https://www.github.com/ME0WGE"
          target="_blank"
          rel="noopener noreferrer"
          className="logo-container"
        >
          <img src={logo} alt="logo" id="logo" />
          {/* <span className="logo-tooltip">Made with ❤️ by Kamil Baldyga</span> */}
        </a>
        <ul className="nav-ul">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? "li-link active" : "li-link"
              }
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
            >
              03 TECHNOLOGY
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}
