import React from 'react';
import { FaPhone, FaUserCircle, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TopBar = () => {
  return (
    <section className="bg-[#1F305E] py-2 hidden md:block">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link to="/contact-us" className="flex items-center text-white">
              <FaUserCircle className="mr-1" />
              <span>Contact Us</span>
            </Link>
            <div className="flex items-center text-white">
              <FaPhone className="mr-1" />
              <span>+91 9560200184</span>
            </div>
            <div className="flex space-x-2">
              <a href="https://www.facebook.com/cerebellumacademy" className="text-white hover:text-blue-600">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/cerebellumacademy/" className="text-white hover:text-pink-600">
                <FaInstagram />
              </a>
              <a href="https://www.youtube.com/@cerebellumacademy" className="text-white hover:text-red-600">
                <FaYoutube />
              </a>
            </div>
          </div>
          <div className="flex space-x-4">
            <Link to="/help-center" className="text-sm bg-white px-3 py-1 rounded hover:bg-gray-200">
              Help Center
            </Link>
            <Link to="/login" className="text-sm bg-white px-3 py-1 rounded hover:bg-gray-200">
              Login
            </Link>
            <Link to="/faq" className="text-sm bg-white px-3 py-1 rounded hover:bg-gray-200">
              FAQ's
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopBar;