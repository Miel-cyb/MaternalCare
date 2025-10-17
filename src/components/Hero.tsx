import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import beforePregnancyVideo from '../assets/beforepregnancy.mp4';
import afterPregnancyVideo from '../assets/images/afterpregnancy.mp4';
import happyWoman from '../assets/images/happypregnantwoman.png';

const weeks = Array.from({ length: 40 }, (_, i) => i + 1);

const Hero = () => {
    const [selectedWeek, setSelectedWeek] = useState(32);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
    const [showVideoModal, setShowVideoModal] = useState(false);

    const videoRef = useRef<HTMLVideoElement>(null);
    const videos = [beforePregnancyVideo, afterPregnancyVideo];
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    const handleVideoEnd = () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    };

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.src = videos[currentVideoIndex];
            videoRef.current.play();
        }
    }, [currentVideoIndex]);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const circleSize = isMobile ? 320 : 550;
    const radius = isMobile ? 150 : 260;

  return (
    <header className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-rose-50 px-4 sm:px-6 lg:px-8">
         <div className="absolute top-16 sm:top-24 text-center z-20">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-800 tracking-tight">
                  Pregnancy Progress
              </h1>
          </div>

      <div className="w-full max-w-screen-xl mx-auto mt-40 sm:mt-48 md:mt-40 flex flex-col lg:flex-row items-center justify-center lg:justify-between">

        {/* Doc's Tips Card */}
        <motion.div 
            className="w-full sm:w-72 mb-8 lg:mb-0 bg-white/60 backdrop-blur-md p-5 rounded-3xl shadow-xl z-20 border border-white/20 order-2 lg:order-1"
            initial={{ opacity: 0, x: -50, y: isMobile ? -30 : 0 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
        >
            <h3 className="font-bold text-gray-800 text-xl">Doc's Tips</h3>
            <p className="text-sm text-gray-600 mb-4">for 3rd Trimester</p>
            <div className="relative rounded-xl overflow-hidden">
                <img src={happyWoman} alt="Pregnancy Gymnastics" loading="lazy" />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <button 
                        className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center backdrop-blur-sm transition-transform hover:scale-110"
                        onClick={() => setShowVideoModal(true)}
                    >
                        <svg className="w-7 h-7 text-gray-800" fill="currentColor" viewBox="0 0 20 20"><path d="M8 5v10l7-5-7-5z"></path></svg>
                    </button>
                </div>
            </div>
            <p className="font-semibold text-gray-700 mt-3 text-base">Video</p>
            <p className="font-bold text-gray-800 text-lg">Pregnancy Gymnastics</p>
        </motion.div>


        {/* Circular Week Selector */}
        <div 
            className="relative flex items-center justify-center my-8 lg:my-0 order-1 lg:order-2"
            style={{ width: `${circleSize}px`, height: `${circleSize}px` }}
        >
            <motion.div 
                className="absolute w-full h-full rounded-full border-2 border-dashed border-rose-200 flex items-center justify-center" 
                animate={{ rotate: 360 }}
                transition={{ ease: "linear", duration: 40, repeat: Infinity }}
            >
                {weeks.map((week) => {
                    const angle = (week - 1) * (360 / 40) - 90;
                    return (
                        <motion.div
                            key={week}
                            className={`absolute w-10 h-10 flex items-center justify-center rounded-full cursor-pointer z-20`}
                            style={{
                                transform: `rotate(${angle}deg) translate(${radius}px) rotate(${-angle}deg)`,
                            }}
                            whileHover={{ scale: 1.25 }}
                            onClick={() => setSelectedWeek(week)}
                        >
                            <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg ${
                                selectedWeek === week ? 'bg-rose-500 text-white scale-110' : 'bg-white/80 backdrop-blur-sm'
                            }`}>
                                {week}
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>

            {/* Central Video Player */}
            <div className="relative z-10 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden shadow-2xl border-4 border-white">
                 <video
                    ref={videoRef}
                    onEnded={handleVideoEnd}
                    muted
                    playsInline
                    autoPlay
                    preload="metadata"
                    className={`w-full h-full object-cover ${currentVideoIndex === 1 ? 'object-top' : ''}`}>
                </video>
            </div>
        </div>
        
        {/* Analysis Card */}
        <motion.div 
            className="w-full sm:w-72 mt-8 lg:mt-0 bg-white/60 backdrop-blur-md p-5 rounded-3xl shadow-xl z-20 border border-white/20 order-3 lg:order-3"
            initial={{ opacity: 0, x: 50, y: isMobile ? 30 : 0 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
        >
            <h3 className="font-bold text-gray-800 text-xl">Analysis</h3>
            <p className="text-sm text-gray-600 mb-4">for Week {selectedWeek}</p>
            <div className="bg-white/80 p-3 rounded-xl">
                <svg className="w-full" height="60" viewBox="0 0 200 60">
                    <motion.path 
                        d="M 0,40 C 20,10 40,50 60,30 S 100,0 120,20 S 160,60 180,40 L 200,50" 
                        fill="none" 
                        stroke="#fecdd3" 
                        strokeWidth="3"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    />
                    <motion.path 
                        d="M 0,45 C 20,15 40,55 60,35 S 100,5 120,25 S 160,65 180,45 L 200,55" 
                        fill="none" 
                        stroke="#fb7185" 
                        strokeWidth="3"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.2, delay: 0.7 }}
                    />
                </svg>
                <p className="text-xs text-gray-500 mt-2 text-center">Echocardiography</p>
            </div>
        </motion.div>

      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {showVideoModal && (
            <motion.div 
                className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowVideoModal(false)}
            >
                <motion.div 
                    className="bg-white rounded-2xl w-full max-w-3xl aspect-video m-4"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.8 }}
                    onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking on the video
                >
                     <iframe
                     src="https://www.youtube.com/embed/pxACsE_bH-Y?si=hHgKybJrp8X44DK3" 
                      title="Pregnancy Gymnastics"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full rounded-2xl"
                    />
                </motion.div>
            </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
};

export default Hero;
