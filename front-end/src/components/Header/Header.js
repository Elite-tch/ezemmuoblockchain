import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src="/images/logo.png" alt="Logo" className="logo" />
      </div>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        ☰
      </button>
      <nav className={`nav ${isSidebarOpen ? 'open' : ''}`}>
        <button className="close-sidebar" onClick={closeSidebar}>
          &times;
        </button>
        <ul>
          <li><NavLink to='/' end onClick={closeSidebar}>Home</NavLink></li>
          <li><NavLink to='/blog' onClick={closeSidebar}>Blog</NavLink></li>
          <li><NavLink to='/about' onClick={closeSidebar}>About</NavLink></li>
          <li><NavLink to='/community' onClick={closeSidebar}>Communities</NavLink></li>
    <NavLink to='/contact' onClick={closeSidebar} className='talk'>Lets have a chat 
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="arrow">
  <path fillRule="evenodd" d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z" clipRule="evenodd" />
</svg>

</NavLink>
       
        </ul>
      </nav>
      {isSidebarOpen && <div className="overlay" onClick={closeSidebar}></div>}
    </header>
  );
};

export default Header;

