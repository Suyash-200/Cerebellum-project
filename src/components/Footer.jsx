import React from "react";
import {
  FaYoutube,
  FaInstagram,
  FaTelegram,
  FaFacebook,
  FaXTwitter,
  FaLinkedin,
  FaLocationDot,
} from "react-icons/fa6";
import { FaAngleRight, FaPhoneSquareAlt, FaHandsHelping } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const links = [
    { label: "Home", href: "https://www.cerebellumacademy.com/" },
    { label: "About Us", href: "https://www.cerebellumacademy.com/about-us/" },
    {
      label: "Cerebellum Teachers",
      href: "https://www.cerebellumacademy.com/cerebellum-teachers/",
    },
    { label: "FAQs", href: "https://www.cerebellumacademy.com/faq/" },
    {
      label: "Privacy Policy",
      href: "https://www.cerebellumacademy.com/privacy-policy/",
    },
    {
      label: "Terms and Conditions",
      href: "https://www.cerebellumacademy.com/terms-and-conditions/",
    },
    {
      label: "Cancellation Policy",
      href: "https://www.cerebellumacademy.com/cancellation-policy/",
    },
    {
      label: "Contact Us",
      href: "https://www.cerebellumacademy.com/contact-us/",
    },
    {
      label: "Important Polices",
      href: "https://www.cerebellumacademy.com/important-polices/",
    },
    {
      label: "Fair Usage Policy",
      href: "https://www.cerebellumacademy.com/device-usage-policy/",
    },
  ];

  return (
    <div className="bg-[#101d3] text-white w-full px-4 py-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row flex-wrap justify-between text-[14px] md:text-[15px] lg:text-base">
        <div className="w-full max-w-[300px] md:max-w-[25%] p-2 border rounded-md mt-8">
          <div className="flex justify-center mb-4 bg-white rounded-md w-[210px] mx-auto py-2">
            <img
              src="https://www.cerebellumacademy.com/wp-content/uploads/2023/10/cba.webp"
              alt="Cerebellum Academy Logo"
              className="max-w-[212px]"
            />
          </div>
          <h2 className="text-center text-[15px] font-medium mb-2 px-2">
            For The Students By The Teachers
          </h2>
          <hr className="mb-4 mx-4" />
          <h2 className="text-center text-base font-medium mb-4 px-2">
            Our Social Media presence
          </h2>
          <div className="flex justify-center flex-wrap gap-3 text-2xl text-white px-2">
            <a
              href="https://www.youtube.com/@cerebellumacademy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.instagram.com/cerebellumacademy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://t.me/GroupCerebellumAcademy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegram />
            </a>
            <a
              href="https://www.facebook.com/cerebellumacademy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com/cerebellumacad?lang=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.linkedin.com/company/cerebellum-academy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
          <div className="bg-white p-3 flex justify-center items-center space-x-4 mt-6 rounded-lg shadow">
            <a
              href="https://play.google.com/store/apps/details?id=com.cerebellummobileapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://www.cerebellumacademy.com/wp-content/uploads/2023/10/play_store.png"
                alt="Android Play Store"
                width={130}
                height={63}
                className="object-contain"
              />
            </a>
            <a
              href="https://apps.apple.com/in/app/cerebellum/id1662462131"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://www.cerebellumacademy.com/wp-content/uploads/2023/10/app_store.png"
                alt="iOS App Store"
                width={130}
                height={63}
                className="object-contain"
              />
            </a>
          </div>
        </div>

        <div className="w-full lg:w-1/4 px-4 mb-8 lg:mb-0 py-8">
          <h2 className="text-xl font-semibold text-white mb-4">QUICK LINKS</h2>
          <ul className="space-y-2 px-1">
            {links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-white hover:text-blue-300 transition-colors duration-200"
                >
                  <FaAngleRight className="mr-2 text-sm" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full lg:w-1/4 px-4 mb-8 lg:mb-0 py-8">
          <h2 className="text-xl font-semibold text-white mb-4">
            OFFLINE COURSES
          </h2>
          <ul className="mb-4">
            <li>
              <a
                href="https://cerebellumacademy.com/champion-batch-for-live-classes/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-white hover:text-blue-300 transition-colors duration-200"
              >
                <FaAngleRight className="mr-2 text-sm" />
                The Champion's Batch 2.O - Regular Batch
              </a>
            </li>
          </ul>
          <div className="mb-4">
            <img
              src="https://www.cerebellumacademy.com/wp-content/uploads/2023/10/7MtdE7v8jHN0Utp2WeA6MTqYETg.png"
              alt="Champion Batch"
              width={57}
              height={17}
              className="object-contain"
            />
          </div>
          <form className="space-y-3">
            <label
              htmlFor="email"
              className="block text-white text-sm font-medium"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
            >
              Subscribe To Newsletter
            </button>
          </form>
        </div>

        <div className="w-full lg:w-1/4 px-4 mb-8 lg:mb-0 py-8">
          <h2 className="text-xl font-semibold text-white mb-4">Contact Us</h2>
          <ul className="space-y-3 text-sm text-white">
            <li className="flex items-start">
              <FaPhoneSquareAlt className="text-white mt-1 mr-2 text-xl" />
              <span>+91 95602 00184</span>
            </li>
            <li className="flex items-start">
              <MdEmail className="text-white mt-1 mr-2 text-xl" />
              <span>support@cerebellumacademy.com</span>
            </li>
            <li className="flex items-start">
              <a
                href="https://www.cerebellumacademy.com/help-center/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start hover:text-blue-300 transition-colors"
              >
                <FaHandsHelping className="text-white mt-1 mr-2 text-xl" />
                <span>Help Center</span>
              </a>
            </li>
            <li className="flex items-start">
              <a
                href="https://maps.app.goo.gl/Zf4YkJbgFVawMQnN7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start hover:text-blue-300 transition-colors"
              >
                <FaLocationDot className="text-white mt-1 mr-2 text-2xl" />
                <span>
                  <strong>Delhi Office Address</strong>: 28, Second Floor, Vigyan
                  Vihar, Delhi - 110092
                </span>
              </a>
            </li>
            <li className="flex items-start">
              <a
                href="https://g.co/kgs/5PQY9wd"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start hover:text-blue-300 transition-colors"
              >
                <FaLocationDot className="text-white mt-1 mr-2 text-5xl" />
                <span>
                  <strong>Hyderabad Office Address</strong>: Cerebellum Academy,
                  2nd Floor, 6-1-280/2A, Bajjuri Plaza, Beside Park, Padmarao
                  Nagar, Secunderabad, Telangana 500025
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
