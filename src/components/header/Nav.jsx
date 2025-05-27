import { Link } from "react-router-dom";
import "./nav.css";

export default function Nav() {
  return (
    <>
      <ul>
        <li>
          <Link to={"/"}>00 HOME</Link>
        </li>
        <li>
          <Link to={"/destination"}>01 DESTINATION</Link>
        </li>
        <li>
          <Link to={"/crew"}>02 CREW</Link>
        </li>
        <li>
          <Link to={"/technology"}>03 TECHNOLOGY</Link>
        </li>
      </ul>
    </>
  );
}
