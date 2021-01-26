import React from 'react'
import './SideDrawer.css'
import Logo from '../logo/Logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
function SideDrawer(props) {
    let drawerClasses = "sidedrawer"
    if (props.show) {
        drawerClasses = "sidedrawer open"
    }
    return (
        <div>
            <nav className={drawerClasses}>
                <div className="Logo">
                    <img src={Logo} alt="Logo" />
                </div>
                <ul>
                    <li>Programs & Courses</li>
                    <li>Pricing</li>
                    <li>Our Tutors</li>
                    <li>Become a Tutor</li>
                    <li>About our company</li>
                    <li>Contact</li>
                    <li>4TH FLOOR, BUILDING 35-C, LANE 7, BUKHARI COMMERCIAL, PHASE 6, DHA 0346-0086799 | 0346-0086795</li>
                    <li>&copy; {new Date().getFullYear()} | THE DOT & LINE</li>
                </ul>
                <div className = "nav-footer">
                <div className = "toggle-button__line"></div>
                </div>
            </nav>
        </div>
    )
}

export default SideDrawer
