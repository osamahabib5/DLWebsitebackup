import React ,{useState}from 'react'
import{Link} from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';
import './navbar.css'
function Navbar() {

    const [click, setClick] = useState(false);
    const [button,setButton] = useState(true);
    const handleClick = () => setClick(!click);

    const showButton = () =>{
        if (window.innerWidth <= 960){
            setButton(false)
        }else{
            setButton(true)
        }
        window.addEventListener('resize',showButton);
    }
    return (
        <div className = "navbar">
            <div className = "navbar-container container">
                <Link to = "/" className = "navbar-logo">
                         Dot&Line
                </Link>
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
                    </ul>
                </div>
            </div>         
    )
}

export default Navbar
