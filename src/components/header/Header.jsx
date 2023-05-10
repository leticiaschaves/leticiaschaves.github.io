import React from 'react';
import NavBar from './NavBar';
import './Header.css';

function Header() {
  return (
    <header className='header'>
            <NavBar />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgb(77,166,174)" d="M0,192L40,202.7C80,213,160,235,240,224C320,213,400,171,480,149.3C560,128,640,128,720,144C800,160,880,192,960,181.3C1040,171,1120,117,1200,128C1280,139,1360,213,1400,250.7L1440,288L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
    </header>
  );
}

export default Header;
