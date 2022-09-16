import { Link } from 'gatsby';
import React from 'react';

const Header = () => (
  <>
    <ul>
      <li>
        <Link to='/'>Home Page</Link>
      </li>
      <li>
        <Link to='/contact'>Contact</Link>
      </li>
    </ul>
  </>
);

export default Header;
