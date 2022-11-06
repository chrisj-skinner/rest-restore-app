import { Link } from 'gatsby';
import React, { useState } from 'react';
import logo from '../images/logo.png';
import logoLg from '../images/logo-lg.png';
import './header.css';

const Header = () => {
  const [menuActive, setMenu] = useState(false);
  const [subMenuActive, setSubMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menuActive);
    setSubMenu(false);
  };

  const toggleSubNav = (event) => {
    event.preventDefault();
    setSubMenu(!subMenuActive);
  };

  return (
    <>
      {/* <div
        class={
          'bg-black h-full w-full opacity-0 absolute transition-[opacity] duration-300 ease-in-out top-[96px]' +
          (menuActive ? ' opacity-50' : '')
        }
      ></div> */}
      <header className='flex justify-between flex-wrap px-11 items-center h-[96px] bg-white border-b-2 border-[lightgray] relative'>
        <div className='flex'>
          <a href='/'>
            <img src={logo} alt='logo' className='inline-block' />
            <img src={logoLg} alt='large logo' className='hidden sm:inline-block ml-3' />
          </a>
        </div>
        <button className={'menu-btn' + (menuActive ? ' menu-btn--active' : '')} onClick={toggleMenu}></button>
        <nav
          className={
            'menu border-l-2 border-[lightgray] absolute w-[280px] right-[-280px] bg-white overflow-x-hidden transition-[right] duration-300 ease-in-out top-[96px]' +
            (menuActive ? ' right-0' : '')
          }
        >
          <ul>
            <li
              className={
                'relative border-b-[1px] border-[lightgray] has-sub-menu' +
                (subMenuActive ? ' has-sub-menu--active' : '')
              }
            >
              <Link
                to='#'
                className={
                  'py-6 flex h-[70px] items-center relative menu__link' + (subMenuActive ? ' menu__link--active' : '')
                }
                onClick={toggleSubNav}
              >
                <span className='menu-title'>Treatments</span>
              </Link>
              <div className={'sub-menu' + (subMenuActive ? ' sub-menu--active' : '')}>
                <ul>
                  <li>
                    <Link to='' className='py-6 flex h-[70px] items-center relative sub-menu__link'>
                      <span className='sub-menu-title'>Facial Treatments</span>
                    </Link>
                  </li>
                  <li>
                    <Link to='' className='py-6 flex h-[70px] items-center relative sub-menu__link'>
                      <span className='sub-menu-title'>Massages</span>
                    </Link>
                  </li>
                  <li>
                    <Link to='' className='py-6 flex h-[70px] items-center relative sub-menu__link'>
                      <span className='sub-menu-title'>Body Treatments</span>
                    </Link>
                  </li>
                  <li>
                    <Link to='' className='py-6 flex h-[70px] items-center relative sub-menu__link'>
                      <span className='sub-menu-title'>Sugargin</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className='relative border-b-[1px] border-[lightgray]'>
              <Link to='' className='py-6 flex h-[70px] items-center relative menu__link'>
                <span className='menu-title'>Products</span>
              </Link>
            </li>
            <li className='relative border-b-[1px] border-[lightgray]'>
              <Link to='' className='py-6 flex h-[70px] items-center relative menu__link'>
                <span className='menu-title'>About</span>
              </Link>
            </li>
            <li className='relative border-b-[1px] border-[lightgray]'>
              <Link to='' className='py-6 flex h-[70px] items-center relative menu__link'>
                <span className='menu-title'>Contact</span>
              </Link>
            </li>
            <li className='relative border-b-[1px] border-[lightgray]'>
              <Link to='' className='py-6 flex h-[70px] items-center relative menu__link'>
                <span className='menu-title'>Privacy</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
