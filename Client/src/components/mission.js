import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MissionImg from '../Assets/images/mission_img.png';

function Mission() {
    return (
        <div className="content">
            <Container className="desktop-container">
                <Row>
                    <div className="header-image">
                        <img src={MissionImg} className="mission-img" alt="Diagram of the Wanda Pavillion" />
                            <p className="overlay-text">
                                With deep passion and steadfast commitment to high-performance building for a better tomorrow, we are driven to make a positive impact on the properties, communities, and people we respect. We strive to create the ideal sustainable built environment for all stakeholders.
                            </p>
                    </div>
                </Row>
                <Row>
                    <div className="text-body">
                        <h1>R Core Values</h1>
                        <p>
                            A strong work ethos and commitment to quality creation guides every aspect of the development process: finance, design, construction, and management in a way that makes a positive impact on our community, while generating strong returns for investors. Our business is grounded in a long-term vision, and the following steadfast values and beliefs:
                        </p>
                    </div>
                </Row>
                <Row style={{margin: "auto 85px", paddingBottom: "100px"}}>
                    <Col lg={3} md={6}>
                        <h1>Integrity</h1>
                        <p>
                            We are forthright. We take pride in being honest with ourselves, our colleagues, and all of our stakeholders. We value integrity in people with whom we do business.
                        </p>
                    </Col>
                    <Col lg={3} md={6}>
                        <h1>Excellence</h1>
                        <p>
                            We will always strive for excellence. We have the courage and fortitude to meet leading practices in our integrated project delivery approach, and do not fear changing directions and admitting fault.
                        </p>
                    </Col>
                    <Col lg={3} md={6}>
                        <h1>Innovation</h1>
                        <p>
                            We pride ourselves on being innovators and recognize change is the only constant. We are not afraid explore new things or challenge the status quo.
                        </p>
                    </Col>
                    <Col lg={3} md={6}>
                        <h1>Relationships</h1>
                        <p>
                            We value connection and strive to build productive, mutually-beneficial, sustainable bonds with those who share our values.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Mission;