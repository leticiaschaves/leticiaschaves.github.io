import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="nav">
      <a
        href="/"
        className="title"
      >
        manjuba
      </a>
      <ul>
        <li>
          <a href="/about">sobre</a>
        </li>
        <li className="active">
          <a href="/contact">contato</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
