import React, { useEffect } from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import about1 from '../assets/images/streetlight.webp';
import about2 from '../assets/images/streetlight2.webp';
import '../assets/css/SchoolOnWheels.css';
import { Carousel } from 'react-bootstrap';
import streetlight from '../assets/docs/streetlight.pdf';
function StreetLight() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Container>
            <Row className="my-5">
                <Col md={12} className="mb-4">
                    <h1 className="display-4 text-center">Street Light</h1>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={about1} // Make sure to replace with your actual image source
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>Empowering Education</h3>
                                <p>Bringing learning opportunities to remote areas with our School on Wheels.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={about2} // Make sure to replace with your actual image source
                                alt="Second slide"
                            />
                            <Carousel.Caption>
                                <h3>Empowering Education</h3>
                                <p>Bringing learning opportunities to remote areas with our School on Wheels.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        {/* Repeat <Carousel.Item> for more slides */}
                    </Carousel>
                    <center><a href={streetlight} download className="btn download-button mt-4">
                        Download Project Report
                    </a></center>
                </Col>
                <Col md={12}>
                    <p>
                        The Street Light is a pivotal Street Education Project aimed at addressing the pressing issues of
                        limited educational opportunities in underprivileged areas across India. This initiative is designed
                        to create a positive impact on the lives of marginalized communities by enhancing their safety and
                        providing essential educational resources.
                    </p>
                    <p>
                        Operating in Lucknow, Uttar Pradesh, this dedicated education program promotes safety and learning
                        in underprivileged areas, with plans for expansion to other metro cities to replicate its proven success.
                    </p>
                </Col>
            </Row>
            <Row className="text-center my-5">
                <Col md={4}>
                    <h2>20</h2>
                    <p>Students in Lucknow</p>
                </Col>
                <Col md={4}>
                    <h2>15</h2>
                    <p>New Cities Targeted</p>
                </Col>
                <Col md={4}>
                    <h2>25+</h2>
                    <p>Volunteers Involved</p>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>Impact & Expansion</Card.Title>
                            <Card.Text>
                                <p>
                                    Proven Success: Demonstrated tangible positive outcomes in Lucknow provide a blueprint for success
                                    in other metro cities, addressing similar challenges in urban communities.
                                </p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>How You Can Help</Card.Title>
                            <Card.Text>

                                <p>
                                    Your generous contribution will play a crucial role in expanding this impactful project to more metro cities in India.
                                    We invite you to partner with us in bringing education to urban communities in need.
                                </p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default StreetLight;
