
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold mb-4">E-Learning Platform</p>
        <div className="flex justify-center space-x-8 mb-6">
          <Link to="/about" className="hover:text-indigo-400">About Us</Link>
          <Link to="/contact" className="hover:text-indigo-400">Contact</Link>
          <Link to="/privacy" className="hover:text-indigo-400">Privacy Policy</Link>
        </div>
        <p className="text-sm">&copy; 2024 E-Learning Platform. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
