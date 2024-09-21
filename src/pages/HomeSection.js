import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../assets/css/HomeSection.css'; // Ensure this is correctly linked

function HomeSection() {
    const [showModal, setShowModal] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState(''); // Phone state

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => {
        setShowModal(false);
        resetFormFields();
    };

    const handleInputChange = (e, type) => {
        const { value } = e.target;
        if (type === 'name') setName(value);
        else if (type === 'email') setEmail(value);
        else if (type === 'phone') setPhone(value); // Handle phone input
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !phone) { // Validate phone as well
            toast.error('Please fill in all fields.', {
                position: toast.POSITION.TOP_RIGHT, // Positioning the toaster at the top-right
                autoClose: 5000,
            });
            return;
        }
        toast.success('Form submitted successfully!', {
            position: toast.POSITION.TOP_RIGHT, // Positioning the toaster at the top-right
            autoClose: 3000,
        });
        handleCloseModal();
    };

    const resetFormFields = () => {
        setName('');
        setEmail('');
        setPhone(''); // Reset phone field
    };

    return (

        <div id="home" className="hero-background">
            <ToastContainer />
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
                                <Form.Label>Phone Number</Form.Label> {/* New phone field */}
                                <Form.Control type="text" placeholder="Enter your phone number" value={phone} onChange={(e) => handleInputChange(e, 'phone')} />
                            </Form.Group>
                            <Button className="volunteer-button" type="submit">
                                Submit Application
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>

                {/* Toast Container for notifications */}

            </Container>
        </div>
    );
}

export default HomeSection;
