import { Link, NavLink } from "react-router-dom";
import "./nav.css";
import logo from "../../assets/shared/logo.svg";

export default function Nav() {
  return (
    <>
      <div className="nav-container">
        <img src={logo} alt="logo" id="logo" />
        <ul className="nav-ul">
          <li>
            <Link to={"/"} className="li-link">
              00 HOME
            </Link>
          </li>
          <li>
            <Link to={"/destination"} className="li-link">
              01 DESTINATION
            </Link>
          </li>
          <li>
            <Link to={"/crew"} className="li-link">
              02 CREW
            </Link>
          </li>
          <li>
            <Link to={"/technology"} className="li-link">
              03 TECHNOLOGY
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
