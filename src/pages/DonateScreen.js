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
function DonatePage() {
  const [showBookModal, setShowBookModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookDonationForm, setBookDonationForm] = useState({
    name: "",
    classBooks: "",
    totalBooks: "",
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

  const handleBookFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      console.log("Book donation form submitted:", bookDonationForm);
      setIsSubmitting(false);
      setBookDonationForm({
        name: "",
        classBooks: "",
        totalBooks: "",
        streetAddress: "",
        city: "",
        state: "",
        postalCode: "",
        country: "",
        contactInfo: "",
      });
      handleBookModalClose();
    }, 2000);
  };

    return (
      <div className="gallery-page">
    <Container className="gallery-container">
      <Row className="justify-content-center">
  <Col md={4}>
    <Card className="donation-card shadow-lg">
      <Card.Body className="text-center">
        <div className="icon-container">
          <i className="fas fa-book icon"></i>
        </div>
        <Card.Title className="card-title-custom">Donate Books</Card.Title>
        <Card.Text className="card-text-custom">
          Give the gift of knowledge by donating books to those in need. Your contribution can brighten a child's future.
        </Card.Text>
        <Button variant="info" className="donate-button-custom" onClick={handleBookModalOpen}>
          Donate Books
        </Button>
      </Card.Body>
    </Card>
  </Col>
  <Col md={4}>
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


      {/* Book Donation Modal */}
      <Modal
        show={showBookModal}
        onHide={handleBookModalClose}
        centered
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Donate Books</Modal.Title>
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
            <FloatingLabel
              controlId="classBooksInput"
              label="Class of Books"
              className="mb-3"
            >
              <Form.Control
                type="text"
                name="classBooks"
                placeholder="Primary, Secondary, etc."
                value={bookDonationForm.classBooks}
                onChange={handleBookFormChange}
                required
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="totalBooksInput"
              label="Total Number of Books"
              className="mb-3"
            >
              <Form.Control
                type="number"
                name="totalBooks"
                placeholder="Enter number"
                value={bookDonationForm.totalBooks}
                onChange={handleBookFormChange}
                required
                min="1"
              />
            </FloatingLabel>
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
              controlId="contactInfoInput"
              label="Contact Information"
              className="mb-3"
            >
              <Form.Control
                type="text"
                name="contactInfo"
                placeholder="Email or Phone Number"
                value={bookDonationForm.contactInfo}
                onChange={handleBookFormChange}
                required
              />
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
