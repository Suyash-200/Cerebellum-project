import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
// import Logo from '../Logo';
import MegaMenu from '../MegaMenu/MegaMenu';

const DesktopHeader = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const menuItems = [
    { name: 'Home', link: '/' },
    { name: 'Cerebellum Teachers', link: '/cerebellum-teachers' },
    { 
      name: 'Offline Courses', 
      subItems: [
        { name: 'Pharmacology Offline Classes by Dr. Gobind Rai Garg', link: '/pharmacology-offline-classes' },
        { name: 'BTR T&Ds and GTs and Offline', link: '/btr-bootcamp' },
        { name: 'The Champions Batch 2.0', link: '/champion-batch' }
      ],
      megaMenu: true,
      megaMenuContent: (
        <div className="grid grid-cols-3 gap-4 p-4">
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
          {/* Add other mega menu items */}
        </div>
      )
    },
    // Add other menu items similarly
  ];

  return (
    <header className="hidden md:block bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* <Logo /> */}
          
          <nav className="flex items-center space-x-6">
            {menuItems.map((item, index) => (
              <div 
                key={index}
                className="relative"
                onMouseEnter={() => setActiveMenu(item.name)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link 
                  to={item.link || '#'}
                  className="font-medium text-gray-700 hover:text-blue-600 py-2"
                >
                  {item.name}
                </Link>

                {item.subItems && activeMenu === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg z-50"
                  >
                    {item.megaMenu ? (
                      <MegaMenu content={item.megaMenuContent} />
                    ) : (
                      <ul className="py-1">
                        {item.subItems.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <Link 
                              to={subItem.link}
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default DesktopHeader;