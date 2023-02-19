import React, { useState } from 'react';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header>
      <button type="button" onClick={() => setToggleMenu(!toggleMenu)}>
        {' '}
        <span className="material-symbols-rounded">menu</span>
      </button>
      <nav className={toggleMenu ? 'show' : 'hide'}>
        <ul className="menu">
          <>Home</>
          <li>About</li>
          <li>Login</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
