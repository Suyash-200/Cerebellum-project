import React from "react";

const rankers = [
  {
    name: "Dr. Dharmarajan",
    img: "https://www.cerebellumacademy.com/wp-content/uploads/2024/06/Dr.Dharmarajan.webp",
    video: "https://www.youtube.com/watch?v=gcnlxKKMzus",
  },
  {
    name: "Dr. Vedant Karaddi",
    img: "https://www.cerebellumacademy.com/wp-content/uploads/2024/06/Dr.-Vedant-Karaddi-1-1.webp",
    video: "https://www.youtube.com/watch?v=wWGgQo7JSM0",
  },
  {
    name: "Dr. Jaee Milind naik",
    img: "https://www.cerebellumacademy.com/wp-content/uploads/2024/06/Dr.-Jaee-Milind-naik-1-1.webp",
    video: "https://www.youtube.com/watch?v=yBX6Gj8h0OY",
  },
  {
    name: "Dr. Mansi Jaiwal",
    img: "https://www.cerebellumacademy.com/wp-content/uploads/2024/06/Dr.-Mansi-Jaiwal-1-1.webp",
    video: "https://www.youtube.com/watch?v=U8BjlJMdGhw",
  },
  {
    name: "Dr. Aakarsh Jain",
    img: "https://www.cerebellumacademy.com/wp-content/uploads/2024/06/Dr.-Aakarsh-Jain-1.webp",
    video: "https://www.youtube.com/watch?v=-uNMadT2ZDo",
  },
];

const rankers2 = [
  {
    name: "Dr. Geet Joshi",
    img: "https://www.cerebellumacademy.com/wp-content/uploads/2024/06/Dr.-Geet-Joshi-1-1.webp",
    video: "https://www.youtube.com/watch?v=zxvf3095njQ",
  },
  {
    name: "Dr. Shubham Tripathi",
    img: "https://www.cerebellumacademy.com/wp-content/uploads/2024/06/Dr.-Shubham-Tripathi-1-1.webp",
    video: "https://www.youtube.com/watch?v=_gTquD60U6M&t=6s",
  },
  {
    name: "Dr. Aparupa Chattopadhyay",
    img: "https://www.cerebellumacademy.com/wp-content/uploads/2024/06/Dr.-Aparupa-Chattopadhyay-1-1.webp",
    video: "https://www.youtube.com/watch?v=3xQiM3i7UuQ",
  },
  {
    name: "Dr. Pratiksha Bhatia",
    img: "https://www.cerebellumacademy.com/wp-content/uploads/2024/06/Dr.-Pratiksha-Bhatia-1-1.webp",
    video: "https://www.youtube.com/watch?v=ntI9PX-lvU8",
  },
  {
    name: "Dr. Sai Kiran",
    img: "https://www.cerebellumacademy.com/wp-content/uploads/2024/06/Dr.-Sai-Kiran-1-1.webp",
    video: "https://www.youtube.com/watch?v=mGDKHUPU4YQ",
  },
];

export default function RankersList() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Top 10 rankers in INI-CET MAY 2024
      </h2>

      {/* First list */}
      <div className="flex overflow-x-auto space-x-6 mb-10">
        {rankers.map(({ name, img, video }, i) => (
          <a
            key={i}
            href={video}
            target="_blank"
            rel="noopener noreferrer"
            title={name}
            className="flex-shrink-0 w-40 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <img src={img} alt={name} className="w-full h-auto" />
          </a>
        ))}
      </div>

      {/* Second list */}
      <div className="flex overflow-x-auto space-x-6">
        {rankers2.map(({ name, img, video }, i) => (
          <a
            key={i}
            href={video}
            target="_blank"
            rel="noopener noreferrer"
            title={name}
            className="flex-shrink-0 w-40 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <img src={img} alt={name} className="w-full h-auto" />
          </a>
        ))}
      </div>
    </div>
  );
}
