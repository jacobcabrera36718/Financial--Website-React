import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      {/* Navigation bar */}
      <Navbar />
      
      {/* Main content */}
      <main style={{ padding: '2rem', minHeight: '80vh' }}>
        {children}
      </main>
      
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Layout;
