import React from "react";
import Logo from "../../assets/logo.png";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <div className="container py-5 flex items-center justify-between">
        <div>
          <img src={Logo} alt="" className="w-48" />
        </div>
        <div>
          <button className="bg-black text-white border border-gray-400 px-4 py-2 rounded-lg hover:bg-primary hover:text-white transform duration-300 mx-4">
            {" "}
            SignUp 
          </button>
          <button className="bg-black text-white border border-gray-400 px-4 py-2 rounded-lg hover:bg-primary hover:text-white transform duration-300 mx-4">
            {" "}
            Login
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
