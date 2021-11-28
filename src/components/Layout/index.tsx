import React from 'react';
import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import 'index.css';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => (
  <div className="px-4 sm:px-6"> 
    <Header />
    {children}
    <Footer />
  </div>
);
export default Layout;
