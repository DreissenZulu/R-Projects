import React from 'react';
import { Link } from 'react-router-dom';
import rLogo from '../Assets/logo/final_logo.svg';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {

    return (
        <footer className="footer mt-auto p-2 bd-highlight">
            <Container className="wide-container">
                <Row>
                    <Col md={2} style={{display: "flex", flexDirection: "column"}}>
                        <Link to={process.env.PUBLIC_URL + "/mission"} className="foot-link">Our Company</Link>
                        <Link to={process.env.PUBLIC_URL + "/about"} className="foot-link" style={{fontSize: "0.8em"}}>About</Link>
                        <Link to={process.env.PUBLIC_URL + "/services"} className="foot-link" style={{fontSize: "0.8em"}}>Services</Link>
                    </Col>
                    <Col md={2}>
                        <Link to="/contact" className="foot-link">Contact</Link>
                    </Col>
                    <Col md={8} style={{display: "flex", justifyContent: "flex-end", alignItems: "center"}}>
                        <object className="footer-logo" data={rLogo}>R Projects Logo</object>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;