import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const toggle = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <header>
      <button type="button" onClick={toggle}>
        {' '}
        <span className="material-symbols-rounded">menu</span>
      </button>
      <nav className={toggleMenu ? 'show' : 'hide'}>
        <ul className="menu">
          <li>
            <Link to="/" onClick={toggle}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={toggle}>
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
