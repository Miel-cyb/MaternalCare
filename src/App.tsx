
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("./pages/Home"));
const TrackPregnancy = lazy(() => import("./pages/TrackPregnancy"));
const LandingPage = lazy(() => import("./pages/LandingPage"));
const Login = lazy(() => import("./pages/Login"));
const SignUp = lazy(() => import("./pages/SignUp"));
const Settings = lazy(() => import("./pages/Settings"));
const NutritionalGuide = lazy(() => import("./pages/NutritionalGuide")); 
const Resources = lazy(() => import("./pages/Resources"));

function App() {
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
