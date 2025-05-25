import React from 'react';
import { FaPlay } from 'react-icons/fa';

const RankersSection = () => {
  const firstRowRankers = [
    {
      name: "Dr. Dharmarajan",
      image: "https://www.cerebellumacademy.com/wp-content/uploads/2024/06/Dr.Dharmarajan.webp",
      video: "https://www.youtube.com/watch?v=gcnlxKKMzus"
    },
    {
      name: "Dr. Vedant Karaddi",
      image: "https://www.cerebellumacademy.com/wp-content/uploads/2024/06/Dr.-Vedant-Karaddi-1-1.webp",
      video: "https://www.youtube.com/watch?v=wWGgQo7JSM0"
    },
    {
      name: "Dr. Jaee Milind naik",
      image: "https://www.cerebellumacademy.com/wp-content/uploads/2024/06/Dr.-Jaee-Milind-naik-1-1.webp",
      video: "https://www.youtube.com/watch?v=yBX6Gj8h0OY"
    },
    {
      name: "Dr. Mansi Jaiwal",
      image: "https://www.cerebellumacademy.com/wp-content/uploads/2024/06/Dr.-Mansi-Jaiwal-1-1.webp",
      video: "https://www.youtube.com/watch?v=U8BjlJMdGhw"
    },
    {
      name: "Dr. Aakarsh Jain",
      image: "https://www.cerebellumacademy.com/wp-content/uploads/2024/06/Dr.-Aakarsh-Jain-1.webp",
      video: "https://www.youtube.com/watch?v=-uNMadT2ZDo"
    }
  ];

  const secondRowRankers = [
    {
      name: "Dr. Geet Joshi",
      image: "https://www.cerebellumacademy.com/wp-content/uploads/2024/06/Dr.-Geet-Joshi-1-1.webp",
      video: "https://www.youtube.com/watch?v=zxvf3095njQ"
    },
    {
      name: "Dr. Shubham Tripathi",
      image: "https://www.cerebellumacademy.com/wp-content/uploads/2024/06/Dr.-Shubham-Tripathi-1-1.webp",
      video: "https://www.youtube.com/watch?v=_gTquD60U6M&t=6s"
    },
    {
      name: "Dr. Aparupa Chattopadhyay",
      image: "https://www.cerebellumacademy.com/wp-content/uploads/2024/06/Dr.-Aparupa-Chattopadhyay-1-1.webp",
      video: "https://www.youtube.com/watch?v=3xQiM3i7UuQ"
    },
    {
      name: "Dr. Rohit Saboo",
      image: "https://www.cerebellumacademy.com/wp-content/uploads/2024/06/Dr.-Rohit-Saboo-1-1.webp",
      video: "https://www.youtube.com/watch?v=l9FqTVUYcRE"
    },
    {
      name: "Dr. Ojasvini bali",
      image: "https://www.cerebellumacademy.com/wp-content/uploads/2024/06/Dr.-Ojasvini-bali-1-1.webp",
      video: "https://www.youtube.com/watch?v=0sjJrz9y-7A"
    }
  ];

  return (
    <section className="bg-white py-12 hidden md:block">
      <div className="container mx-auto px-4">
        <div className="w-full">
          <div className="relative">
            {/* Title Section */}
            <section className="mb-8">
              <div className="container mx-auto">
                <div className="w-full text-center">
                  <h2 className="text-4xl font-semibold text-center text-[#1F305E] mb-8">
                    Top 10 rankers in INI-CET MAY 2024
                  </h2>
                </div>
              </div>
            </section>

            {/* First Row of Rankers */}
            <div className="mb-8">
              <div className="relative overflow-hidden">
                <div className="flex space-x-5 animate-[scroll_25s_linear_infinite] hover:animation-pause">
                  {firstRowRankers.map((ranker, index) => (
                    <div key={index} className="flex-shrink-0 w-[220px] group relative">
                      <a 
                        href={ranker.video} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                      >
                        <figure className="relative">
                          <img 
                            src={ranker.image} 
                            alt={ranker.name} 
                            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="bg-white p-3 rounded-full text-red-600">
                              <FaPlay size={20} />
                            </div>
                          </div>
                        </figure>
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                          <h3 className="text-white font-medium text-sm truncate">{ranker.name}</h3>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Second Row of Rankers */}
            <div>
              <div className="relative overflow-hidden">
                <div className="flex space-x-5 animate-[scroll_25s_linear_infinite_reverse] hover:animation-pause">
                  {secondRowRankers.map((ranker, index) => (
                    <div key={index} className="flex-shrink-0 w-[220px] group relative">
                      <a 
                        href={ranker.video} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                      >
                        <figure className="relative">
                          <img 
                            src={ranker.image} 
                            alt={ranker.name} 
                            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="bg-white p-3 rounded-full text-red-600">
                              <FaPlay size={20} />
                            </div>
                          </div>
                        </figure>
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                          <h3 className="text-white font-medium text-sm truncate">{ranker.name}</h3>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RankersSection;