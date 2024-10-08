import React from "react";
import { motion } from "framer-motion";
import "./PartnerDriver.css"; 

const PartnerDriver = () => {
  return (
    <section className="gradient-bg py-20">
      <div className="container mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5}}
          className="text-black-600 font-medium mb-4"
        >
          Drive Your Success with MyFastX
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6}}
          className="text-5xl font-extrabold text-gray-900 mb-6"
        >
          Join Us as a Partner Driver
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto"
        >
          Are you a vehicle owner looking for new opportunities? Join MyFastX
          today and become part of a dynamic network of drivers. With us,
          you’ll enjoy flexible work hours, competitive earnings, and the
          satisfaction of delivering smiles across the city.
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          href="#register"
          className="inline-block bg-black text-white py-3 px-6 rounded-md text-lg font-bold hover:bg-gray-800"
        >
          Register now for just Rs. 999!
        </motion.a>
      </div>
    </section>
  );
};

export default PartnerDriver;

