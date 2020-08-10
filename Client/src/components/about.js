import React from 'react';
import { Container, Row } from 'react-bootstrap';
import AboutImg from '../Assets/images/about_img.png';

function About() {
    return (
        <div className="content">
            <Container className="desktop-container">
                <Row>
                    <div className="header-image">
                        <img src={AboutImg} alt="A modern building" />
                        <p className="overlay-text">
                            R PROJECTS is a unique real estate development firm with a design-build practice developing high-performance structures.
                        </p>
                    </div>
                    <div className="text-body">
                        <p>
                            Since 2005, the firm’s directors have developed a reputation for innovative design and precision in applying sustainable construction standards for the highest levels of style, energy-efficiency, and comfort. We offer comprehensive real estate development from finance and pre-development through engineering to specific services, like custom furniture design and fabrication. Our designers and craftsmen can create environments at any level of customization.
                        </p>
                        <p>
                            By taking the role of the master builder, R PROJECTS integrates a variety of design services with our considerable construction capabilities. Supporting our experienced construction professionals is a team of architects, project managers, interior designers, landscape designers, metal fabricators, and carpenters that possess a depth of knowledge and breadth of experience that cannot be found at a single-discipline firm. 
                        </p>
                        <p>
                            R PROJECTS currently focuses on residential and mixed-use real estate developments on the Pacific and the Caribbean.
                        </p>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default About;