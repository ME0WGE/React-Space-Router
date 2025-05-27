import Nav from "../../components/header/Nav";
import "./home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Display Navbar */}
      <Nav />

      <div className="home-content">
        <div className="home-text">
          <p>SO, YOU WANT TO TRAVEL TO</p>
          <h1 id="home-space">SPACE</h1>
          <p>
            {" "}
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="home-explore" onClick={() => navigate("/destination")}>
          <h3 id="home-explore">EXPLORE</h3>
        </div>
      </div>
    </div>
  );
}
