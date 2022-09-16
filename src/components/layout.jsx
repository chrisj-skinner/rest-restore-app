import React from 'react';
import Footer from './footer';
import Header from './header';

const Layout = ({ children }) => (
  <>
    <Header></Header>
    {children}
    <Footer></Footer>
  </>
);

export default Layout;
