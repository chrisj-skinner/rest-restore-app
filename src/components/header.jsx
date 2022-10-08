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
      <div
        class={
          'bg-black h-full w-full opacity-0 absolute transition-[opacity] duration-300 ease-in-out top-[98px]' +
          (menuActive ? ' opacity-50' : '')
        }
      ></div>
      <header class='flex justify-between flex-wrap p-6 bg-white border-b-2'>
        <div class='flex'>
          <a href='/'>
            <img src={logo} alt='logo' class='inline-block' />
            <img src={logoLg} alt='large logo' class='hidden sm:inline-block ml-3' />
          </a>
        </div>
        <button class={'menu-btn' + (menuActive ? ' menu-btn--active' : '')} onClick={toggleMenu}></button>
        <nav
          class={
            'menu border-l-2 h-full absolute w-[280px] right-[-280px] bg-white overflow-x-hidden transition-[right] duration-300 ease-in-out top-[98px]' +
            (menuActive ? ' right-0' : '')
          }
        >
          <ul>
            <li
              class={
                'relative border-b-[1px] border-b-[lightgray] has-sub-menu' +
                (subMenuActive ? ' has-sub-menu--active' : '')
              }
            >
              <Link
                to='#'
                class={
                  'py-6 text-[#666666] flex h-[70px] items-center relative menu__link' +
                  (subMenuActive ? ' menu__link--active' : '')
                }
                onClick={toggleSubNav}
              >
                <span class='menu-title'>Treatments</span>
              </Link>
              <div class={'sub-menu' + (subMenuActive ? ' sub-menu--active' : '')}>
                <ul>
                  <li>
                    <Link to='' className='py-6 text-[#666666] flex h-[70px] items-center relative sub-menu__link'>
                      <span class='sub-menu-title'>Facial Treatments</span>
                    </Link>
                  </li>
                  <li>
                    <Link to='' className='py-6 text-[#666666] flex h-[70px] items-center relative sub-menu__link'>
                      <span class='sub-menu-title'>Massages</span>
                    </Link>
                  </li>
                  <li>
                    <Link to='' className='py-6 text-[#666666] flex h-[70px] items-center relative sub-menu__link'>
                      <span class='sub-menu-title'>Body Treatments</span>
                    </Link>
                  </li>
                  <li>
                    <Link to='' className='py-6 text-[#666666] flex h-[70px] items-center relative sub-menu__link'>
                      <span class='sub-menu-title'>Sugargin</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li class='relative border-b-[1px] border-b-[lightgray]'>
              <Link to='' className='py-6 text-[#666666] flex h-[70px] items-center relative menu__link'>
                <span class='menu-title'>Products</span>
              </Link>
            </li>
            <li class='relative border-b-[1px] border-b-[lightgray]'>
              <Link to='' className='py-6 text-[#666666] flex h-[70px] items-center relative menu__link'>
                <span class='menu-title'>About</span>
              </Link>
            </li>
            <li class='relative border-b-[1px] border-b-[lightgray]'>
              <Link to='' className='py-6 text-[#666666] flex h-[70px] items-center relative menu__link'>
                <span class='menu-title'>Contact</span>
              </Link>
            </li>
            <li class='relative border-b-[1px] border-b-[lightgray]'>
              <Link to='' className='py-6 text-[#666666] flex h-[70px] items-center relative menu__link'>
                <span class='menu-title'>Privacy</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
