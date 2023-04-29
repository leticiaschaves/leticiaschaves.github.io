import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <a
        href="/"
        className="fish-icon"
      >
      <img src="https://www.svgrepo.com/show/481658/fish-2.svg"
      alt="fish logo"
      className='fish-icon'/>
      </a>
      <ul className="social-list">
        <li>
          <FaGithub />
        </li>
        <li>
          <FaLinkedin />
        </li>
        <li>
          <FaInstagram />
        </li>
      </ul>
      <p className="copy-right">
        Letícia Chaves &copy; 2023. All Rights Reserved
      </p>
    </footer>
  );
}

export default Footer;
