import React ,{useState}from 'react'
import{Link} from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';
import './navbar.css';
import logo from "../logo/Logo.png";
function Navbar() {

    const [click, setClick] = useState(false); 
    const handleClick = () => setClick(!click);

    return (
        <div className = "navbar">
            <div className = "navbar-rectangle">
            </div>
            <div className = "navbar-container container">
                <Link to = "/" className = "navbar-logo">
                         <img src={logo} alt = "Logo"/>
                </Link>
                {/* Icon */}
                <div className='menu-icon' onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </div>

                    {/* Navigation Bar */}
                <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
                    <li className = "nav-item">
                        <Link to = "/" className = "nav-links">
                            Programs & Courses
                        </Link>
                    </li>
                    <li className = "nav-item">
                        <Link to = "/" className = "nav-links">
                             Pricing
                    </Link>
                    </li>
                    <li className = "nav-item">
                        <Link to = "/" className = "nav-links">
                              Our Tutors
                        </Link>
                    </li>
                    <li className = "nav-item">
                        <Link to = "/" className = "nav-links">
                             Become a Tutor
                        </Link>
                    </li>  
                    <li className = "nav-item">
                        <Link to = "/" className = "nav-links">
                             About Our Company
                        </Link>
                    </li>    
                    <li className = "nav-item">
                        <Link to = "/" className = "nav-links">
                             Contact 
                        </Link>
                    </li>                    
                    </ul>
                </div>
            </div>         
    )
}

export default Navbar
