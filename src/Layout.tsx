import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const Layout: React.FC = () => {
  return (
    <div className="relative">
      <Header />
      <main>
        <Outlet />
      </main>
      <FloatingWhatsApp />
      <Footer />
    </div>
  );
};

export default Layout;
