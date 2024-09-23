import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  Form,
  FloatingLabel,
} from "react-bootstrap";
import "../assets/css/DonateSection.css";

function DonateSection() {
  const [showBookModal, setShowBookModal] = useState(false);
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

  const handleBookModalClose = () => setShowBookModal(false);
  const handleBookModalShow = () => setShowBookModal(true);

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
    <Container id="donate" className="donate-section text-center py-5">
      <Row className="align-items-center justify-content-center">
        <Col md={8}>
          <h2 className="display-4 mb-4">Support Our Mission</h2>
          <p className="lead">
            Join our team and make a difference by donating. Whether it's a
            monetary contribution or books, your generosity can change lives.
            Help us expand our reach and impact.
          </p>
          <div className="d-flex justify-content-center mt-4">
            <Button
              className="donate-button mx-2 px-4 py-2"
              variant="success"
              onClick={() => (window.location.href = "/payment")}
            >
              Donate Money
            </Button>
            <Button
              className="donate-button mx-2 px-4 py-2"
              variant="info"
              onClick={handleBookModalShow}
            >
              Donate Books
            </Button>
          </div>
        </Col>
      </Row>

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
    </Container>
  );
}

export default DonateSection;
