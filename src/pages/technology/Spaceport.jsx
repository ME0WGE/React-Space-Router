import Nav from "../../components/header/Nav";
import { Link } from "react-router-dom";
import launchImg from "../../assets/technology/image-spaceport-portrait.jpg";

export default function Spaceport() {
  return (
    <div className="technology-container">
      <Nav />
      <div className="technology-content">
        <div className="technology-title">
          <h1>
            <span>03</span>SPACE LAUNCH 101
          </h1>
        </div>

        <div className="technology-main">
          <div className="technology-info">
            <nav className="technology-nav">
              <Link to="/technology/launch" className="tech-number">
                1
              </Link>
              <Link to="/technology/spaceport" className="tech-number active">
                2
              </Link>
              <Link to="/technology/capsule" className="tech-number">
                3
              </Link>
            </nav>

            <div className="technology-text">
              <p className="terminology">THE TERMINOLOGY...</p>
              <h2>SPACEPORT</h2>
              <p className="description">
                A spaceport or cosmodrome is a site for launching (or receiving)
                spacecraft, by analogy to the seaport for ships or airport for
                aircraft. Based in the famous Cape Canaveral, our spaceport is
                ideally situated to take advantage of the Earth’s rotation for
                launch.
              </p>
            </div>
          </div>
          <div className="technology-image">
            <img src={launchImg} alt="Launch vehicle" />
          </div>
        </div>
      </div>
    </div>
  );
}
