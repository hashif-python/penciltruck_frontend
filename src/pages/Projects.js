import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../assets/css/Projects.css';
import about1 from '../assets/images/streetlight.webp';
import about2 from '../assets/images/schoolwheels.webp';
import { useNavigate } from 'react-router-dom';


function Projects() {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/school-on-wheels');
    };

    const handleButtonClick2 = () => {
        navigate('/street-light');
    };


    return (
        <Container id="projects" className="my-5 projects-section">
            <h2 className="text-center mb-4">Our Impactful Projects</h2>
            <Row>
                <Col md={6} lg={4}>
                    <Card className="mb-3 project-card">
                        <Card.Img variant="top" src={about1} alt="School on Wheels" />
                        <Card.Body>
                            <Card.Title>School on Wheels</Card.Title>
                            <Card.Text>
                                The School on Wheels project aims to expand its reach to more villages within
                                our operational states. We plan to increase the number of
                                volunteers, enhance the curriculum, and introduce
                                vocational training programs for older students, ensuring
                                a comprehensive and sustainable approach to education.
                            </Card.Text>
                            <Button variant="primary" onClick={handleButtonClick}>Learn More</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4}>
                    <Card className="mb-3 project-card">
                        <Card.Img variant="top" src={about2} alt="Street Light" />
                        <Card.Body>
                            <Card.Title>Street Light</Card.Title>
                            <Card.Text>
                                The STREET LIGHT is an Street Education Project aim to
                                address the pressing issues of inadequate limited educational
                                opportunities in underprivileged areas across India. This
                                initiative is designed to create a positive impact on the lives of
                                marginalized communities by enhancing their safety and
                                providing educational resources.
                            </Card.Text>
                            <Button variant="primary" onClick={handleButtonClick2}>Learn More</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Projects;
