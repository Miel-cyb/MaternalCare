import { BrowserRouter as Router, Route,Routes } from "react-router-dom"
import Home from "./pages/Home"
import TrackPregnancy from "./pages/TrackPregnancy"





function App() {
  

  return (
    <>
    <Router>
      
    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/pregnancy-tracker" element={<TrackPregnancy/>}></Route>
      </Routes>

    </Router>
    </>
  )
}

export default App
