import { Link } from "react-router-dom";
import Nav from "../../components/header/Nav";
import "./crew.css";
import engineerImage from "../../assets/crew/webp/image-anousheh-ansari.webp";

export default function Engineer() {
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
            <h2>FLIGHT ENGINEER</h2>
            <h3>ANOUSHEH ANSARI</h3>
            <p className="crew-bio">
              Anousheh Ansari is an Iranian American engineer and co-founder of
              Prodea Systems. Ansari was the fourth self-funded space tourist,
              the first self-funded woman to fly to the ISS, and the first
              Iranian in space.
            </p>

            <div className="crew-nav">
              <Link to="/crew/commander" className="nav-dot"></Link>
              <Link to="/crew/specialist" className="nav-dot"></Link>
              <Link to="/crew/pilot" className="nav-dot"></Link>
              <Link to="/crew/engineer" className="nav-dot active"></Link>
            </div>
          </div>
        </div>

        <div className="crew-image">
          <img src={engineerImage} alt="Mark Shuttleworth" />
        </div>
      </div>
    </div>
  );
}
