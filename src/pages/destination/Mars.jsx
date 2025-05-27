import "./mars.css";
import Nav from "../../components/header/Nav";
import mars from "../../assets/destination/image-mars.webp";
import { Link } from "react-router-dom";

export default function Mars() {
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
          <img src={mars} alt="image of the Moon" className="planet-image" />
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

            <div className="planet-info">
              <h2>MARS</h2>
              <p className="planet-description">
                Don’t forget to pack your hiking boots. You’ll need them to
                tackle Olympus Mons, the tallest planetary mountain in our solar
                system. It’s two and a half times the size of Everest!
              </p>

              <hr className="info-divider" />

              <div className="planet-stats">
                <div className="stat-block">
                  <p className="stat-title">EST. TRAVEL TIME</p>
                  <p className="stat-value">9 months</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
