import Nav from "../../components/header/Nav";
import { Link } from "react-router-dom";
import launchImg from "../../assets/technology/portrait/image-space-capsule-portrait.jpg";

export default function Capsule() {
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
              <Link to="/technology/spaceport" className="tech-number">
                2
              </Link>
              <Link to="/technology/capsule" className="tech-number active">
                3
              </Link>
            </nav>

            <div className="technology-text">
              <p className="terminology">THE TERMINOLOGY...</p>
              <h2>SPACE CAPSULE</h2>
              <p className="description">
                A space capsule is an often-crewed spacecraft that uses a
                blunt-body reentry capsule to reenter the Earth's atmosphere
                without wings. Our capsule is where you'll spend your time
                during the flight. It includes a space gym, cinema, and plenty
                of other activities to keep you entertained.
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
