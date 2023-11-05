import React from 'react';
import Content from '../assets/content/data.json';

const currentYear = () => new Date().getFullYear();
const Navigation = Content.footer.navigation;

const Footer = () => {
  return (
    <footer className='fixed bottom-0 w-full bg-neutral-700'>
      <div className='max-w-screen-xl mx-auto md:flex justify-between items-center text-[lightgray] p-6 text-sm flex-wrap'>
        <div className='w-full mb-4 md:w-auto md:mb-0'>
          COPYRIGHT © {currentYear()} REST AND RESTORE
        </div>
        <div>
          {Navigation.map((item, index) => (
            <a
              key={index}
              href={item.ref}
              target='_blank'
              rel='noreferrer'
              className='mr-4'
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
