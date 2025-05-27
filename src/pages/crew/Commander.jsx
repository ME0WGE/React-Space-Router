import { Link } from "react-router-dom";
import Nav from "../../components/header/Nav";
import "./crew.css";
import commanderImage from "../../assets/crew/image-douglas-hurley.webp";

export default function Commander() {
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
            <h2>COMMANDER</h2>
            <h3>DOUGLAS HURLEY</h3>
            <p className="crew-bio">
              Douglas Gerald Hurley is an American engineer, former Marine Corps
              pilot and former NASA astronaut. He launched into space for the
              third time as commander of Crew Dragon Demo-2.
            </p>

            <div className="crew-nav">
              <Link to="/crew/commander" className="nav-dot active"></Link>
              <Link to="/crew/specialist" className="nav-dot"></Link>
              <Link to="/crew/pilot" className="nav-dot"></Link>
              <Link to="/crew/engineer" className="nav-dot"></Link>
            </div>
          </div>
        </div>

        <div className="crew-image">
          <img src={commanderImage} alt="Douglas Hurley" />
        </div>
      </div>
    </div>
  );
}
