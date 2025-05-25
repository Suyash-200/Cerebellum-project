import React, { useState } from 'react';
import { FaAlignJustify, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
// import Logo from '../Logo';

const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', link: '/' },
    { name: 'Cerebellum Teachers', link: '/cerebellum-teachers' },
    { 
      name: 'Offline Courses', 
      subItems: [
        { name: 'Pharmacology Offline Classes by Dr. Gobind Rai Garg', link: '/pharmacology-offline-classes' },
        { name: 'BTR T&Ds and GTs and Offline', link: '/btr-bootcamp' },
        { name: 'The Champions Batch 2.0', link: '/champion-batch' }
      ]
    },
    // Add other menu items similarly
  ];

  return (
    <header className="md:hidden bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* <Logo /> */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-700 focus:outline-none"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaAlignJustify size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-white overflow-hidden"
          >
            <ul className="py-2 px-4">
              {menuItems.map((item, index) => (
                <React.Fragment key={index}>
                  {item.subItems ? (
                    <li className="mb-2">
                      <div className="font-medium text-gray-700 py-2">{item.name}</div>
                      <ul className="ml-4">
                        {item.subItems.map((subItem, subIndex) => (
                          <li key={subIndex} className="mb-1">
                            <Link 
                              to={subItem.link} 
                              className="block py-1 text-gray-600 hover:text-blue-600"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ) : (
                    <li className="mb-2">
                      <Link 
                        to={item.link} 
                        className="block font-medium text-gray-700 py-2 hover:text-blue-600"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </li>
                  )}
                </React.Fragment>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default MobileHeader;