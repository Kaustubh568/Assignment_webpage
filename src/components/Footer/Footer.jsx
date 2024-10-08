import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import logo from "../../assets/ioo.png"


const Footer = () => {
  return (
    <footer className="relative bg-black text-white py-16">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-10">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">MyFast<span className="text-green-600">X</span></h1>{/*<img src={logo} alt="logo"  />*/}
          <p className="text-gray-400">
            MyFastX is a leading logistics platform that provides hyper-local, on-demand delivery solutions for individuals and businesses. Whether you need a delivery boy for your shop or to ship items within the city, MyFastX is your trusted partner.
          </p>
          <p className="text-gray-400">
            With a mission to revolutionize logistics through innovation and technology, MyFastX is committed to providing seamless, end-to-end delivery solutions that exceed customer expectations.
          </p>
          <div className="flex items-center space-x-2 text-green-400">
            <FaMapMarkerAlt />
            <p>Nayagon, Nimi Vihar, Sector 89, Noida Phase 02, Noida</p>
          </div>
          <div className="flex items-center space-x-2 text-green-400">
            <FaEnvelope />
            <p>care@myfastx.com</p>
          </div>
          <div className="flex items-center space-x-2 text-green-400">
            <FaPhoneAlt />
            <p>+91 8961310988</p>
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-bold">Company</h2>
          <ul className="space-y-2 text-gray-400">
            <li>About Us</li>
            <li>What We Do?</li>
            <li>Investors</li>
            <li>Press Release</li>
            <li>Careers</li>
            <li>Pricing Details</li>
          </ul>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-bold">Policies</h2>
          <ul className="space-y-2 text-gray-400">
            <li>Terms And Conditions</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
            <li>Fraud Disclaimer</li>
          </ul>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-bold">Help</h2>
          <ul className="space-y-2 text-gray-400">
            <li>Restricted Items</li>
            <li>Parcel Size and Weight Guide</li>
            <li>Packaging Guide</li>
          </ul>

          <h2 className="text-xl font-bold mt-4">Support</h2>
          <ul className="space-y-2 text-gray-400">
            <li>FAQ</li>
            <li>Customer Care</li>
            <li>Driver Terms and Conditions</li>
            <li>Packaging Instructions</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-8">
        <div className="container mx-auto text-center text-gray-400">
          <h3 className="font-bold mb-4">Our Presence</h3>
          <p className="mb-4">
            Delhi | Noida | Greater Noida | Ghaziabad | Gurugram | Faridabad | Bahadurgarh | Kolkata
          </p>
          <p className="text-sm">
            © 2024 MYFASTX TECHNOLOGIES PVT LTD. All Rights Reserved CIN: U52219UP2023PTC192260
          </p>
        </div>
      </div>
      <a
        href="https://wa.me/918961310988"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 left-8 bg-green-500 p-4 rounded-full text-white shadow-lg"
        aria-label="Chat with us on WhatsApp"
      >
        <FaWhatsapp className="text-3xl" />
      </a>
    </footer>
  );
};

export default Footer;
