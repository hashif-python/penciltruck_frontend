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
import { useNavigate } from "react-router-dom";

function DonateSection() {
 
    const navigate = useNavigate();

 
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
              onClick={() => (navigate('/donate-screen'))}
            >
              Donate 
            </Button>
          
          </div>
        </Col>
      </Row>

     
    </Container>
  );
}

export default DonateSection;
