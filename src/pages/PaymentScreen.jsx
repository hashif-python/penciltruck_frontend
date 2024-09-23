import React, { useState } from "react";
import { Container, Row, Col, Button, Form, Card } from "react-bootstrap";
import "../assets/css/Payment.css";

function PaymentScreen() {
  const [paymentDetails, setPaymentDetails] = useState({
    fullName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    billingAddress: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    console.log("Payment Details Submitted:", paymentDetails);
  };

  return (
    <div className="payment-page">
      <Container className="payment-container">
        <Row className="justify-content-center">
          <Col md={6}>
            <Card className="p-5 shadow-lg payment-card">
              <h3 className="mb-4 text-center text-uppercase payment-title">
                Secure Payment
              </h3>
              <Form onSubmit={handlePaymentSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label className="form-label">Full Name</Form.Label>
                  <Form.Control
                    className="form-input"
                    type="text"
                    name="fullName"
                    placeholder="John Doe"
                    value={paymentDetails.fullName}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="form-label">Card Number</Form.Label>
                  <Form.Control
                    className="form-input"
                    type="text"
                    name="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    value={paymentDetails.cardNumber}
                    onChange={handleInputChange}
                    required
                    maxLength="16"
                  />
                </Form.Group>

                <Row>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label className="form-label">
                        Expiry Date
                      </Form.Label>
                      <Form.Control
                        className="form-input"
                        type="text"
                        name="expiryDate"
                        placeholder="MM/YY"
                        value={paymentDetails.expiryDate}
                        onChange={handleInputChange}
                        required
                        maxLength="5"
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label className="form-label">CVV</Form.Label>
                      <Form.Control
                        className="form-input"
                        type="text"
                        name="cvv"
                        placeholder="123"
                        value={paymentDetails.cvv}
                        onChange={handleInputChange}
                        required
                        maxLength="3"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label className="form-label">
                    Billing Address
                  </Form.Label>
                  <Form.Control
                    className="form-input"
                    type="text"
                    name="billingAddress"
                    placeholder="1162872 India"
                    value={paymentDetails.billingAddress}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="w-100 pay-button"
                >
                  Pay Now
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PaymentScreen;
