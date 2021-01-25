import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Backdrop from "./components/backdrop";
import {useState} from 'react'
//import Navbar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidedrawer from './components/sidedrawer';
import {Navbar,NavDropdown,Form,Nav,FormControl,Button} from 'react-bootstrap'
function App() {
  //const {expand} = props.expand;
  // const [sideDrawerOpen, setDrawerToggle]
  return (
    // <div style = {{height: '100%'}}>
    //     <Navbar />
    //     <Sidedrawer />
    //     {/* <Backdrop /> */}
    // </div>
    <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
  );
}

export default App;
