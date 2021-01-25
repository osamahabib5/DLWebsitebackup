import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../logo/Logo.png'
import './navbar.css'
function Navbar(props) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <header className="toolbar">
      <nav className="toolbar__navigation">
        <div className='menu-icon' onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
        <div className="toolbar__logo">
          <img src={logo} alt="logo" color="black" />
        </div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
          <ul>
            <li>
              <a href="/">Programs and Courses</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
            <li>
              <a href="/">Our Tutors</a>
            </li>
            <li>
              <a href="/">Become a Tutor</a>
            </li>
            <li>
              <a href="/">About Our Company</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
