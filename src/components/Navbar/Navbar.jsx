import React from 'react';
import { Link } from 'react-router-dom';
import { FaBook, FaUserGraduate, FaChalkboardTeacher } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-indigo-700 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white">E-Learn</Link>
        <div className="hidden md:flex space-x-4">
          <Link to="/courses" className="flex items-center space-x-1 text-white hover:bg-indigo-600 p-2 rounded">
            <FaBook />
            <span>Courses</span>
          </Link>
          <Link to="/quizzes" className="flex items-center space-x-1 text-white hover:bg-indigo-600 p-2 rounded">
            <FaUserGraduate />
            <span>Quizzes</span>
          </Link>
          <Link to="/lessons" className="flex items-center space-x-1 text-white hover:bg-indigo-600 p-2 rounded">
            <FaChalkboardTeacher />
            <span>Lessons</span>
          </Link>
          <Link to="/login" className="text-white hover:bg-indigo-600 p-2 rounded">Login</Link>
          <Link to="/signup" className="text-white hover:bg-indigo-600 p-2 rounded">Signup</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
