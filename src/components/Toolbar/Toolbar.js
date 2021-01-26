import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Toolbar.css'
import Logo from '../logo/Logo.png'
import { FaBars } from 'react-icons/fa'
const Toolbar = (props) => {
    return (
        <header className = "toolbar">
            <nav className = "toolbar__navigation">
                <div>
                    <FaBars color = "white"/>
                </div>
                <div className = "toolbar_logo">
                        <img src = {Logo} alt = "Text"/>
        
                </div>
                <div className = "spacer"/>
                <div className = "toolbar-navigation-items">
                    <ul>
                        <li>Programs & Courses</li>
                        <li>Pricing</li>
                        <li>Our Tutors</li>
                        <li>Become a tutor</li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Toolbar 