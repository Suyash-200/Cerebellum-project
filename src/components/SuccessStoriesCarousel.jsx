import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const successStories = [
  { alt: "Dr. Vaibhav garg", src: "https://www.cerebellumacademy.com/wp-content/uploads/2024/08/Dr.-Vaibhav-garg-min.png" },
  { alt: "Dr. Naisargee", src: "https://www.cerebellumacademy.com/wp-content/uploads/2024/08/Dr.-Naisargee-min-1.png" },
  { alt: "Dr. Sharanu T S", src: "https://www.cerebellumacademy.com/wp-content/uploads/2024/09/Dr.-Sharanu-T-S.webp" },
  { alt: "Dr. Shivani", src: "https://www.cerebellumacademy.com/wp-content/uploads/2024/08/Dr.-sHIVANI-min.png" },
  { alt: "Dr. Rishita", src: "https://www.cerebellumacademy.com/wp-content/uploads/2024/09/Dr.-Rishita-1.png" },
  { alt: "Dr. Himanshu", src: "https://www.cerebellumacademy.com/wp-content/uploads/2024/08/Dr.-himanshu-min.png" },
  { alt: "Dr. Deepika Singh", src: "https://www.cerebellumacademy.com/wp-content/uploads/2024/08/Dr.-Deepika-Singh-min-1.png" },
  { alt: "Dr. Naman Kamboj", src: "https://www.cerebellumacademy.com/wp-content/uploads/2024/08/Dr.-Naman-Kamboj-min.png" },
  { alt: "Dr. Abhineet Mathur", src: "https://www.cerebellumacademy.com/wp-content/uploads/2024/08/Dr.-Abhineet-mathur-min-1.png" },
  { alt: "Dr. Soumya V", src: "https://www.cerebellumacademy.com/wp-content/uploads/2024/08/Dr.-Soumya-V-min.png" },
  { alt: "Dr. Brahmjot Kaur", src: "https://www.cerebellumacademy.com/wp-content/uploads/2024/08/Dr.-Brahmjot-kaur-min.png" },
  { alt: "Dr. Zainab", src: "https://www.cerebellumacademy.com/wp-content/uploads/2024/08/Dr.-Zainab-min.png" },
  { alt: "Dr. Shuvadeep", src: "https://www.cerebellumacademy.com/wp-content/uploads/2024/08/Dr.-Shuvadeep-min.png" },
  { alt: "Dr. Yash Gupta", src: "https://www.cerebellumacademy.com/wp-content/uploads/2024/08/Dr.-yash-gupta-min.png" },
  { alt: "Dr. Rachana", src: "https://www.cerebellumacademy.com/wp-content/uploads/2024/08/Dr.-rachana-min.png" },
];

const SuccessStoriesCarousel = () => {
  return (
    <section className="w-full bg-white p-2">
      {/* Clickable Text Section */}
      <div
        onClick={() => window.open("https://www.cerebellumacademy.com/fmge-result-july-2024/", "_blank")}
        role="link"
        tabIndex={0}
        onKeyPress={(e) => { if (e.key === 'Enter') window.open("https://www.cerebellumacademy.com/fmge-result-july-2024/", "_blank") }}
        className="cursor-pointer p-4 my-2 text-center text-2xl font-semibold text-white select-none bg-[#081d7e]"
        aria-label="Check Out Our NEET PG Success Stories!"
      >
        ✨ From Dreams to Reality ✨ Check Out Our NEET PG Success Stories!
      </div>

      {/* Carousel */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={25}
        slidesPerView={10}
        loop={true}
        autoplay={{
          delay: 10,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        speed={5000}
        breakpoints={{
          320: { slidesPerView: 2 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 10 },
        }}
        className="w-full py-6"
      >
        {successStories.map((story, index) => (
          <SwiperSlide key={index} className="w-[102.5px]">
            <figure className="overflow-hidden">
              <img
                src={story.src}
                alt={story.alt}
                className="object-contain w-full h-auto"
                loading="lazy"
              />
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SuccessStoriesCarousel;
