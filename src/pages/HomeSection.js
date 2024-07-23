import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';
import '../assets/css/HomeSection.css'; // Ensure this is correctly linked


function HomeSection() {
    const [showModal, setShowModal] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [skills, setSkills] = useState('');

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => {
        setShowModal(false);
        resetFormFields();
    };

    const handleInputChange = (e, type) => {
        const { value } = e.target;
        if (type === 'name') setName(value);
        else if (type === 'email') setEmail(value);
        else if (type === 'skills') setSkills(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !skills) {
            alert('Please fill in all fields.');
            return;
        }
        alert('Form submitted successfully!');
        handleCloseModal();
        resetFormFields();
    };

    const resetFormFields = () => {
        setName('');
        setEmail('');
        setSkills('');
    };
    return (
        <div id="home" className="hero-background">
            <Container className="text-white text-center hero-container">
                <Row className="align-items-center justify-content-center">
                    <Col md={8}>
                        <h1 className="display-4 font-weight-bold">Help Us Change Lives</h1>
                        <p className="lead">
                            Join our mission to make the world a better place for everyone.
                        </p>
                        <Button className="button" onClick={handleShowModal}>Join Us</Button>
                    </Col>
                </Row>


                <Modal show={showModal} onHide={handleCloseModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Volunteer Application</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" value={name} onChange={(e) => handleInputChange(e, 'name')} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" value={email} onChange={(e) => handleInputChange(e, 'email')} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Skills and Interests</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Describe your skills and interests" value={skills} onChange={(e) => handleInputChange(e, 'skills')} />
                        </Form.Group>
                        <Button  className="volunteer-button"  type="submit">
                            Submit Application
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
            </Container>
        </div>
    );
}

export default HomeSection;
