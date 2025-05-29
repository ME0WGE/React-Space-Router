import "./destination.css";
import Nav from "../../components/header/Nav";
import moon from "../../assets/destination/webp/image-moon.webp";
import { Link } from "react-router-dom";
import destination from "../../data/destination.json";

export default function Moon() {
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
          <img src={moon} alt="image of the Moon" className="planet-image" />
          <div className="destination-selection">
            <ul className="planet-nav">

              

              <li>
                <Link to={"/destination/moon"} className="planet-link active">
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
                <Link to={"/destination/titan"} className="planet-link">
                  TITAN
                </Link>
              </li>
            </ul>

            <div className="planet-info" data-planet="moon">
              <h2>MOON</h2>
              <p className="planet-description">
                See our planet as you've never seen it before. A perfect
                relaxing trip away to help regain perspective and come back
                refreshed. While you're there, take in some history by visiting
                the Luna 2 and Apollo 11 landing sites.
              </p>

              <hr className="info-divider" />

              <div className="planet-stats">
                <div className="stat-block">
                  <p className="stat-title">EST. TRAVEL TIME</p>
                  <p className="stat-value" data-value="moon">
                    3 DAYS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
