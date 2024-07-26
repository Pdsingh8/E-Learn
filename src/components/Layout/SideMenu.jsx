import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="md:hidden relative">
      <button onClick={toggleMenu} className="p-4 text-indigo-600 focus:outline-none md:hidden">
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-indigo-600 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:flex md:flex-col`}
      >
        <div className="flex justify-between items-center p-4 bg-indigo-700">
          <Link to="/" className="text-white text-xl font-bold">E-Learn</Link>
          <button onClick={toggleMenu} className="text-white md:hidden">
            <FaTimes size={24} />
          </button>
        </div>
        <nav className="p-4 md:flex md:flex-col md:space-y-2">
          <Link to="/courses" className="block py-2 text-white hover:bg-indigo-700 rounded">Courses</Link>
          <Link to="/quizzes" className="block py-2 text-white hover:bg-indigo-700 rounded">Quizzes</Link>
          <Link to="/lessons" className="block py-2 text-white hover:bg-indigo-700 rounded">Lessons</Link>
          <Link to="/login" className="block py-2 text-white hover:bg-indigo-700 rounded">Login</Link>
          <Link to="/signup" className="block py-2 text-white hover:bg-indigo-700 rounded">Signup</Link>
        </nav>
      </div>
    </div>
  );
};

export default SideMenu;
