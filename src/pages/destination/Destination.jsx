import Nav from "../../components/header/Nav";
import "./destination.css";
import Moon from "./moon/Moon";
import moon from "../../assets/destination/image-moon.webp";

export default function Destination() {
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
          <img src={moon} alt="image of the Moon" />
          <div className="destination-selection">

          </div>
        </div>
      </div>
    </div>
  );
}
