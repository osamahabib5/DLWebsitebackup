import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer'
import Logo from '../logo/Logo.png'
import './Navbar.css'
import { Navbar, Nav, Card } from 'react-bootstrap'
function Navigationbar() {
  return (
    <Navbar expand="lg" style={{ background: "#00ABBD" }}>
      <Navbar.Brand>
        <a href="#">
          <img src={Logo} />
        </a>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" >
          <Nav.Link href="#home">Programs & Courses</Nav.Link>
          <Nav.Link href="#link">Pricing</Nav.Link>
          <Nav.Link href="#link">Our Tutors</Nav.Link>
          <Nav.Link href="#link">Become a Tutor</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigationbar
