import React, { useState } from "react";
import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaHandsHelping } from 'react-icons/fa';
import "../assets/css/HomeSection.css";

function HomeSection() {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({ email: "", phone: "" });

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => {
    setShowModal(false);
    resetFormFields();
  };

  const handleInputChange = (e, type) => {
    const { value } = e.target;
    if (type === "name") setName(value);
    else if (type === "email") setEmail(value);
    else if (type === "phone") setPhone(value);
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{10,15}$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;

    setErrors({ email: "", phone: "" });

    if (!emailRegex.test(email)) {
      isValid = false;
      setErrors((prev) => ({ ...prev, email: "Invalid email address" }));
      toast.error("Please enter a valid email.");
    }

    if (!phoneRegex.test(phone)) {
      isValid = false;
      setErrors((prev) => ({
        ...prev,
        phone: "Phone number must be between 10 and 15 digits.",
      }));
      toast.error("Please enter a valid phone number (between 10 and 15 digits).");
    }

    if (!name) {
      isValid = false;
      toast.error("Please fill in your name.");
    }

    if (isValid) {
      toast.success("Form submitted successfully!");
      handleCloseModal();
    }
  };

  const resetFormFields = () => {
    setName("");
    setEmail("");
    setPhone("");
    setErrors({ email: "", phone: "" });
  };

  return (
    <div id="home" className="hero-background">
      <ToastContainer className="toast-container" />
      <Container className="text-white text-center hero-container">
        <Row className="align-items-center justify-content-center">
          <Col md={8}>
            <FaHandsHelping className="hero-icon mb-4" />
            <h1 className="hero-title">Help Us Change Lives</h1>
            <p className="hero-subtitle">
              Join our mission to make the world a better place for everyone.
            </p>
            <Button className="cta-button" onClick={handleShowModal}>
              Join Us Now
            </Button>
          </Col>
        </Row>

        <Modal
          show={showModal}
          onHide={handleCloseModal}
          centered
          className="custom-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title>Volunteer Application</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-4">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => handleInputChange(e, "name")}
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => handleInputChange(e, "email")}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => handleInputChange(e, "phone")}
                  isInvalid={!!errors.phone}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.phone}
                </Form.Control.Feedback>
              </Form.Group>

              <Button className="submit-button w-100" type="submit">
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