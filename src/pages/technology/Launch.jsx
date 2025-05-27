import Nav from "../../components/header/Nav";
import { Link } from "react-router-dom";
import launchImg from "../../assets/technology/image-launch-vehicle-portrait.jpg";

export default function Launch() {
  return (
    <div className="technology-container">
      <Nav />
      <div className="technology-content">
        <div className="technology-title">
          <h1><span>03</span>SPACE LAUNCH 101</h1>
        </div>
        
        <div className="technology-main">
          <div className="technology-info">
            <nav className="technology-nav">
              <Link to="/technology/launch" className="tech-number active">1</Link>
              <Link to="/technology/spaceport" className="tech-number">2</Link>
              <Link to="/technology/capsule" className="tech-number">3</Link>
            </nav>

            <div className="technology-text">
              <p className="terminology">THE TERMINOLOGY...</p>
              <h2>LAUNCH VEHICLE</h2>
              <p className="description">
                A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a 
                payload from Earth's surface to space, usually to Earth orbit or beyond. Our 
                WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, 
                it's quite an awe-inspiring sight on the launch pad!
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