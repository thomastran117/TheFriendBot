import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-500 via-indigo-600 to-blue-700 font-sans antialiased">
      <Navbar />
      <main className="flex-grow py-16 px-4">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
