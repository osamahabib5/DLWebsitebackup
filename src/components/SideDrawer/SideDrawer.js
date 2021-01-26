import React from 'react'
import './SideDrawer.css'
import Logo from '../logo/Logo.png';
function SideDrawer(props) {
    let drawerClasses = "sidedrawer"
    if (props.show) {
        drawerClasses = "sidedrawer open"
    }
    return (
        <div>
           
            <nav className={drawerClasses}>
                <ul>
                    <li>Programs & Courses</li>
                    <li>Pricing</li>
                    <li>Our Tutors</li>
                    <li>Become a Tutor</li>
                    <li>About our company</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
    )
}

export default SideDrawer
