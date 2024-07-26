import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { courses } from '/src/components/Data.jsx';

const CourseList = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 sm:p-8">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Available Courses</h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {courses.map((course) => (
          <div key={course.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
            <img src={course.image} alt={course.title} className="w-full h-48 object-cover"/>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">{course.title}</h3>
              <p className="text-gray-700 mb-4">{course.description}</p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-indigo-600 font-medium">{course.instructor}</span>
                <div className="flex items-center">
                  <FaStar className="text-yellow-500" />
                  <span className="ml-1 text-gray-600">{course.rating}</span>
                </div>
              </div>
              <Link to={`/courses/${course.id}`} className="block mt-4 text-center bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors">View Course</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
