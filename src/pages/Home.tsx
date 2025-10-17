import Hero from "../components/Hero";
import Vitals from "../components/Vitals";
import Myths from "../components/Myths";
import About from "../components/About";
import Navbar from "../components/Navbar";
import Meals from '../components/pregnancyNutrition';
import ScrollToTop from '../components/ScrollToTop';


const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Vitals />
      <About />
      <Meals />
      <div id="myths">
        <Myths />
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Home;
