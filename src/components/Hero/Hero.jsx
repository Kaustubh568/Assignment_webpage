import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import dollar from '../../assets/dollar.png'
import flexz from '../../assets/flexz.png'
import ladka from '../../assets/ladka.png'
import graph from '../../assets/graph.png'

const Hero = () => {
  return (
    <section>
    <div className="container mx-auto py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  
        <div className="bg-gray-100 p-8 rounded-lg shadow-md relative">
          <Player
            autoplay
            loop
            src="https://lottie.host/c678ffc0-0544-480f-9f75-08f3a26c50e2/8YyxSezV86.json"
            style={{ height: '300px', width: '300px' }} 
          />
          <h2 className="text-3xl font-bold text-black mb-4">
            Welcome to MyFast<span className="text-green-600">X Partner</span>
          </h2>
          <p className="text-xl text-green-600 mb-4">
            Quick & Reliable Delivery and Logistics Solution
          </p>
          <p className="text-gray-400">
            At MyFastX, we are revolutionizing the delivery and logistics industry by providing swift, dependable services to our clients. Our mission is to ensure every package reaches its destination on time, every time.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
  
          <div className="bg-gray-100 p-8 rounded-lg shadow-md relative">
            <div className="absolute top-0 left-0 w-full h-16 bg-no-repeat bg-top opacity-80" style={{ backgroundImage: "url('/diagonal_pattern.png')" }}></div>
            <div className="relative z-10">
              <h3 className="text-green-600 text-xl font-semibold mb-2">
                Drive Your Success with MyFastX
              </h3>
              <h2 className="text-3xl font-bold mb-4">Join Us as a Partner Driver</h2>
              <p className="text-gray-400 mb-6">
                Are you a vehicle owner looking for new opportunities? Join MyFastX today and become part of a dynamic network of drivers. With us, you’ll enjoy flexible work hours, competitive earnings, and the satisfaction of delivering smiles across the city.
              </p>
              <button className="bg-black text-white font-semibold py-3 px-6 rounded-lg">
                Register now for just Rs. 999!
              </button>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-green-100 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-green-300 rounded-full p-4 mb-4">
                <img src={dollar} alt="Income Icon" className="h-8 w-8" />
              </div>
              <h5 className="text-lg font-semibold mb-2 text-green-600">Reliable Income</h5>
              <p className="text-gray-600">Earn a steady income with consistent delivery requests.</p>
            </div>
            <div className="bg-green-100 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-green-300 rounded-full p-4 mb-4">
                <img src={flexz} alt="Schedule Icon" className="h-8 w-8" />
              </div>
              <h5 className="text-lg font-semibold mb-2 text-green-600">Flexible Schedule</h5>
              <p className="text-gray-600">Choose your working hours and balance your personal life.</p>
            </div>
            <div className="bg-green-100 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-green-300 rounded-full p-4 mb-4">
                <img src={ladka} alt="Support Icon" className="h-8 w-8" />
              </div>
              <h5 className="text-lg font-semibold mb-2 text-green-600">Support</h5>
              <p className="text-gray-600">Access our dedicated support team whenever you need assistance.</p>
            </div>
            <div className="bg-green-100 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-green-300 rounded-full p-4 mb-4">
                <img src={graph} alt="Growth Icon" className="h-8 w-8" />
              </div>
              <h5 className="text-lg font-semibold mb-2 text-green-500">Growth Opportunities</h5>
              <p className="text-gray-600">Advance your career with regular training and development programs.</p>
            </div>
          </div>
  
        </div>
  
      </div>
    </div>
  </section>
  

  );
};

export default Hero;
