import pregnantWoman from '../assets/pregnant woman.png'
import fetus from '../assets/images/fetus.png'
import food from '../assets/images/dish7.png'
import Card from '../components/Card'
import { FaHeart, FaLightbulb } from "react-icons/fa";
import { GiSunflower } from "react-icons/gi";
import { MdFavorite } from "react-icons/md";
import { motion, type Variants } from "framer-motion";
import Logo from '../components/Logo';
import { LuRefreshCcw } from "react-icons/lu";
import WeeklyInfo from "../components/WeeklyInfo";
import pregnancyData from '../data/pregnancyData.json'
import { useState } from 'react';
import HealthTracker from '../components/HealthTracker';



const TrackPregnancy = () => {

    const motivation = [
        {
            icon: <FaHeart size={28} />,
            desc: "Your body is working wonders — trust the process and be proud of yourself.",
            color: '#EEC9B7',
            
        },
        {
            icon: <GiSunflower size={28} />,
            color: '#EED9B6', 
            desc: "Every step you take brings you closer to meeting your little miracle.",
        },
        {
            icon: <MdFavorite size={28} />,
            color: '#D0C7D9', 
            desc: "Every heartbeat inside you is a reminder that love grows here.",
        },
    ];

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            transition: {
                type: "spring",
                damping: 20,
                stiffness: 100
            }
        }
    };


    const [weeks, setWeeks] = useState<number | null>(null)
    const [weeklyData, setWeeklyData] = useState<any | null>(null); 

    const fetchWeeklyData = () => {
        if (weeks === null) return;
        const data = pregnancyData.find((d) => d.week === weeks);
        setWeeklyData(data || null); 
    };

    

    return (
    <>
        <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50">
            {/* Hero Section */}
            <header className="relative w-full min-h-screen overflow-hidden">
                
                <div className="absolute inset-0 bg-gradient-to-br from-pink-100/80 via-rose-100/60 to-orange-100/80">
                    <div className="absolute inset-0 opacity-50">
                        <div className="absolute top-10 left-10 w-32 h-32 bg-pink-300 rounded-full animate-pulse"></div>
                        <div className="absolute top-1/3 right-20 w-24 h-24 bg-rose-300 rounded-full animate-pulse delay-1000"></div>
                        <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-orange-300 rounded-full animate-pulse delay-2000"></div>
                    </div>
                    
                    {/* Decorative Blobs */}
                    <svg className="absolute top-0 left-0 w-full h-full opacity-10" viewBox="0 0 1000 1000">
                        <defs>
                            <linearGradient id="blob1" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#EC4899" />
                                <stop offset="100%" stopColor="#F97316" />
                            </linearGradient>
                        </defs>
                        <path d="M200,300 Q400,100 600,200 T800,400 Q700,600 500,550 T200,300" fill="url(#blob1)" className="animate-pulse"/>
                        <path d="M100,600 Q300,500 500,650 T750,700 Q600,850 400,800 T100,600" fill="url(#blob1)" className="animate-pulse delay-1000"/>
                        <circle cx="150" cy="150" r="80" fill="url(#blob1)" className="animate-pulse delay-2000"/>
                        <circle cx="850" cy="200" r="60" fill="url(#blob1)" className="animate-pulse delay-3000"/>
                        <circle cx="800" cy="750" r="100" fill="url(#blob1)" className="animate-pulse delay-500"/>
                    </svg>
                    
                    {/* Floating Hearts */}
                    <div className="absolute inset-0 overflow-hidden">
                        <motion.div
                            className="absolute top-20 left-10 text-pink-300 opacity-30"
                            animate={{ y: [-20, 20, -20] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        >
                            <FaHeart size={24} />
                        </motion.div>
                        <motion.div
                            className="absolute top-40 right-16 text-rose-300 opacity-40"
                            animate={{ y: [20, -20, 20], rotate: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                        >
                            <MdFavorite size={32} />
                        </motion.div>
                        <motion.div
                            className="absolute bottom-32 left-20 text-orange-300 opacity-35"
                            animate={{ y: [-15, 15, -15], rotate: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                        >
                            <GiSunflower size={28} />
                        </motion.div>
                        <motion.div
                            className="absolute top-1/2 right-8 text-pink-400 opacity-25"
                            animate={{ y: [25, -25, 25] }}
                            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
                        >
                            <FaHeart size={20} />
                        </motion.div>
                        <motion.div
                            className="absolute bottom-20 right-32 text-rose-400 opacity-30"
                            animate={{ y: [-10, 10, -10], x: [-5, 5, -5] }}
                            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                        >
                            <MdFavorite size={26} />
                        </motion.div>
                    </div>
                    
                   
                </div>

                {/* Logo */}
                 <Logo/>
                

                {/* Main Content Container */}
                <div className="relative z-20 mx-auto max-w-7xl px-4 h-full flex items-center justify-center">
                    <div className="relative w-full flex items-center justify-center">
                        
                        {/* Central Image */}
                        <motion.div
                            className="relative z-30 h-full w-full flex items-center justify-center"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                        >
                            <div className="relative h-screen flex items-center justify-center">
                                <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full opacity-20 scale-110"></div>
                                <img
                                    src={pregnantWoman}
                                    alt="pregnant woman"
                                    className="relative z-10 h-full max-[600px]:w-full object-cover drop-shadow-2xl"
                                />
                            </div>
                        </motion.div>

                        {/* Floating Cards */}
                        <motion.div
                            className="absolute inset-0 hidden lg:block"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            {motivation.map((item, index) => {
                                const positions = [
                                    { top: '15%', left: '5%', rotate: '-5deg' },
                                    { top: '45%', right: '8%', rotate: '3deg' },
                                    { bottom: '20%', left: '10%', rotate: '-3deg' }
                                ];

                                return (
                                    <motion.div
                                        key={index}
                                        variants={cardVariants}
                                        className="absolute z-20"
                                        style={positions[index]}
                                        whileHover={{ 
                                            scale: 1.05, 
                                            rotate: '0deg',
                                            transition: { duration: 0.3 }
                                        }}
                                    >
                                        <Card
                                        title={''} {...item}
                                        className={`backdrop-blur-sm rounded-2xl shadow-xl p-6 w-80 text-sm border border-white/20
                                            hover:shadow-2xl transition-all duration-300 transform`}
                                        style={{
                                            backgroundColor: item.color + '90',
                                            transform: `rotate(${positions[index].rotate})`
                                        }}                                        />
                                    </motion.div>
                                );
                            })}
                        </motion.div>

                        {/* Mobile & Tablet Cards */}
                        <motion.div 
                        className="absolute top-0 left-0 right-0 lg:hidden p-4 space-y-4"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        >
                        {motivation.slice(0, 2).map((item, index) => (
                            <motion.div
                            key={index}
                            variants={cardVariants}
                            className="w-full"
                            >
                            <Card
                                title={''} {...item}
                                className="backdrop-blur-sm rounded-2xl shadow-lg p-4 w-full text-sm border border-white/20"
                                style={{ backgroundColor: item.color + '90' }}                            />
                            </motion.div>
                        ))}
                        </motion.div>

                         {/* Special last card with semi-circle wrap */}
                         <motion.div
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            className="absolute left-1/2 -translate-x-1/2 top-1/2  z-40 w-64 lg:hidden w-full  "
                        >
                            <div
                            className="relative p-6 text-sm shadow-xl border border-white/20 backdrop-blur-sm"
                            style={{
                                backgroundColor: motivation[2].color + '90',
                                borderRadius: '10px 10px ', 
                                clipPath: 'ellipse(95% 70% at 50% 50%)', 
                            }}
                            >
                            <div className="flex items-center space-x-3">
                                {motivation[2].icon}
                                <span>{motivation[2].desc}</span>
                            </div>
                            </div>
                        </motion.div>

                    </div>
                </div>     
            </header>

            {/* Service Cards Section */}
            <div className="py-16 px-4">
                
                <div className="md:hidden flex flex-col items-center space-y-6">
                    <Card
                        title="Track Baby Development"
                        icon={<img src={fetus} alt="Pregnancy Tracking" className="w-12 h-12" />}
                        desc="Monitor your baby's growth week by week with detailed milestones and development updates."
                        className="w-full max-w-sm bg-pink-100 rounded-2xl shadow-lg  p-3"
                    />
                    <Card
                        title="Weekly Tips"
                        icon={<FaLightbulb className="w-12 h-12 text-yellow-500" />}
                        desc="Receive personalized advice and helpful tips tailored to your current trimester."
                        className="w-full max-w-sm bg-yellow-100 rounded-2xl shadow-lg p-3"
                    />
                    <Card
                        title="Nutrition Guide"
                        icon={<img src={food} alt="Nutrition" className="w-12 h-12" />}
                        desc="Get expert nutrition recommendations and meal plans for a healthy pregnancy."
                        className="w-full max-w-sm bg-blue-100 rounded-2xl shadow-lg p-3"
                    />
                </div>

                {/* Tablet and Desktop Layout */}
                <div className="hidden md:flex justify-center items-center relative">
                
                    <Card
                        title="Track Baby Development"
                        icon={<img src={fetus} alt="Pregnancy Tracking" className="w-44 h-44 mx-auto" />}
                        desc="Monitor your baby's growth week by week with detailed milestones and development updates."
                        className="absolute p-2 text-center z-10 w-72 bg-pink-100 rounded-2xl shadow-lg transform rotate-[-8deg] translate-x-[-300px] translate-y-[10px] hover:rotate-[-4deg] hover:translate-y-[-5px] transition-all duration-300 "
                    />

                   
                    <Card
                        title="Weekly Tips"
                        icon={<FaLightbulb className="w-44 h-44 mx-auto text-yellow-500" />}
                        desc="Receive personalized advice and helpful tips tailored to your current trimester."
                        className="relative p-2 text-center z-30 w-72 bg-yellow-100 rounded-2xl shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 "
                    />


                    <Card
                        title="Nutrition Guide"
                        icon={<img src={food} alt="Nutrition" className="w-44 h-40 mx-auto" />}
                        desc="Get expert nutrition recommendations and meal plans for a healthy pregnancy."
                        className="absolute p-2 text-center z-10 w-72 bg-blue-100 rounded-2xl shadow-lg transform rotate-[8deg] translate-x-[300px] translate-y-[10px] hover:rotate-[4deg] hover:translate-y-[-5px] transition-all duration-300 "
                    />
                </div>
            </div>

            {/* Additional Sections */}
            <section className="px-4">
                <motion.div
                    className="max-w-4xl mx-auto text-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                        Your Journey, <span className="text-pink-500">Our Support</span>
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                        Every pregnancy is unique, and every mother deserves personalized care. 
                        Track your progress, get tips, and celebrate each milestone 
                        on your beautiful journey to motherhood.
                    </p>
                    <WeeklyInfo/>
                </motion.div>
            </section>
            <HealthTracker />
        </div>
    </>
    );
};

export default TrackPregnancy;