
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import TrackPregnancy from "./pages/TrackPregnancy";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Settings from "./pages/Settings";
import NutritionalGuide from "./pages/NutritionalGuide";
import Resources from "./pages/Resources";

function App(){
  return (
    <>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/pregnancy-tracker" element={<TrackPregnancy />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/nutritional-guide" element={<NutritionalGuide />} /> 
            <Route path="/resources" element={<Resources/>}/>
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
