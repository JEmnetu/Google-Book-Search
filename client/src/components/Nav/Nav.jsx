import React from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Nav.css';

const NavBar = (props) => {
    return (

        <Navbar className='navbar-class'>
        <Link to="/"><Navbar.Brand>Google Books</Navbar.Brand> </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Search</Nav.Link>
            <Nav.Link href="/Saved">Saved</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
}
 
export default NavBar;