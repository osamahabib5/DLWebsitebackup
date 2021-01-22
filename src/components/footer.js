import React,{useState} from 'react'
import './footer.css';

function Footer() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <div className = {click ? 'nav-menu active' : 'nav-menu'}>
            <p className = "footer-content">
            COPYRIGHT 2021   |   THE DOT & LINE   |   4TH FLOOR, BUILDING 35-C, LANE 7, BUKHARI COMMERCIAL, PHASE 6, DHA   0346-0086799 0346-0086795
            </p>
        </div>
    )
}

export default Footer;
