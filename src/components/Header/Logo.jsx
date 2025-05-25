import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <img 
        src="https://www.cerebellumacademy.com/wp-content/uploads/2023/12/CBA-Web-Logo-e1716441721779.png" 
        alt="Cerebellum Academy logo" 
        className="w-24 h-20 object-contain"
      />
    </Link>
  );
};

export default Logo;