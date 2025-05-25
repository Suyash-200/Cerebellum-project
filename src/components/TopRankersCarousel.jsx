import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const topRankers1 = [
  {
    img: 'https://www.cerebellumacademy.com/wp-content/uploads/2024/11/Dr.-Sayani-Rank-5-1.webp',
    alt: 'Dr. Sayani Rank 5',
  },
  {
    img: 'https://www.cerebellumacademy.com/wp-content/uploads/2024/11/Dr.-Akhil-Tambi-Rank-6-1.webp',
    alt: 'Dr. Akhil Tambi Rank 6',
  },
  {
    img: 'https://www.cerebellumacademy.com/wp-content/uploads/2024/11/Dr.-Rohan-Purohit-Rank-7-1.webp',
    alt: 'Dr. Rohan Purohit Rank 7',
  },
  {
    img: 'https://www.cerebellumacademy.com/wp-content/uploads/2024/11/Dr.-Vaibhav-Garg-Rank-12-1.webp',
    alt: 'Dr. Vaibhav Garg Rank 12',
  },
  {
    img: 'https://www.cerebellumacademy.com/wp-content/uploads/2024/11/Dr.-Naitik-kavdia-Rank-13-1.webp',
    alt: 'Dr. Naitik Kavdia Rank 13',
  },
];

const topRankers2 = [
  {
    img: 'https://www.cerebellumacademy.com/wp-content/uploads/2024/11/Dr.-Mayank-Singh-Rank-17.webp',
    alt: 'Dr. Mayank Singh Rank 17',
  },
  {
    img: 'https://www.cerebellumacademy.com/wp-content/uploads/2024/11/Dr.-Parijat-Kumar-Rank-19.webp',
    alt: 'Dr. Parijat Kumar Rank 19',
  },
  {
    img: 'https://www.cerebellumacademy.com/wp-content/uploads/2024/11/Dr.-Abhidi-Sethi-Rank-22.webp',
    alt: 'Dr. Abhidi Sethi Rank 22',
  },
  {
    img: 'https://www.cerebellumacademy.com/wp-content/uploads/2024/11/Dr.-Noble-Rank-28.webp',
    alt: 'Dr. Noble Rank 28',
  },
  {
    img: 'https://www.cerebellumacademy.com/wp-content/uploads/2024/11/Dr.-Ronak-Rank-29.webp',
    alt: 'Dr. Ronak Rank 29',
  },
];

const ImageCarousel = ({ slides }) => (
  <Swiper
    modules={[Autoplay]}
    spaceBetween={20}
    slidesPerView={5}
    autoplay={{ delay: 1000, disableOnInteraction: false }}
    breakpoints={{
      320: { slidesPerView: 2 },
      640: { slidesPerView: 3 },
      1024: { slidesPerView: 5 },
    }}
    loop
  >
    {slides.map((slide, index) => (
      <SwiperSlide key={index}>
        <img src={slide.img} alt={slide.alt} className="rounded-lg shadow-md w-full h-auto object-cover" />
      </SwiperSlide>
    ))}
  </Swiper>
);

const TopRankersCarousel = () => {
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
    <section className="bg-white py-5">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center text-[#1F305E] mb-8">Top 10 rankers in INI-CET Nov 2024</h2>
        <div className="mb-8">
          <ImageCarousel slides={topRankers1} />
        </div>
        <div>
          <ImageCarousel slides={topRankers2} />
        </div>
      </div>
    </section>
    </>
  );
};

export default TopRankersCarousel;
