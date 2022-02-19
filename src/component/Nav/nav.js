import React from 'react';
import './nav.css';
import { Button, Nav, Navbar, NavDropdown, MenuItem, NavItem,Container } from 'react-bootstrap';
function nav() {
  return <div>
      <div className='top_component'>
          Hi Welcome to classy Foundation
      </div>
      <div className='nav_par'>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand className='logo' href="/">Your <span>Classy</span></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/">Software</Nav.Link>
      <Nav.Link href="/class_record">Class Meterial</Nav.Link>
      <NavDropdown title="Upcoming" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Course</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
    <Nav.Link href="/">Request</Nav.Link>
      <Nav.Link href="#deets">About Us</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  
  </Container>
</Navbar>
      </div>
  </div>;
}

export default nav;
