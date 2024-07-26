import React from 'react';
import { Link } from 'react-router-dom';

const lessons = [
  { id: 1, title: 'Introduction to React', completed: false },
  { id: 2, title: 'Components and Props', completed: false },
];

const LessonList = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl p-8 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Lessons</h2>
        <ul className="space-y-4">
          {lessons.map(lesson => (
            <li key={lesson.id} className="border p-4 rounded">
              <Link 
                to={`/lessons/${lesson.id}`}
                className="text-lg font-semibold text-indigo-600 hover:text-indigo-800"
              >
                {lesson.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LessonList;
