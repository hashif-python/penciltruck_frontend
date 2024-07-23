import React, { useEffect } from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import about1 from '../assets/images/schoolwheels.webp';
import about2 from '../assets/images/schoolwheels2.webp';
import schoolonwheels from '../assets/docs/schoolonwheels.pdf';
import '../assets/css/SchoolOnWheels.css';
import { Carousel } from 'react-bootstrap';

function SchoolOnWheels() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Container >
            <Row className="my-5">
                <Col md={12} className="mb-4">
                    <h1 className="display-4 text-center">School on Wheels</h1>
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

                    <center><a href={schoolonwheels} download className="btn download-button mt-4">
                        Download Project Report
                    </a></center>

                </Col>
                <Col md={12}>
                    <p>
                        The School on Wheels project, implemented under the auspices of the IWA India Foundation,
                        is a pioneering mobile educational initiative. Operating across four states—Uttar Pradesh,
                        Haryana, Bihar, and West Bengal—the project focuses on providing quality education to underserved
                        communities.
                    </p>
                    <p>
                        Since its inception, School on Wheels has reached 15 villages, catering to the educational needs
                        of 500 students with the dedication of 15 committed volunteers.
                    </p>
                </Col>
            </Row>
            <Row className="text-center my-5">
                <Col md={4}>
                    <h3>500</h3>
                    <p>Students Helped</p>
                </Col>
                <Col md={4}>
                    <h3>15</h3>
                    <p>Villages Reached</p>
                </Col>
                <Col md={4}>
                    <h3>15</h3>
                    <p>Dedicated Volunteers</p>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>Future Goals</Card.Title>
                            <Card.Text>
                                Our upcoming goals includes   expand its reach to more villages within
                                our operational states. We plan to increase the number of
                                volunteers, enhance the curriculum, and introduce
                                vocational training programs for older students, ensuring
                                a comprehensive and sustainable approach to education
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>Operational Overview</Card.Title>
                            <Card.Text>
                                During the reporting period, the School on Wheels team
                                continued its mission to provide quality education to
                                underserved communities. The project utilized a fleet of
                                mobile classrooms to deliver educational services directly
                                to the doorsteps of children in remote villages
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </Container>
    );
}

export default SchoolOnWheels;
