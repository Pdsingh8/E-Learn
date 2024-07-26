import React from 'react';
import { Link } from 'react-router-dom';

const quizzes = [
  { id: 1, title: 'React Basics Quiz' },
  { id: 2, title: 'Advanced React Quiz' },
];

const QuizList = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl p-8 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Quizzes</h2>
        <ul className="space-y-4">
          {quizzes.map(quiz => (
            <li key={quiz.id} className="border p-4 rounded">
              <Link to={`/quizzes/${quiz.id}`} className="text-lg font-semibold text-indigo-600 hover:underline">
                {quiz.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QuizList;
