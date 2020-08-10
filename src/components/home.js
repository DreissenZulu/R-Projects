import React from 'react';
import { Row, Col } from 'react-bootstrap';
import HomeImg from '../Assets/images/home_img.png';
import rLogo from '../Assets/logo/final_logo.svg';
import MapImg from '../Assets/images/map.png';

function Home() {
    return (
        <div className="content">
            <div className="img-container">
                <img src={HomeImg} width='100%' height='auto' alt="Green building" />
                <object className="home-logo" data={rLogo}>R Projects Logo</object>
            </div>
            <div style={{backgroundColor: "#FFFFFF", height: "100%"}}>
                <Row className="map-div">
                    <Col md={8}>
                        <img src={MapImg} style={{float: "right"}} width="90%" height="auto" alt="Interactive map" />
                    </Col>
                    <Col md={4} style={{padding: "0 40px"}}>
                        <h2>Title</h2>
                        <p>
                            Lorem Ipsum
                        </p>
                        <p>
                            Lorem Ipsum
                        </p>
                        <p>
                            Lorem Ipsum
                        </p>
                        <p>
                            Lorem Ipsum
                        </p>
                        <p>
                            Lorem Ipsum
                        </p>
                        <p>
                            Lorem Ipsum
                        </p>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Home;