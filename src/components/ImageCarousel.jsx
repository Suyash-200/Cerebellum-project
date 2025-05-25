import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const images = [
  {
    url: "https://www.cerebellumacademy.com/wp-content/uploads/2025/04/Scam-alert-1400x400-1.webp",
    alt: "Scam Alert",
    link: "#",
  },
  {
    url: "https://www.cerebellumacademy.com/wp-content/uploads/2025/05/22.webp",
    alt: "22",
    link: "https://www.cerebellumacademy.com/mission-neet-pg-ini-cet-45-days/",
  },
  {
    url: "https://www.cerebellumacademy.com/wp-content/uploads/2025/05/23-1.webp",
    alt: "23",
    link: "https://www.cerebellumacademy.com/mission-neet-pg-lap-3-schedule/",
  },
  // Add the rest of your images similarly...
];

export default function ImageCarousel() {
  return (
    <section className="w-full max-w-screen-xl mx-auto p-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
          loop={true}
          slidesPerView={1}
          className="rounded-xl shadow-md overflow-hidden"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <a href={img.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={img.url}
                  alt={img.alt}
                  className="w-full h-auto object-cover"
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
}
