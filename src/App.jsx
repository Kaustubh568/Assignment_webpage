import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Testimonials from "./components/Testimonials/Testimonials";
import Trust from "./components/PartnerDriver/PartnerDriver";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <main className="overflow-x-hidden ">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Testimonials />
      <Trust />
      <Footer />
    </main>
  );
};

export default App;
