import React from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import './Nav.css';

const NavBar = (props) => {
    return (

        <Navbar className='navbar-class'>
        <Navbar.Brand href="#home">Google Books</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Search</Nav.Link>
            <Nav.Link href="#search">Saved</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
}
 
export default NavBar;