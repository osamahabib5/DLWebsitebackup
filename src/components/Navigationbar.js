import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../logo/Logo.png'
import './Navbar.css'
import { Navbar, Nav, Card } from 'react-bootstrap'
function Navigationbar() {
  return (
    <Navbar expand="lg" style={{ background: "#00ABBD" }}>
      <Navbar.Brand className="order-md-0 mx-auto order-1">
        <a href="#">
          <img src={Logo} />
        </a>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" style = {{border: 'none'}}/>
      <Navbar.Collapse id="accordion">
        <Nav className="ml-auto">
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
