import dish from "../assets/images/mealBowl.png"
import dish2 from "../assets/images/dish2.png"
import dish3 from "../assets/images/dish3.png"
import dish4 from "../assets/images/dish4.png"
import dish5 from "../assets/images/dish5.png"
import dish6 from "../assets/images/dish6.png"
import dish7 from "../assets/images/dish7.png"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from 'framer-motion'

const meals = [
  {
    id: 1,
    src: dish,
    alt: "Protein bowl",
    name: "Protein Bowl",
    description: "Packed with lean meats, grains, and greens for lasting energy.",
  },
  {
    id: 2,
    src: dish2,
    alt: "Fresh salad",
    name: "Fresh Salad",
    description: "Crunchy, colorful veggies with healthy fats and dressings.",
  },
  {
    id: 3,
    src: dish3,
    alt: "Low-carb meal",
    name: "Low-Carb Plate",
    description: "A delicious low-carb meal for mindful eating and balance.",
  },
  {
    id: 4,
    src: dish4,
    alt: "Dinner",
    name: "Dinner",
    description: "Light for the night",
  },
  {
    id: 5,
    src: dish5,
    alt: "Mediterranean meal",
    name: "Mediterranean Delight",
    description: "Heart-healthy oils, grains, and fresh veggies.",
  },
  {
    id: 6,
    src: dish6,
    alt: "Lunch",
    name: "Enriched Lunch",
    description: "Warm and comforting with slow-cooked nutrients.",
  },
  {
    id: 7,
    src: dish7,
    alt: "Rich Dish",
    name: "Rich Dish",
    description: "Plant-powered wraps with fiber and flavor.",
  },
]

export default function Meals() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % meals.length)
    }, 4500);

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative bg-gradient-to-br from-pink-50 via-red-50 to-rose-50 pb-20 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-pink-100/30 rounded-full blur-xl"></div>
        <div className="absolute top-32 right-20 w-24 h-24 bg-red-100/40 rounded-full blur-lg"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-rose-100/20 rounded-full blur-2xl"></div>
      </div>

      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,128L48,133.3C96,139,192,149,288,160C384,171,480,181,576,165.3C672,149,768,107,864,96C960,85,1056,107,1152,133.3C1248,160,1344,192,1392,208L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div className="mx-auto flex flex-col lg:flex-row justify-between items-center max-w-7xl mt-32 px-6 lg:px-8 relative z-10 gap-12">
        <div className="text-center lg:text-left lg:max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-pink-100 text-pink-700 font-semibold text-sm rounded-full mb-4">
              Expert Nutrition Guidance
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl mb-6 font-bold text-slate-800 leading-tight"
          >
            Pregnancy Nutrition Guidance
            <br />
            <em className="text-pink-600 font-light italic">from Mayo Clinic</em>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-slate-600 text-lg lg:text-xl leading-relaxed mb-8"
          >
            Learn how to nourish yourself and your baby with expert-backed tips on
            balanced meals, key nutrients, and safe food choices.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-start space-x-2 mb-4"
          >
            {meals.map((_, i) => (
              <div
                key={i}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index 
                    ? 'w-8 bg-pink-500' 
                    : 'w-2 bg-pink-200'
                }`}
              />
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center lg:justify-start gap-3"
          >
            {['Balanced Nutrition', 'Safe Food Choices', 'Essential Vitamins', 'Meal Planning'].map((feature) => (
              <span 
                key={feature}
                className="px-3 py-1 bg-white/60 backdrop-blur-sm text-slate-700 text-sm font-medium rounded-full border border-white/40"
              >
                {feature}
              </span>
            ))}
          </motion.div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-red-200/30 to-rose-200/30 rounded-full transform scale-110 blur-xl"></div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative bg-white/40 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/30 max-w-sm mx-auto"
          >
            <div className="relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={meals[index].id}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ 
                    duration: 0.8,
                    ease: "easeInOut"
                  }}
                >
                  <img
                    src={meals[index].src}
                    alt={meals[index].alt}
                    className="w-full h-80 object-contain drop-shadow-lg"
                  />
                  <div className="mt-6 text-center">
                    <h3 className="text-xl font-bold text-slate-800 mb-2">
                      {meals[index].name}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {meals[index].description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <motion.div 
              className="absolute -top-4 -right-4 bg-pink-500 text-white px-3 py-2 rounded-full text-xs font-semibold shadow-lg"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              Nutritious
            </motion.div>
          </motion.div>

          <motion.div 
            className="absolute -top-6 -left-6 w-12 h-12 bg-red-400/20 rounded-full flex items-center justify-center"
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              rotate: { duration: 8, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <div className="w-6 h-6 bg-pink-500 rounded-full"></div>
          </motion.div>

          <motion.div 
            className="absolute -bottom-4 -right-8 w-8 h-8 bg-rose-400/30 rounded-full"
            animate={{ 
              y: [0, -10, 0],
              x: [0, 5, 0]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 1
            }}
          ></motion.div>
        </div>
      </div>
    </div>
  );
}