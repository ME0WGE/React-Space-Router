import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Destination from "./pages/destination/Destination";
import Crew from "./pages/crew/Crew";
import Technology from "./pages/technology/Technology";
import Moon from "./pages/destination/Moon";
import Mars from "./pages/destination/Mars";
import Europa from "./pages/destination/Europa";
import Titan from "./pages/destination/Titan";
import Commander from "./pages/crew/Commander";
import Specialist from "./pages/crew/Specialist";
import Pilot from "./pages/crew/Pilot";
import Engineer from "./pages/crew/Engineer";
import Launch from "./pages/technology/Launch";
import Spaceport from "./pages/technology/Spaceport";
import Capsule from "./pages/technology/Capsule";

function App() {
  return (
    <>
      <Routes>
        {/* HOME */}
        <Route path="/React-Space-Router" element={<Home />} />

        {/* DESTINATION */}
        <Route path="/destination" element={<Destination />}>
          {/* Page de Destination par défaut */}
          <Route index element={<Moon />} />
          <Route path="moon" element={<Moon />} />
          <Route path="mars" element={<Mars />} />
          <Route path="europa" element={<Europa />} />
          <Route path="titan" element={<Titan />} />
        </Route>

        {/* CREW */}
        <Route path="/crew" element={<Crew />}>
          {/* Page de Crew par défaut */}
          <Route index element={<Commander />} />
          <Route path="commander" element={<Commander />} />
          <Route path="specialist" element={<Specialist />} />
          <Route path="pilot" element={<Pilot />} />
          <Route path="engineer" element={<Engineer />} />
        </Route>

        {/* TECHNOLOGY */}
        <Route path="/technology" element={<Technology />}>
          {/* Page de Technology par défaut */}
          <Route index element={<Launch />} />
          <Route path="launch" element={<Launch />} />
          <Route path="spaceport" element={<Spaceport />} />
          <Route path="capsule" element={<Capsule />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
