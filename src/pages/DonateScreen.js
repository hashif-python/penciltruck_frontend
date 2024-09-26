import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Modal,
  FloatingLabel,
  Form,
} from "react-bootstrap";
import "../assets/css/DonatePage.css";
import { ToastContainer, toast } from "react-toastify";


function DonatePage() {
  const [showBookModal, setShowBookModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookDonationForm, setBookDonationForm] = useState({
    name: "",
    studyMaterialType: "",
    description: "",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    contactInfo: "",
  });

  const handleBookModalOpen = () => setShowBookModal(true);
  const handlePaymentModalOpen = () => setShowPaymentModal(true);
  const handleBookModalClose = () => setShowBookModal(false);
  const handleModalClose = () => {
    setShowBookModal(false);
    setShowPaymentModal(false);
  };

  const handleBookFormChange = (e) => {
    const { name, value } = e.target;
    setBookDonationForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  function getCsrfToken() {
    let csrfToken = null;
    if (document.cookie && document.cookie !== "") {
      document.cookie.split(";").forEach((cookie) => {
        const trimmedCookie = cookie.trim();
        if (trimmedCookie.startsWith("csrftoken=")) {
          csrfToken = trimmedCookie.substring("csrftoken=".length, trimmedCookie.length);
        }
      });
    }
    return csrfToken;
  }

  const handleBookFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const csrfToken = getCsrfToken(); // Get CSRF token

    try {
      const response = await fetch("https://www.penciltruck.com/api/study-material-donations/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": csrfToken, // Include CSRF token
        },
        body: JSON.stringify({
          name: bookDonationForm.name,
          study_material_type: bookDonationForm.studyMaterialType,
          description: bookDonationForm.description,
          street_address: bookDonationForm.streetAddress,
          city: bookDonationForm.city,
          state: bookDonationForm.state,
          postal_code: bookDonationForm.postalCode,
          country: bookDonationForm.country,
          mobile_no: bookDonationForm.contactInfo,  // Use contactInfo as mobile_no
        }),
      });

      if (response.ok) {
        toast.success("Study material donation submitted successfully!", {
          position: "top-right",
          autoClose: 3000,
        });
        setIsSubmitting(false);

        // Reset form
        setBookDonationForm({
          name: "",
          studyMaterialType: "",
          description: "",
          streetAddress: "",
          city: "",
          state: "",
          postalCode: "",
          country: "",
          contactInfo: "",
        });
        handleBookModalClose();
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || "Failed to submit donation form.", {
          position: "top-right",
          autoClose: 3000,
        });
        setIsSubmitting(false);
      }
    } catch (error) {
      toast.error("An error occurred while submitting the form. Please try again.", {
        position: "top-right",
        autoClose: 3000,
      });
      setIsSubmitting(false);
    }
  };

  return (
    <div className="donate-page">
      <ToastContainer
        className="toast-container"
        position="top-right"
        style={{ position: "fixed", top: "20px", right: "20px", zIndex: 9999 }}
      />
      <Container
        className="d-flex vh-100 justify-content-center align-items-center"
        fluid
      >
        <Row className="justify-content-center">
          <Col md={4} className="mb-4">
            <Card className="donation-card shadow-lg">
              <Card.Body className="text-center">
                <div className="icon-container">
                  <i className="fas fa-book icon"></i>
                </div>
                <Card.Title className="card-title-custom">Donate Study Material</Card.Title>
                <Card.Text className="card-text-custom">
                  Give the gift of knowledge by donating study materials to those in need. Your contribution can brighten a child's future.
                </Card.Text>
                <Button variant="info" className="donate-button-custom" onClick={handleBookModalOpen}>
                  Donate Study Material
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="donation-card shadow-lg">
              <Card.Body className="text-center">
                <div className="icon-container">
                  <i className="fas fa-dollar-sign icon"></i>
                </div>
                <Card.Title className="card-title-custom">Donate Money</Card.Title>
                <Card.Text className="card-text-custom">
                  Help us continue our mission by making a monetary donation. Every contribution counts and helps us reach more people.
                </Card.Text>
                <Button variant="success" className="donate-button-custom" onClick={handlePaymentModalOpen}>
                  Donate Money
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Study Material Donation Modal */}
        <Modal
          show={showBookModal}
          onHide={handleBookModalClose}
          centered
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Donate Study Material</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleBookFormSubmit}>
              <FloatingLabel
                controlId="nameInput"
                label="Your Name"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={bookDonationForm.name}
                  onChange={handleBookFormChange}
                  required
                />
              </FloatingLabel>

              {/* Study Material Type */}
              <Form.Select
                name="studyMaterialType"
                value={bookDonationForm.studyMaterialType}
                onChange={handleBookFormChange}
                required
                className="mb-3"
              >
                <option value="">Select Study Material Type</option>
                <option value="Books">Books</option>
                <option value="Notebooks">Notebooks</option>
                <option value="Stationery">Stationery</option>
                <option value="Other">Other</option>
              </Form.Select>

              {/* Description Box */}
              <FloatingLabel
                controlId="descriptionInput"
                label="Description of Study Material"
                className="mb-3"
              >
                <Form.Control
                  as="textarea"
                  name="description"
                  placeholder="Describe the study materials"
                  value={bookDonationForm.description}
                  onChange={handleBookFormChange}
                  style={{ height: '100px' }}
                  required
                />
              </FloatingLabel>

              {/* Pickup Location */}
              <h5 className="mb-3">Pickup Location</h5>

              <FloatingLabel
                controlId="streetAddressInput"
                label="Street Address"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  name="streetAddress"
                  placeholder="123 Main St"
                  value={bookDonationForm.streetAddress}
                  onChange={handleBookFormChange}
                  required
                />
              </FloatingLabel>
              <FloatingLabel controlId="cityInput" label="City" className="mb-3">
                <Form.Control
                  type="text"
                  name="city"
                  placeholder="City"
                  value={bookDonationForm.city}
                  onChange={handleBookFormChange}
                  required
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="stateInput"
                label="State/Province"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  name="state"
                  placeholder="State/Province"
                  value={bookDonationForm.state}
                  onChange={handleBookFormChange}
                  required
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="postalCodeInput"
                label="Postal Code"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  name="postalCode"
                  placeholder="Postal Code"
                  value={bookDonationForm.postalCode}
                  onChange={handleBookFormChange}
                  required
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="countryInput"
                label="Country"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  name="country"
                  placeholder="Country"
                  value={bookDonationForm.country}
                  onChange={handleBookFormChange}
                  required
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="mobileNoInput"
                label="Mobile No"
                className="mb-3"
              >
                <Form.Control
                  type="tel"
                  name="contactInfo"
                  placeholder="Enter Mobile No"
                  value={bookDonationForm.contactInfo}
                  onChange={handleBookFormChange}
                  pattern="[0-9]{10}"
                  required
                />
                <Form.Text className="text-muted">
                  Enter your 10-digit mobile number.
                </Form.Text>
              </FloatingLabel>

              <Button
                variant="primary"
                type="submit"
                className="w-100 py-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Donation"}
              </Button>
            </Form>
          </Modal.Body>
        </Modal>

        {/* Payment Donation Modal */}
        <Modal show={showPaymentModal} onHide={handleModalClose} centered>
          <Modal.Header closeButton className="modal-header-custom">
            <Modal.Title className="modal-title-custom">Donate Money</Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal-body-custom">
            <Form>
              <Form.Group className="mb-4">
                <Form.Label className="form-label-custom">Full Name</Form.Label>
                <Form.Control
                  className="form-control-custom"
                  type="text"
                  placeholder="John Doe"
                  required
                />
                <Form.Text className="text-muted">
                  Enter the name as it appears on your card.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label className="form-label-custom">Card Number</Form.Label>
                <Form.Control
                  className="form-control-custom"
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  required
                  maxLength="16"
                />
                <Form.Text className="text-muted">
                  Your card number will remain secure.
                </Form.Text>
              </Form.Group>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-4">
                    <Form.Label className="form-label-custom">
                      Expiry Date
                    </Form.Label>
                    <Form.Control
                      className="form-control-custom"
                      type="text"
                      placeholder="MM/YY"
                      required
                      maxLength="5"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-4">
                    <Form.Label className="form-label-custom">CVV</Form.Label>
                    <Form.Control
                      className="form-control-custom"
                      type="password"
                      placeholder="123"
                      required
                      maxLength="3"
                    />
                    <Form.Text className="text-muted">
                      3 digits on the back of your card.
                    </Form.Text>
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-4">
                <Form.Label className="form-label-custom">
                  Billing Address
                </Form.Label>
                <Form.Control
                  className="form-control-custom"
                  type="text"
                  placeholder="1162872 India"
                  required
                />
              </Form.Group>

              <Button
                variant="success"
                type="submit"
                className="w-100 pay-button-custom"
              >
                Submit Payment
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
}

export default DonatePage;
