import eating from '../assets/eating.mp4';
import holdingBaby from '../assets/holding baby.mp4';
import reading from '../assets/reading.mp4';
import read from '../assets/read.mp4';
import exercise from '../assets/exercise.mp4';
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo'

const LandingPage = () => {
  const videos = [reading, eating, exercise, read, holdingBaby];
  const [currentVideo, setCurrentVideo] = useState(0);
  const [fade, setFade] = useState(false);
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
      setFade(false);
    }, 1000);
  };

  return (
    <>
      <header className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden ">
         <div className='absolute top-0 left-0'>
          <Logo/>
         </div>
        {/* Background Video */}
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            key={videos[currentVideo]}
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnd}
            className={`w-full h-full object-cover object-top transition-opacity duration-1000 ${
              fade ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <source src={videos[currentVideo]} type="video/mp4" />
          </video>

          {/* Soft overlay */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Text Content */}
        <div className="relative z-10 text-center max-w-3xl px-6">
          <h1 className="font-quicksand text-3xl sm:text-5xl md:text-6xl font-semibold sm:font-extrabold text-white leading-tight drop-shadow-md">
            Empowering Mothers, Nurturing Futures
          </h1>
          <p className="mt-4 font-quicksand text-lg md:text-xl text-pink-100 font-semibold sm:font-medium">
            Evidence-based maternal care for a healthier Ghana.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="login"
              className="px-6 py-3 bg-pink-700 hover:bg-pink-600 hover:border-1 text-white font-semibold rounded-xl shadow-lg transition"
            >
              Login
            </Link>
            <Link
              to="signup"
              className="px-6 py-3 bg-white text-pink-600 border border-pink-200 hover:bg-pink-100 hover:border-1 font-semibold rounded-xl shadow-lg transition"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default LandingPage;
