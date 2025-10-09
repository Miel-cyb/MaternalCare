import Hero from "../components/Hero";
import Vitals from "../components/Vitals";
import Myths from "../components/Myths";
import About from "../components/About";
import Navbar from "../components/Navbar";
import Meals from '../components/pregnancyNutrition'


const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Vitals />
      <About />
      <Meals />
      <Myths />
    </div>
  );
};

export default Home;
