import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const images = [
  {
    alt: "Dr. Siddhartha",
    src: "https://www.cerebellumacademy.com/wp-content/uploads/2024/07/Dr.-Siddhartha-2.webp",
  },
  {
    alt: "Dr. Harshvardhan",
    src: "https://www.cerebellumacademy.com/wp-content/uploads/2024/07/Dr.-Harshvardhan-2.webp",
  },
  {
    alt: "Dr.Yasmin Shaikh",
    src: "https://www.cerebellumacademy.com/wp-content/uploads/2024/07/Dr.Yasmin-Shaikh-1-2.webp",
  },
  {
    alt: "Dr. Richa",
    src: "https://www.cerebellumacademy.com/wp-content/uploads/2024/07/Dr.-Richa-2.webp",
  },
  {
    alt: "Dr. Ajay Ravi",
    src: "https://www.cerebellumacademy.com/wp-content/uploads/2024/07/Dr.-ajay-Ravi-2.webp",
  },
  {
    alt: "Dr. Shahid",
    src: "https://www.cerebellumacademy.com/wp-content/uploads/2024/07/Dr.-Shahid-2.webp",
  },
  {
    alt: "Dr. Rahul Singhal",
    src: "https://www.cerebellumacademy.com/wp-content/uploads/2024/07/Dr.-Rahul-Singhal-4.webp",
  },
  {
    alt: "Dr. Jhilmil Sharma",
    src: "https://www.cerebellumacademy.com/wp-content/uploads/2024/07/Dr.-Jhilmil-Sharma-2.webp",
  },
  {
    alt: "Dr. Divya Singh",
    src: "https://www.cerebellumacademy.com/wp-content/uploads/2024/07/Dr.-Divya-Singh-2.webp",
  },
  {
    alt: "Dr. Vighnesh C",
    src: "https://www.cerebellumacademy.com/wp-content/uploads/2024/07/Dr.-Vighnesh-C-2.webp",
  },
];

const TopScorersCarousel2 = () => {
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
    <section className="py-4 px-2 bg-white hidden md:block">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-semibold text-center text-[#1F305E] mb-8">Top scorers in FMGE July 2024</h2>
        <Swiper
          modules={[Autoplay]}
          slidesPerView={5}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 10,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          speed={5000}
          breakpoints={{
            768: {
              slidesPerView: 4,
            },
            640: {
              slidesPerView: 2,
            },
          }}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <figure className="rounded overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
    </>
  );
};

export default TopScorersCarousel2;
