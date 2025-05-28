import { Link } from "react-router-dom";
import Nav from "../../components/header/Nav";
import "./crew.css";
import pilotImage from "../../assets/crew/webp/image-victor-glover.webp";

export default function Pilot() {
  return (
    <div className="crew-container">
      {/* Display Navbar */}
      <Nav />

      <div className="crew-content">
        <div className="crew-info">
          <div className="crew-title">
            <h1>
              <span>02</span> MEET YOUR CREW
            </h1>
          </div>

          <div className="crew-details">
            <h2>PILOT</h2>
            <h3>VICTOR GLOVER</h3>
            <p className="crew-bio">
              Pilot on the first operational flight of the SpaceX Crew Dragon to
              the International Space Station. Glover is a commander in the U.S.
              Navy where he pilots an F/A-18.He was a crew member of Expedition
              64, and served as a station systems flight engineer.
            </p>

            <div className="crew-nav">
              <Link to="/crew/commander" className="nav-dot"></Link>
              <Link to="/crew/specialist" className="nav-dot"></Link>
              <Link to="/crew/pilot" className="nav-dot active"></Link>
              <Link to="/crew/engineer" className="nav-dot"></Link>
            </div>
          </div>
        </div>

        <div className="crew-image">
          <img src={pilotImage} alt="Mark Shuttleworth" />
        </div>
      </div>
    </div>
  );
}
