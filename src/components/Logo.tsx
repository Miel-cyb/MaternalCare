import { motion } from "framer-motion";
import logo from "../assets/images/preeggslogo.png"
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
        <motion.div 
                    className="relative z-30 p-6"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Link to={"/home"} className="text-3xl md:text-4xl font-bold text-gray-800 flex items-center hover:cursor-pointer"  >
                        <img src={logo} alt="logo" className="h-9 mr-2"  />
                        <em className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                            Preggs
                        </em>
                        <span className="text-gray-700">Care</span>
                    </Link>
                </motion.div>
    </div>
  )
}

export default Logo