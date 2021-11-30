import React, {useEffect} from 'react';
import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import 'index.css';

type LayoutProps = {
  children: React.ReactNode;
  title: string;
};

export const Layout = (props: LayoutProps) => {
  useEffect(() => {
    document.title = props.title || "";
  }, [props.title]);
 
  return <div className="px-4 sm:px-6"> 
    <Header />
    {props.children}
    <Footer />
  </div>
};
export default Layout;
