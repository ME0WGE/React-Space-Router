import "./destination.css";
import Nav from "../../components/header/Nav";
import titan from "../../assets/destination/image-titan.webp";
import { Link } from "react-router-dom";

export default function Titan() {
  return (
    <div className="destination-container">
      {/* Display Navbar */}
      <Nav />

      <div className="destination-content">
        <div className="destination-title">
          <h1>
            <span>01</span>PICK YOUR DESTINATION
          </h1>
        </div>

        <div className="destination-main">
          <img src={titan} alt="image of the Moon" className="planet-image" />
          <div className="destination-selection">
            <ul className="planet-nav">
              <li>
                <Link to={"/destination/moon"} className="planet-link">
                  MOON
                </Link>
              </li>
              <li>
                <Link to={"/destination/mars"} className="planet-link">
                  MARS
                </Link>
              </li>
              <li>
                <Link to={"/destination/europa"} className="planet-link">
                  EUROPA
                </Link>
              </li>
              <li>
                <Link to={"/destination/titan"} className="planet-link active">
                  TITAN
                </Link>
              </li>
            </ul>

            <div className="planet-info" data-planet="titan">
              <h2>TITAN</h2>
              <p className="planet-description">
                The only moon known to have a dense atmosphere other than Earth,
                Titan is a home away from home (just a few hundred degrees
                colder!). As a bonus, you get striking views of the Rings of
                Saturn.
              </p>

              <hr className="info-divider" />

              <div className="planet-stats">
                <div className="stat-block">
                  <p className="stat-title">EST. TRAVEL TIME</p>
                  <p className="stat-value">7 years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
