import React from 'react';
import Footer from './footer';
import Header from './header';

const Layout = ({ children }) => (
  <>
    <Header></Header>
    <div className='max-w-screen-xl mx-auto overflow-hidden bg-white mb-[110px] md:mb-[70px]'>
      <main className='px-6 my-11 lg:px-11 '>{children}</main>
    </div>
    <Footer></Footer>
  </>
);

export default Layout;
