import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaAlignJustify, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MegaMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    {
      id: 'home',
      name: 'Home',
      link: '/',
    },
    {
      id: 'teachers',
      name: 'Cerebellum Teachers',
      link: '/cerebellum-teachers',
    },
    {
      id: 'offline-courses',
      name: 'Offline Courses',
      //   {
      //     name: 'Pharmacology Offline Classes by Dr. Gobind Rai Garg',
      //     link: '/pharmacology-offline-classes',
      //   },
      //   {
      //     name: 'BTR T&Ds and GTs and Offline',
      //     link: '/btr-bootcamp',
      //   },
      //   {
      //     name: 'The Champions Batch 2.0',
      //     link: '/champion-batch',
      //   },
      // ],
      megaMenu: true,
      megaMenuContent: (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Link to="/pharmacology-offline-classes">
              <img
                src="https://www.cerebellumacademy.com/wp-content/uploads/2024/09/pharmacology-2-min.jpg"
                alt="Pharmacology Dr. Gobind Rai Garg"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Pharma Offline Class</h3>
              </div>
            </Link>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Link to="/btr-bootcamp">
              <img
                src="https://www.cerebellumacademy.com/wp-content/uploads/2024/08/Artboard-1.jpg"
                alt="Dr. Zainab Vora BTR"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">BTR T&D, GTs and Offline</h3>
              </div>
            </Link>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Link to="/champion-batch">
              <img
                src="https://www.cerebellumacademy.com/wp-content/uploads/2024/08/WhatsApp-Image-2025-01-21-at-3.51.04-PM.webp"
                alt="Champions Batch 2.0"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">The Champions Batch 2.0 @Hyderabad</h3>
              </div>
            </Link>
          </div>
        </div>
      ),
    },
    {
      id: 'plans',
      name: 'Plans',
    },
    {
      id: 'premium-notes',
      name: 'Premium Notes',
    },
    {
      id: 'schedules',
      name: 'Schedules',
    },
    {
      id: 'announcements',
      name: 'Announcements',
    },
    {
      id: 'blogs',
      name: 'Blogs',
      link: '/blogs',
    },
  ];

  return (
    <section className="bg-white">
      {/* Desktop Menu */}
      <div className="hidden md:block container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="w-100">
            <Link to="/">
              <img
                src="https://www.cerebellumacademy.com/wp-content/uploads/2023/12/CBA-Web-Logo-e1716441721779.png"
                alt="Cerebellum Academy logo"
                className="h-16 object-contain"
              />
            </Link>
          </div>
          <nav className="flex items-center space-x-6">
            {menuItems.map((item) => (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() => setActiveMenu(item.id)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                {item.link ? (
                  <Link to={item.link} className="font-medium text-gray-700 hover:text-blue-600 py-2">
                    {item.name}
                  </Link>
                ) : (
                  <button
                    className="font-medium text-gray-700 hover:text-blue-600 py-2 flex items-center"
                    onClick={() => setActiveMenu(activeMenu === item.id ? null : item.id)}
                  >
                    {item.name}
                    <FaChevronDown className="ml-1 text-xs" />
                  </button>
                )}

                {item.subItems && activeMenu === item.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 mt-2 z-50"
                  >
                    {item.megaMenu ? (
                      <div className="w-screen max-w-6xl bg-white shadow-xl rounded-lg overflow-hidden">
                        {item.megaMenuContent}
                      </div>
                    ) : (
                      <div className="w-64 bg-white rounded-md shadow-lg">
                        <ul className="py-1">
                          {item.subItems.map((subItem, index) => (
                            <li key={index}>
                              <Link
                                to={subItem.link}
                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                              >
                                {subItem.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </motion.div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/">
            <img
              src="https://www.cerebellumacademy.com/wp-content/uploads/2023/12/CBA-Web-Logo-e1716441721779.png"
              alt="Cerebellum Academy logo"
              className="h-16 object-contain"
            />
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaAlignJustify size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-white overflow-hidden"
            >
              <ul className="py-2 px-4">
                {menuItems.map((item) => (
                  <React.Fragment key={item.id}>
                    {item.subItems ? (
                      <li className="mb-2">
                        <button
                          className="w-full text-left font-medium text-gray-700 py-2 flex justify-between items-center"
                          onClick={() => setActiveMenu(activeMenu === item.id ? null : item.id)}
                        >
                          {item.name}
                          <FaChevronDown
                            className={`transition-transform ${activeMenu === item.id ? 'transform rotate-180' : ''}`}
                          />
                        </button>
                        <AnimatePresence>
                          {activeMenu === item.id && (
                            <motion.ul
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="ml-4 overflow-hidden"
                            >
                              {item.subItems.map((subItem, index) => (
                                <li key={index} className="mb-1">
                                  <Link
                                    to={subItem.link}
                                    className="block py-1 text-gray-600 hover:text-blue-600"
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    {subItem.name}
                                  </Link>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </li>
                    ) : (
                      <li className="mb-2">
                        <Link
                          to={item.link}
                          className="block font-medium text-gray-700 py-2 hover:text-blue-600"
                          onClick={() => setMobileMenuOpen(false)}
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
      </div>
    </section>
  );
};

export default MegaMenu;
