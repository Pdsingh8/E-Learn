import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { courses } from '/src/components/Data.jsx'; 

const CourseDetail = () => {
  const { id } = useParams();
  const course = courses.find(c => c.id === parseInt(id));
  const [enrolled, setEnrolled] = useState(false); // State to track enrollments

  if (!course) return <div>Course not found</div>;

  const handleEnroll = () => {
    setEnrolled(true); // Set enrolled state is to true when button is clicked
    alert('You have successfully enrolled in this course!');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 sm:p-8">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden">
        <img src={course.image} alt={course.title} className="w-full h-64 object-cover"/>
        <div className="p-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{course.title}</h2>
          <p className="text-gray-700 mb-6">{course.description}</p>
          <p className="text-indigo-600 font-semibold mb-6">Instructor: {course.instructor}</p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Lessons</h3>
          <ul className="list-disc pl-5 mb-8">
            {course.lessons && course.lessons.length > 0 ? (
              course.lessons.map(lesson => (
                <li key={lesson.id} className="mb-3">
                  <span className="text-indigo-600 hover:text-indigo-800">{lesson.title}</span>
                  <p className="text-gray-600">{lesson.description}</p>
                </li>
              ))
            ) : (
              <li>No lessons available</li>
            )}
          </ul>

          {/* Enroll Button */}
          {!enrolled ? (
            <button 
              onClick={handleEnroll}
              className="bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Enroll Now
            </button>
          ) : (
            <p className="text-green-600 font-semibold mt-6">You have enrolled in this course.</p>
          )}

          
          <Link 
            to={`/lessons`} 
            className="block mt-6 bg-blue-600 text-white py-3 px-6 rounded-lg text-center hover:bg-blue-700 transition-colors"
          >
            View All Lessons
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
