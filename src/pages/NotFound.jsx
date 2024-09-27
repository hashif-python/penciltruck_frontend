import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../assets/css/NotFound.css'

const NotFound = () => {
  return (
    <Container fluid className="not-found-container d-flex align-items-center justify-content-center min-vh-100">
      <Row className="text-center">
        <Col xs={12} className="mb-4">
          <h1 className="display-1 fw-bold text-primary">404</h1>
          <div className="clip-text">Page Not Found</div>
        </Col>
        <Col xs={12} className="mb-4">
          <p className="fs-4 text-secondary">We're sorry, the page you requested could not be found.</p>
        </Col>
        <Col xs={12}>
          <Button as={Link} to="/" variant="primary" size="lg" className="pulse-button">
            Return to Homepage
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;