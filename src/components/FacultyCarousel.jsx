import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const FacultyCarousel = () => {
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);

  const faculties = [
    {
      name: "Dr. Gobind Rai Garg",
      image: "https://www.cerebellumacademy.com/wp-content/uploads/2025/03/Dr.-Gobind-Rai-Garg.webp",
      link: "/dr-gobind-rai-garg"
    },
    {
      name: "Dr. Vivek Jain",
      image: "https://www.cerebellumacademy.com/wp-content/uploads/2025/03/Dr.-Vivek-Jain.webp",
      link: "/dr-vivek-jain"
    },
    {
      name: "Dr. Zainab Vora",
      image: "https://www.cerebellumacademy.com/wp-content/uploads/2025/03/Dr.-Zainab-Vora.webp",
      link: "/dr-zainab-vora"
    },
    {
      name: "Dr. Sparsh Gupta",
      image: "https://www.cerebellumacademy.com/wp-content/uploads/2025/03/Dr.-Sparsh-Gupta.jpg",
      link: "/dr-sparsh-gupta"
    },
    {
      name: "Dr. Praveen Tripathi",
      image: "https://www.cerebellumacademy.com/wp-content/uploads/2025/03/Dr.-Praveen-Tripathi.webp",
      link: "/dr-praveen-tripathi"
    },
    {
      name: "Dr. Dilip Kumar",
      image: "https://www.cerebellumacademy.com/wp-content/uploads/2025/03/Dr.-Dilip-Kumar.webp",
      link: "/dr-dilip-kumar"
    },
    {
      name: "Dr. Amrit Nasta",
      image: "https://www.cerebellumacademy.com/wp-content/uploads/2025/03/Dr.-Amrit-Nasta.webp",
      link: "/dr-amrit-nasta"
    },
    {
      name: "Dr. Raina Chawla",
      image: "https://www.cerebellumacademy.com/wp-content/uploads/2025/03/Dr.-Raina-Chawla.webp",
      link: "/dr-raina-chawla"
    },
    {
      name: "Dr. Anand Bhatia",
      image: "https://www.cerebellumacademy.com/wp-content/uploads/2025/03/Dr.-Anand-Bhatia.webp",
      link: "/dr-anand-bhatia"
    },
    {
      name: "Dr. Shrikant Verma",
      image: "https://www.cerebellumacademy.com/wp-content/uploads/2025/03/Dr.-Shrikant-Verma.webp",
      link: "/dr-shrikant-verma"
    }
  ];

  const CARD_WIDTH = 215;

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      if (carouselRef.current) {
        const container = carouselRef.current;
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: CARD_WIDTH, behavior: 'smooth' });
        }
      }
    }, 3000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const scrollLeft = () => {
    stopAutoSlide();
    carouselRef.current?.scrollBy({ left: -CARD_WIDTH, behavior: 'smooth' });
    startAutoSlide();
  };

  const scrollRight = () => {
    stopAutoSlide();
    carouselRef.current?.scrollBy({ left: CARD_WIDTH, behavior: 'smooth' });
    startAutoSlide();
  };

  return (
    <section className="bg-white py-12 px-4 hidden md:block">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="max-w-4xl mx-auto mb-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-[#1F305E]"
          >
            Cerebellum Legendary Faculties
          </motion.h2>
        </div>

        <div className="relative">
          <button 
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Previous faculty"
          >
            <FaChevronLeft className="text-gray-700" />
          </button>
          
          <button 
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Next faculty"
          >
            <FaChevronRight className="text-gray-700" />
          </button>

          <div 
            ref={carouselRef}
            className="overflow-hidden scroll-smooth"
            onMouseEnter={stopAutoSlide}
            onMouseLeave={startAutoSlide}
          >
            <div className="flex space-x-5 py-4">
              {[...faculties, ...faculties].map((faculty, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: (index % faculties.length) * 0.05 }}
                  viewport={{ once: true }}
                  className="flex-shrink-0 w-48"
                >
                  <Link 
                    to={faculty.link} 
                    className="block group"
                  >
                    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                      <img 
                        src={faculty.image} 
                        alt={faculty.name}
                        className="w-full h-48 object-cover"
                        loading="lazy"
                      />
                      <div className="p-4 text-center">
                        <h3 className="font-medium text-gray-800">{faculty.name}</h3>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacultyCarousel;
