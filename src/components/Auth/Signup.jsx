import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Create an Account</h2>
        <form>
          <div className="mb-4">
            <label className="block mb-1 text-gray-700" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-gray-700" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-gray-700" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-indigo-500"
            />
          </div>
          <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">Sign Up</button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-gray-700">Already have an account? <Link to="/login" className="text-indigo-600 hover:underline">Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
