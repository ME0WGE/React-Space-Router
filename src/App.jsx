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
      </Routes>
    </>
  );
}

{
  /* <Route path="/crew" element={<Crew />} /> */
}
{
  /* <Route path="/technology" element={<Technology />} /> */
}
export default App;
