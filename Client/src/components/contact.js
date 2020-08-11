import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Contact() {
    return (
        <div className="content">
            <Container className="desktop-container">
                <Row style={{paddingTop: "75px"}}>
                    <Col md={7}>
                    <iframe 
                        width="100%"
                        height="450"
                        frameborder="0"
                        style={{border: "0", marginBottom: "75px"}}
                        src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJs0-pQ_FzhlQRi_OBm-qWkbs&key=${process.env.REACT_APP_MAP_KEY}`}
                        allowfullscreen>
                    </iframe> 
                    </Col>
                    <Col md={5}>
                        <h1>Contact</h1>
                        <p>
                            R Projects <br />
                            123 Street Name
                        </p>
                        <p>
                            contact@rproject.ca <br />
                            North America: +1 604 518 8056 <br />
                            Caribbean: +1 868 378 3733 <br />
                            www.rprojects.ca
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Contact;