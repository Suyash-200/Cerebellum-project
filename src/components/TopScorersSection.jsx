import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const TopScorersSection = () => {
  const firstCarouselImages = [
    { src: "https://www.cerebellumacademy.com/wp-content/uploads/2025/02/Dr.-Kartik.webp", alt: "Dr. Kartik" },
    { src: "https://www.cerebellumacademy.com/wp-content/uploads/2025/02/Dr.-Lavanya.webp", alt: "Dr. Lavanya" },
    { src: "https://www.cerebellumacademy.com/wp-content/uploads/2025/02/Dr.-Vivan.jpg", alt: "Dr. Vivan" },
    { src: "https://www.cerebellumacademy.com/wp-content/uploads/2025/02/Dr.-Pranjal.webp", alt: "Dr. Pranjal" },
    { src: "https://www.cerebellumacademy.com/wp-content/uploads/2025/02/Dr.-Maltesh.webp", alt: "Dr. Maltesh" }
  ];

  const secondCarouselImages = [
    { src: "https://www.cerebellumacademy.com/wp-content/uploads/2025/02/Dr.-Mandhir.webp", alt: "Dr. Mandhir" },
    { src: "https://www.cerebellumacademy.com/wp-content/uploads/2025/02/Dr.-Yash.webp", alt: "Dr. Yash" },
    { src: "https://www.cerebellumacademy.com/wp-content/uploads/2025/02/Dr.-Cindy.webp", alt: "Dr. Cindy" },
    { src: "https://www.cerebellumacademy.com/wp-content/uploads/2025/02/Dr.-Muskan.webp", alt: "Dr. Muskan" },
    { src: "https://www.cerebellumacademy.com/wp-content/uploads/2025/02/Dr.-Aashima.webp", alt: "Dr. Aashima" }
  ];

  const renderCarousel = (images) => (
    <Swiper
      slidesPerView={5}
      spaceBetween={20}
      loop={true}
      autoplay={{ delay: 10, disableOnInteraction: true }}
      breakpoints={{
        320: { slidesPerView: 3 },
        768: { slidesPerView: 5 }
      }}
    >
      {images.map((img, idx) => (
        <SwiperSlide key={idx}>
          <img
            src={img.src}
            alt={img.alt}
            className="rounded-lg shadow-lg object-cover w-full"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );

  return (
    <>
    <section className="w-full">
      <div className="w-full">
        <div className="w-full">
          <div className="w-full">
            <img
              src="https://www.cerebellumacademy.com/wp-content/uploads/2024/07/dhanBorderL.png"
              alt="Border line"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
    <section className="bg-white py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-6 text-[#1F305E]">
        Top scorers in FMGE January 2025
      </h2>
      <div className="mb-6">
        {renderCarousel(firstCarouselImages)}
      </div>
      <div>
        {renderCarousel(secondCarouselImages)}
      </div>
    </section>
    </>
  );
};

export default TopScorersSection;
