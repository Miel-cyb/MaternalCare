import pregnantWoman from '../assets/pregnant woman.png';
import happyWoman from '../assets/images/happypregnantwoman.png';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const weeks = Array.from({ length: 40 }, (_, i) => i + 1);

const Hero = () => {
    const [selectedWeek, setSelectedWeek] = useState(32);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const circleSize = isMobile ? 320 : 600;
    const radius = isMobile ? 150 : 300;

  return (
    <header className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-rose-50 px-4 sm:px-6">
         <div className="absolute top-24 text-center z-20">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
                    Pregnancy Progress
                </h1>
            </div>
      <div className="relative w-full max-w-6xl mx-auto mt-32 md:mt-20 flex flex-col md:flex-row items-center justify-center">

        {/* Doc's Tips Card - positioned based on screen size */}
        <motion.div 
            className="w-64 mb-8 md:mb-0 md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-lg z-20"
            initial={{ opacity: 0, x: isMobile ? 0 : -50, y: isMobile ? -30 : 0 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
        >
            <h3 className="font-bold text-gray-800">Doc's Tips</h3>
            <p className="text-sm text-gray-600 mb-2">for 3rd Trimester</p>
            <div className="relative">
                <img src={happyWoman} alt="Pregnancy Gymnastics" className="rounded-lg" />
                <div className="absolute inset-0 bg-black/20 rounded-lg flex items-center justify-center">
                    <div className="w-10 h-10 bg-white/80 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-gray-800" fill="currentColor" viewBox="0 0 20 20"><path d="M8 5v10l7-5-7-5z"></path></svg>
                    </div>
                </div>
            </div>
            <p className="font-semibold text-gray-700 mt-2 text-sm">Video</p>
            <p className="font-bold text-gray-800 text-base">Pregnancy Gymnastics</p>
        </motion.div>


        {/* Circular Week Selector */}
        <div 
            className="relative flex items-center justify-center"
            style={{ width: `${circleSize}px`, height: `${circleSize}px` }}
        >
            <motion.div 
                className="absolute w-full h-full rounded-full border-2 border-dashed border-rose-200 flex items-center justify-center" 
                animate={{ rotate: 360 }}
                transition={{ ease: "linear", duration: 30, repeat: Infinity }}
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
                            whileHover={{ scale: 1.2 }}
                            onClick={() => setSelectedWeek(week)}
                        >
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors shadow-md ${
                                selectedWeek === week ? 'bg-rose-500 text-white' : 'bg-white'
                            }`}>
                                {week}
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>

            {/* Central Image */}
            <img 
                src={pregnantWoman} 
                alt="Pregnant woman" 
                className="relative z-10 w-1/2 md:w-1/3 max-w-[150px] md:max-w-xs"
            />
        </div>
        
        {/* Analysis Card - positioned based on screen size */}
        <motion.div 
            className="w-64 mt-8 md:mt-0 md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-lg z-20"
            initial={{ opacity: 0, x: isMobile ? 0 : 50, y: isMobile ? 30 : 0 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
        >
            <h3 className="font-bold text-gray-800">Analysis</h3>
            <p className="text-sm text-gray-600 mb-2">for {selectedWeek} Week</p>
            <div className="bg-white p-2 rounded-lg">
                    <svg className="w-full" height="60" viewBox="0 0 200 60">
                    <path d="M 0,40 C 20,10 40,50 60,30 S 100,0 120,20 S 160,60 180,40 L 200,50" fill="none" stroke="#fecdd3" strokeWidth="2"/>
                    <path d="M 0,45 C 20,15 40,55 60,35 S 100,5 120,25 S 160,65 180,45 L 200,55" fill="none" stroke="#fb7185" strokeWidth="2"/>
                </svg>
                <p className="text-xs text-gray-500 mt-1">Echocardiography</p>
            </div>
        </motion.div>

      </div>
    </header>
  );
};

export default Hero;
