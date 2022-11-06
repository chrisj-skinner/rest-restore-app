import React from 'react';
import { Link } from 'gatsby';
import twitterLogo from '../images/twitter-logo.png';
import facebookLogo from '../images/facebook-logo.png';

const currentYear = () => new Date().getFullYear();

const Footer = () => {
  return (
    <footer className='flex justify-between items-center h-[64px] bg-neutral-700 text-[lightgray] px-6 text-sm'>
      <div className=''>COPYRIGHT © {currentYear()} REST AND RESTORE</div>
      <div className='flex'>
        <a href='https://www.facebook.com/restandrestoreuk' target='_blank' className='p-3'>
          <img src={facebookLogo} alt='twitter logo' />
        </a>
        <a href='https://twitter.com/restandrestore' target='_blank' className='p-3'>
          <img src={twitterLogo} alt='facebook logo' />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
