import { Link } from "react-router-dom";
import Nav from "../../components/header/Nav";
import "./specialist.css";
import specialistImage from "../../assets/crew/image-mark-shuttleworth.webp";

export default function Specialist() {
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
            <h2>MISSION SPECIALIST</h2>
            <h3>MARK SHUTTLEWORTH</h3>
            <p className="crew-bio">
              Mark Richard Shuttleworth is the founder and CEO of Canonical, the
              company behind the Linux-based Ubuntu operating system.
              Shuttleworth became the first South African to travel to space as
              a space tourist.
            </p>

            <div className="crew-nav">
              <Link to="/crew/commander" className="nav-dot"></Link>
              <Link to="/crew/specialist" className="nav-dot active"></Link>
              <Link to="/crew/pilot" className="nav-dot"></Link>
              <Link to="/crew/engineer" className="nav-dot"></Link>
            </div>
          </div>
        </div>

        <div className="crew-image">
          <img src={specialistImage} alt="Mark Shuttleworth" />
        </div>
      </div>
    </div>
  );
}
