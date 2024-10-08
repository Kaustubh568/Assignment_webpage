import React, { useState } from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import photo from "../../assets/iii.png";

const testimonialsData = [
  {
    id: 1,
    name: "Kaustubh Chandel",
    location: "Kolkata, West Bengal",
    image: photo,
    quote: "Joining MyFastX has been a game-changer for me. The flexible hours and reliable income have made my life so much easier.",
    rating: 5,
  },
  {
    id: 2,
    name: "Shikha Yadav",
    location: "Mumbai, Maharashtra",
    image: photo,
    quote: "The platform provided me the opportunity to expand my delivery service, which increased my earnings.",
    rating: 5,
  },
  {
    id: 3,
    name: "Akhilesh Yadav",
    location: "Delhi, India",
    image: photo,
    quote: "Using MyFastX has been very smooth, and I appreciate how the service is reliable and quick.",
    rating: 4,
  },
];

const faqsData = [
  {
    id: 1,
    question: "What type of vehicles are eligible?",
    answer: "Two-wheelers and four-wheelers are eligible for deliveries."
  },
  {
    id: 2,
    question: "How do I get paid?",
    answer: "You will receive payments directly into your registered bank account."
  },
  {
    id: 3,
    question: "What areas does MyFastX operate in?",
    answer: "MyFastX operates across major metropolitan cities in India."
  },
  {
    id: 4,
    question: "What type of vehicles are eligible?",
    answer: "Two-wheelers and four-wheelers are eligible for deliveries."
  },
  {
    id: 5,
    question: "How do I get paid?",
    answer: "You will receive payments directly into your registered bank account."
  },
];

const TestimonialPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openFAQ, setOpenFAQ] = useState(null); 

  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? testimonialsData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex === testimonialsData.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id); 
  };

  const currentTestimonial = testimonialsData[currentIndex];

  return (
    <section className="py-16 my-20 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="mb-4">
              <h2 className="text-lg font-semibold text-black flex items-center space-x-2">
                <span className="border-l-4 border-green-500 pl-2">
                  What our partner says
                </span>
              </h2>
            </div>
            <h1 className="text-3xl font-extrabold text-black mt-4 relative">
              Testimonials
              <span className="block w-20 h-1 bg-green-500 mt-2 absolute"></span>
            </h1>
            <p className="mt-4 text-gray-600">
              At MyFastX, our commitment to excellence is reflected in the feedback from our valued customers. Here's what they have to say about their experiences with our quick and reliable delivery and logistics services.
            </p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg shadow-md relative">
            <div className="flex items-center space-x-4">
              <img
                src={currentTestimonial.image}
                alt={currentTestimonial.name}
                className="w-14 h-14 rounded-full"
              />
              <div>
                <h3 className="text-lg font-semibold text-black">
                  {currentTestimonial.name}
                </h3>
                <p className="text-gray-500 text-sm">{currentTestimonial.location}</p>
              </div>
            </div>
            <div className="mt-4 text-gray-600 relative">
              <FaQuoteLeft className="text-gray-300 absolute left-0 top-0 text-2xl" />
              <p className="ml-8">{currentTestimonial.quote}</p>
            </div>
            <div className="mt-4 flex items-center space-x-1 text-yellow-500">
              {[...Array(currentTestimonial.rating)].map((_, index) => (
                <FaStar key={index} />
              ))}
            </div>
            <div className="flex items-center justify-between mt-6">
              <div className="flex space-x-2">
                {testimonialsData.map((_, index) => (
                  <span
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      index === currentIndex ? "bg-green-500" : "bg-gray-300"
                    } cursor-pointer`}
                    onClick={() => handleDotClick(index)}
                  ></span>
                ))}
              </div>
              <div className="flex space-x-2">
                <button
                  className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-200"
                  onClick={handlePrev}
                >
                  <MdArrowBackIos className="text-gray-400" />
                </button>
                <button
                  className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-200"
                  onClick={handleNext}
                >
                  <MdArrowForwardIos className="text-gray-400" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="my-20">
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-black flex items-center space-x-2">
              <span className="border-l-4 border-green-500 pl-2">
                Join the MyFastX Community Today!
              </span>
            </h2>
          </div>
          <h1 className="text-3xl font-extrabold text-black mt-4 relative">
            Ready to Get Started?
            <span className="block w-20 h-1 bg-green-500 mt-2 absolute"></span>
          </h1>
          <p className="mt-4 text-gray-600">
            Don’t miss out on this incredible opportunity to be part of a leading delivery and logistics platform. Sign up now for just <span className="text-green-600">Rs.999</span> and start driving your way to success with MyFastX!
          </p>
          <button className="bg-black text-white py-2 px-4 rounded-lg mt-4">
            Register Now
          </button>
          <div className="mt-6">
            <p>For more information, Contact us at:</p>
            <div className="flex items-center mt-4 space-x-4">
              <FaPhoneAlt className="text-green-500" />
              <p>+91-XXXXX XXXXX</p>
            </div>
            <div className="flex items-center mt-4 space-x-4">
              <FaEnvelope className="text-green-500" />
              <p>support@myfastx.com</p>
            </div>
          </div>
        </div>
        <div className="my-20">
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-black flex items-center space-x-2">
              <span className="border-l-4 border-green-500 pl-2">
                Frequently Asked Questions
              </span>
            </h2>
          </div>
          <h1 className="text-3xl font-extrabold text-black mt-4 relative">
            Got Questions? We’ve Got Answers!
            <span className="block w-20 h-1 bg-green-500 mt-2 absolute"></span>
          </h1>
          <ul className="mt-4 space-y-4">
            {faqsData.map((faq) => (
              <li
                key={faq.id}
                className="bg-white p-4 shadow-md rounded-lg cursor-pointer"
                onClick={() => toggleFAQ(faq.id)}
              >
                <div className="flex justify-between items-center">
                  {faq.question}
                  <MdArrowForwardIos className="text-gray-400" />
                </div>
                {openFAQ === faq.id && (
                  <p className="mt-4 text-gray-600">{faq.answer}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TestimonialPage;
