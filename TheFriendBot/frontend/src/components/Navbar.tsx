import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-2xl">TheFriendBot</div>
        <div className="space-x-6">
          <a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a>
          <a href="/chat" className="text-gray-300 hover:text-white transition-colors">Chat</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
