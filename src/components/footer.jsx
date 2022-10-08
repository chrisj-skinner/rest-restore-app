import React from 'react';
import { Link } from 'gatsby';
import twitterLogo from '../images/twitter-logo.png';
import facebookLogo from '../images/facebook-logo.png';

const currentYear = () => new Date().getFullYear();

const Footer = () => {
  return (
    <div>
      <footer className='flex justify-between items-center h-[64px] bg-[#3d3d3d] text-neutral-400 px-6 text-sm'>
        <div className=''>COPYRIGHT © {currentYear()} REST AND RESTORE</div>
        <div className='flex'>
          <Link to='' className='p-3'>
            <img src={facebookLogo} alt='twitter logo' />
          </Link>
          <Link to='' className='p-3'>
            <img src={twitterLogo} alt='facebook logo' />
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
