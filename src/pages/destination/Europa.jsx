import "./destination.css";
import Nav from "../../components/header/Nav";
import europa from "../../assets/destination/image-europa.webp";
import { Link } from "react-router-dom";

export default function Europa() {
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
          <img src={europa} alt="image of the Moon" className="planet-image" />
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
                <Link to={"/destination/europa"} className="planet-link active">
                  EUROPA
                </Link>
              </li>
              <li>
                <Link to={"/destination/titan"} className="planet-link">
                  TITAN
                </Link>
              </li>
            </ul>

            <div className="planet-info" data-planet="europa">
              <h2>EUROPA</h2>
              <p className="planet-description">
                The smallest of the four Galilean moons orbiting Jupiter, Europa
                is a winter lover’s dream. With an icy surface, it’s perfect for
                a bit of ice skating, curling, hockey, or simple relaxation in
                your snug wintery cabin.
              </p>

              <hr className="info-divider" />

              <div className="planet-stats">
                <div className="stat-block">
                  <p className="stat-title">EST. TRAVEL TIME</p>
                  <p className="stat-value">3 years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
