import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const nav = useRef();
  // Detecting a click outside Navigation widgget
  useEffect(() => {
    const handleClickOutSide = (ev) => {
      if (toggleMenu && nav !== ev.target && !nav.current.contains(ev.target)) {
        setToggleMenu(false);
      }
    };
    // whe the user click
    document.addEventListener('mousedown', handleClickOutSide);
    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', handleClickOutSide);
    };
  }, [toggleMenu]);
  const toggle = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <header>
      <button type="button" onClick={toggle}>
        {' '}
        <span className="material-symbols-rounded">menu</span>
      </button>
      <nav ref={nav} className={toggleMenu ? 'show' : 'hide'}>
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
