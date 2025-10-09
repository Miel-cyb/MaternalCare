
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TrackPregnancy from "./pages/TrackPregnancy";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Settings from "./pages/Settings";
import NutritionalGuide from "./pages/NutritionalGuide"; // Import the new page

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/pregnancy-tracker" element={<TrackPregnancy />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/nutritional-guide" element={<NutritionalGuide />} /> {/* Add the new route */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
