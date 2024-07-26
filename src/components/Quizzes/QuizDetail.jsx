import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const quiz = {
  id: 1,
  title: 'React Basics Quiz',
  questions: [
    {
      id: 1,
      question: 'What is the primary purpose of React?',
      options: ['Data analysis', 'UI development', 'Server-side rendering', 'Database management'],
      correctAnswer: 'UI development',
    },
    {
      id: 2,
      question: 'What is a component in React?',
      options: ['A database schema', 'A function that returns HTML', 'A backend service', 'A CSS style'],
      correctAnswer: 'A function that returns HTML',
    },
  ],
};

const QuizDetail = () => {
  const { id } = useParams();
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleChange = (questionId, option) => {
    setAnswers(prevAnswers => ({ ...prevAnswers, [questionId]: option }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowResults(true);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl p-8 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">{quiz.title}</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {quiz.questions.map(question => (
            <div key={question.id}>
              <p className="text-lg font-semibold">{question.question}</p>
              <div className="space-y-2">
                {question.options.map(option => (
                  <div key={option} className="flex items-center">
                    <input
                      type="radio"
                      id={`question-${question.id}-option-${option}`}
                      name={`question-${question.id}`}
                      value={option}
                      onChange={() => handleChange(question.id, option)}
                      className="mr-2"
                    />
                    <label htmlFor={`question-${question.id}-option-${option}`}>{option}</label>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <button
            type="submit"
            className="w-full py-2 mt-4 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200"
          >
            Submit Quiz
          </button>
        </form>
        {showResults && (
          <div className="mt-8">
            <h3 className="text-xl font-bold">Results</h3>
            {quiz.questions.map(question => (
              <div key={question.id}>
                <p className="text-lg">
                  {question.question} -{' '}
                  {answers[question.id] === question.correctAnswer ? (
                    <span className="text-green-600">Correct</span>
                  ) : (
                    <span className="text-red-600">Incorrect</span>
                  )}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizDetail;
