import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import Icon1 from "../../assets/icon1.png"; 
import Icon2 from "../../assets/icon2.png";
import Icon3 from "../../assets/icon3.png";

const HowItWorks = () => {
  return (
    <section className="py-13 my-18 bg-white">
      <div className="container mx-auto px-4 md:px-0">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-lg font-semibold text-black flex items-center space-x-2 justify-center md:justify-start">
            <span className="border-l-4 border-green-500 pl-2">How It Works</span>
          </h2>
          <h1 className="text-3xl font-extrabold text-black mt-4">
            Simple Steps to Get Started
          </h1>
          <div className="w-16 h-1 bg-green-500 mt-2 mx-auto md:mx-0"></div> 
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-12 relative">
            <div className="absolute top-0 left-5 w-1 bg-gray-200 h-full rounded-md z-0 hidden md:block"></div>
            <div className="relative z-10 flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-white border-2 border-green-300 rounded-full flex items-center justify-center">
                  <img src={Icon1} alt="Step 1" className="w-8 h-8" />
                </div>
              </div>
              <div className="flex-1 bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-green-500">
                  Register Online
                </h3>
                <p className="text-gray-600 mt-2">
                  Fill out our easy online application form and pay the
                  registration fee of Rs. 999.
                </p>
              </div>
            </div>
            <div className="relative z-10 flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-white border-2 border-green-300 rounded-full flex items-center justify-center">
                  <img src={Icon2} alt="Step 2" className="w-8 h-8" />
                </div>
              </div>
              <div className="flex-1 bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-green-500">
                  Get Verified
                </h3>
                <p className="text-gray-600 mt-2">
                  Complete the verification process to ensure you meet our
                  standards.
                </p>
              </div>
            </div>
            <div className="relative z-10 flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-white border-2 border-green-300 rounded-full flex items-center justify-center">
                  <img src={Icon3} alt="Step 3" className="w-8 h-8" />
                </div>
              </div>
              <div className="flex-1 bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-green-500">
                  Start Driving
                </h3>
                <p className="text-gray-600 mt-2">
                  Once approved, start accepting delivery requests and earn
                  money.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full mt-10 md:mt-0 flex justify-center md:justify-end">
            <Player
              autoplay
              loop
              src="https://lottie.host/d41aa292-95bd-4c89-bfd1-8dfff24934d7/bnu9JrheiE.json"
              style={{ height: '400px', width: '400px' }}
              className="md:h-96 md:w-96 lg:h-[600px] lg:w-[600px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
