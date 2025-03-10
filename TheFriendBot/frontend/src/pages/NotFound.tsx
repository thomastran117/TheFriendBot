import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center text-black">
      <h2 className="text-6xl text-red font-bold mb-4">404</h2>
      <p className="text-xl mb-8">Page Not Found</p>
      
      <div className="space-x-4">
        <Link
          to="/"
          className="bg-blue-600 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          Go Back to Home
        </Link>

        <Link
          to="/chat"
          className="bg-green-600 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-green-700 transition duration-300"
        >
          Go to Chat
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
