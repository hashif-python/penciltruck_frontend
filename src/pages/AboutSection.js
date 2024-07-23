import React from 'react';
import { Container, Row, Col, Tab, Tabs, Image } from 'react-bootstrap';
import '../assets/css/AboutSection.css'; // Ensure you have an accompanying CSS file for styles
import about from '../assets/images/about.webp';

function AboutSection() {
    return (
        <Container id="about" className="about-section">
            <Row className="align-items-center">
                <Col md={6}>
                    <Image src={about} alt="Impact Image" fluid />
                </Col>
                <Col md={6}>
                    <h2 className="section-title">About Pencil Truck</h2>
                    <p className="lead">
                        We believe education is the most powerful tool to change the world.
                    </p>
                    <Tabs defaultActiveKey="mission" id="about-tabs" className="mb-3">
                        <Tab eventKey="mission" title="Our Mission">
                            <div className="tab-content">
                                <p>
                                    Our aim is to provide educational support to children from economically backward 
                                    backgrounds, who are struggling to access basic education due to financial constraints. 
                                    At Pencil Truck, we believe that education is the most powerful tool that can help break 
                                    the cycle of poverty and bring about long-lasting change in the lives of individuals and communities.
                                </p>
                            </div>
                        </Tab>
                        <Tab eventKey="vision" title="Our Vision">
                            <div className="tab-content">
                                <p>
                                    We are committed to empowering the future generation of India by providing them with access to 
                                    quality education. Our mission is to make education accessible to all, irrespective of their 
                                    socio-economic background.
                                </p>
                            </div>
                        </Tab>
                        <Tab eventKey="impacts" title="Our Impacts">
                            <div className="tab-content">
                                <p>
                                    We provide free educational resources, including books, stationery, and other study materials, 
                                    to children who need it the most. We also organize various educational programs and workshops 
                                    to enhance their learning and development.
                                </p>
                                <p>
                                    Our team of dedicated volunteers works tirelessly to identify children who are in need of our services 
                                    and to ensure that they receive the support they require. We collaborate with schools and other 
                                    educational institutions to create a conducive learning environment for these children.
                                </p>
                            </div>
                        </Tab>
                        <Tab eventKey="getInvolved" title="Get Involved">
                            <div className="tab-content">
                                <p>
                                    We strongly believe that every child deserves the opportunity to receive an education, regardless of
                                    their financial background. By supporting Pencil Truck, you can help us create a better future for
                                    these children, one pencil at a time.
                                </p>
                                <p>
                                    Join us in our mission to provide education for all. Together, we can make a difference in the lives
                                    of these children and help them achieve their dreams.
                                </p>
                            </div>
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </Container>
    );
}

export default AboutSection;
