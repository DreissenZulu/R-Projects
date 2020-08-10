import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import rLogo from '../Assets/logo/final_logo.svg';
import { Container, Nav } from 'react-bootstrap';

function NavBar() {
    return (
        <Navbar className="nav-style" variant="dark" sticky='top' expand="md">
            <Container className="wide-container">
                <Link to={process.env.PUBLIC_URL + "/"} className="navbar-brand"><object className="brand-logo" data={rLogo}>R Projects Logo</object></Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href={process.env.PUBLIC_URL + "/about"} className="nav-item nav-link" activeClassName="active">ABOUT R</Nav.Link>

                    <Nav.Link href={process.env.PUBLIC_URL + "/services"} className="nav-item nav-link" activeClassName="active">R SERVICES</Nav.Link>

                    <Nav.Link href={process.env.PUBLIC_URL + "/mission"} className="nav-item nav-link" activeClassName="active">R MISSION</Nav.Link>

                    <Nav.Link href={process.env.PUBLIC_URL + "/contact"} className="nav-item nav-link" activeClassName="active">CONTACT</Nav.Link>

                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;