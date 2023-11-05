import React, { useState } from 'react';
import Content from '../assets/content/data.json';
import logo from '../assets/images/logo.png';
import logoLg from '../assets/images/logo-lg.png';
import './header.css';
import { Link } from 'gatsby';

const Header = () => {
  const [menuActive, setMenu] = useState(false);
  const [subMenuActive, setSubMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menuActive);
    setSubMenu(false);
  };

  const Navigation = Content.header.navigation;
  const LinkClasses =
    'h-[70px] flex items-center justify-center w-full no-underline hover:underline border-b-[1px] border-[lightgray]';

  const NavigationLink = ({ link }) => {
    return (
      <li>
        <Link to={link.ref} className={LinkClasses + ' hover:bg-lightgray'}>
          {link.label}
        </Link>
      </li>
    );
  };

  return (
    <>
      <header className='border-b-2 border-[lightgray]'>
        {/* Overlay */}
        <button
          aria-label='Close menu'
          className={
            'absolute h-screen w-screen z-20 cursor-default ' +
            (menuActive ? 'block' : 'hidden')
          }
          onClick={() => toggleMenu()}
          onKeyDown={() => toggleMenu()}
        ></button>
        <div className='relative max-w-screen-xl mx-auto'>
          <div className='z-20 flex flex-wrap items-center justify-between h-20 bg-white px-11'>
            <Link to='/' className='inline-block'>
              <img src={logo} alt='logo' className='inline-block' />
              <img
                src={logoLg}
                alt='rest and restore logo'
                className='hidden ml-3 sm:inline-block'
              />
            </Link>
            <button
              aria-label='Open menu'
              className={'hamburger' + (menuActive ? ' hamburger--active' : '')}
              onClick={() => toggleMenu()}
            ></button>
          </div>

          <nav
            className={`absolute z-10 bg-white xl:right-[44px] right-0 w-full md:w-60 ${
              menuActive ? 'top-[82px] z-30' : 'top-[-338px]'
            }`}
          >
            <ul>
              {Navigation.map((item, index) =>
                !item.children ? (
                  <NavigationLink link={item} key={index} />
                ) : (
                  <li key={index}>
                    <button
                      aria-label='Open submenu'
                      className={LinkClasses + ' cursor-pointer'}
                      onClick={() => setSubMenu(!subMenuActive)}
                    >
                      {item.label}
                    </button>
                    <ul
                      className={
                        'bg-lightgray hidden' + (subMenuActive ? 'block' : '')
                      }
                    >
                      {item.children.map((child, index) => (
                        <NavigationLink link={child} key={index} />
                      ))}
                    </ul>
                  </li>
                )
              )}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
