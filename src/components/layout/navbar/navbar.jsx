import React from 'react'
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'
import './style.css';
import {NavLink} from 'react-router-dom'

function NavbarLayout() {
    return (
        <Navbar className="navbar" variant='dark'>
            <Container>            
                <Navbar.Brand href="/" className="brand">Richard Carl Bongcayao</Navbar.Brand>
                <Nav className="mr-auto" />
                <Nav>
                    <Nav.Link><NavLink to="/" className="link">Home</NavLink></Nav.Link>
                    <Nav.Link href="#gallery">Gallery</Nav.Link>                   
                    <Nav.Link><NavLink to="/book" className="link">Book</NavLink></Nav.Link>
                    {/* <NavDropdown title="Gallery" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>  */}
                </Nav>                             
            </Container>
        </Navbar>
    )
}

export default NavbarLayout
