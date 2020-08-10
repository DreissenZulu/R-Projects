import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ServicesImg from '../Assets/images/services_img.png';
import Img1 from '../Assets/images/img_1.png';
import Img2 from '../Assets/images/img_2.png';
import Img3 from '../Assets/images/img_3.png';
import Img4 from '../Assets/images/img_4.png';
import Img5 from '../Assets/images/img_5.png';

function Services() {
    return (
        <div className="content">
            <Container className="desktop-container">
                <Row>
                    <div className="header-image">
                        <img src={ServicesImg} alt="The top of a corner street building" />
                        <p className="overlay-text">
                            R PROJECTS offer many services to help your concept, whether a container home or a net-zero community become a reality. We work to hone the process of design-build construction to make high-performance buildings that last in a range of environmental conditions. Our main services are listed below however we have additional capabilities including but not limited to pre-fabricated steel structures, ICF, and wooden home construction.
                        </p>
                    </div>
                </Row>
                <Row>
                    <div className="text-body">
                        <h1>Design-Build</h1>
                        <p>
                            At R PROJECTS we handle and manage the entire project, from start to finish. Our entire process aligns with the requirements that financial institutions have in order to ensure our best-fit solutions conform to their checklists. Our goal is to ensure that every detail of your project goes smoothly whether it involves a renovation of an existing building, or a new build completed to LEED or PassivHaus standards. With over 15 years of experience, R PROJECTS gathers the best design, engineering, and construction professionals for the job.
                        </p>
                    </div>
                </Row>
                <Row noGutters="true" lg="5" md="3" className="justify-content-md-center" style={{marginLeft: "-15px", marginRight: "-15px"}}>
                    {/* For the 5 image row*/}
                    <Col style={{textAlign: "center"}}>
                        <img className="img-row" src={Img1} alt="A modern apartment complex" />
                    </Col>
                    <Col style={{textAlign: "center"}}>
                        <img className="img-row" src={Img2} alt="A building with unique wavy architecture"/>
                    </Col>
                    <Col style={{textAlign: "center"}}>
                        <img className="img-row" src={Img3} alt="A representation of topography"/>
                    </Col>
                    <Col style={{textAlign: "center"}}>
                        <img className="img-row" src={Img4} alt="Bird's eye view of two islands"/>
                    </Col>
                    <Col style={{textAlign: "center"}}>
                        <img className="img-row" src={Img5} alt="Skyscrapers surrounded by green"/>
                    </Col>
                </Row>
                <Row>
                    <div className="text-body">
                        <h1>Land Development</h1>
                        <p>
                            Land development involves purchasing land, deciding upon best usage, what features the building should include to perform optimally, and obtaining permits and licenses, all before construction.
                        </p>
                        <p>
                            At R PROJECTS we are proud to offer both land-development services and land-development consulting for those looking to invest in real estate or custom build their high-performance project. We inspect the land, provide a construction cost estimate, and make sure the process meets your needs, so you can have peace of mind when purchasing property.
                        </p>
                        <p>
                            Services that can only be provided by experienced land developers:
                            <ul>
                                <li>Understanding of local rules and regulations regarding land development</li>
                                <li>Most effective way to get critical estimates for construction and development</li>
                                <li>High-performance design and construction</li>
                            </ul>
                        </p>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Services;