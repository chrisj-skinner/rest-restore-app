import React from 'react';
import Footer from './footer';
import Header from './header';

const Layout = ({ children }) => (
  <div className='max-w-screen-xl overflow-hidden mx-auto'>
    <Header></Header>
    {children}
    <Footer></Footer>
  </div>
);

export default Layout;
