import { motion } from "framer-motion";
import logo from "../assets/images/preeggslogo.png"

const Logo = () => {
  return (
    <div>
        <motion.div 
                    className="relative z-30 p-6"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 flex items-center hover:cursor-pointer"  onClick={() => window.location.href = "/home"}>
                        <img src={logo} alt="logo" className="h-9 mr-2"  />
                        <em className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                            Preggs
                        </em>
                        <span className="text-gray-700">Care</span>
                    </h1>
                </motion.div>
    </div>
  )
}

export default Logo