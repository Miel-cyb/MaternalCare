import eating from '../assets/eating.mp4';
import holdingBaby from '../assets/holding baby.mp4';
import reading from '../assets/reading.mp4';
import read from '../assets/read.mp4'
import exercise from '../assets/exercise.mp4'
import { useState, useRef } from 'react';


const Hero = () => {
  const videos = [reading, eating, exercise, read, holdingBaby];
  const [currentVideo, setCurrentVideo] = useState(0);
  const [fade, setfade] = useState(false);
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    setfade(true)
    setTimeout(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
      setfade(false)
      
    }, 1000);
  };

  return (
    <>
     
      <header className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            key={videos[currentVideo]} 
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnd}
            className={`w-full h-full object-cover object-top  transition-opacity duration-1000 ${
          fade ? "opacity-0" : "opacity-100"} `} 
          >
            <source src={videos[currentVideo]} type="video/mp4" />
          </video>
         
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Hero Text */}
        <div className="relative z-0 text-center max-w-3xl px-6">
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-white leading-tight">
            Empowering Mothers, Nurturing Futures
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200">
            Evidence-based maternal care for a healthier Ghana.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#services"
              className=" px-3 py-4 sm:px-6 sm:py-3 bg-pink-500 text-white font-semibold rounded-lg shadow-lg hover:bg-pink-600 transition"
            >
              Explore Services
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-white text-pink-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Hero;
