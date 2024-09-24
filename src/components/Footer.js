import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light py-4 footer-gradient">
      <Container>
        <Row className="gx-5 gy-4">
          <Col lg={3} md={6}>
            <h6 className="text-primary mb-3">Pencil Truck</h6>
            <p className="small mb-2 text-light-50">
              Empowering communities through education and sustainable development.
            </p>
            <div className="d-flex social-icons">
              <a href="#" className="text-light me-3"><FaFacebook size={18} /></a>
              <a href="#" className="text-light me-3"><FaTwitter size={18} /></a>
              <a href="#" className="text-light me-3"><FaInstagram size={18} /></a>
              <a href="#" className="text-light"><FaLinkedin size={18} /></a>
            </div>
          </Col>
          <Col lg={2} md={6}>
            <h6 className="text-primary mb-3">Quick Links</h6>
            <ul className="list-unstyled small footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </Col>
          <Col lg={4} md={6}>
            <h6 className="text-primary mb-3">Contact Us</h6>
            <ul className="list-unstyled small text-light-50">
              <li className="mb-2">
                <FaMapMarkerAlt className="me-2 text-primary" />
                IWA INDIA FOUNDATION, 7/659 PERUMBIL QUARTERS, PARAMMAL ROAD, RAMANATTUKARA, KOZHIKODE, KERALA, 673633
              </li>
              <li className="mb-2">
                <FaPhone className="me-2 text-primary" />
                +91 8086 660 088
              </li>
              <li>
                <FaEnvelope className="me-2 text-primary" />
                info@penciltruck.org
              </li>
            </ul>
          </Col>
          <Col lg={3} md={6}>
            <h6 className="text-primary mb-3">Newsletter</h6>
            <p className="small mb-2 text-light-50">Stay updated with our latest news and events.</p>
            <Form className="footer-form">
              <Form.Group className="mb-2" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" size="sm" className="bg-transparent text-light border-light" />
              </Form.Group>
              <Button variant="primary" type="submit" size="sm" className="w-100">
                Subscribe
              </Button>
            </Form>
          </Col>
        </Row>
        <hr className="my-4 bg-light opacity-25" />
        <Row>
          <Col className="text-center">
            <p className="small mb-0 text-light-50">
              © {currentYear} Pencil Truck. All rights reserved. | Made with <span className="text-danger">❤</span> by Pencil Truck Team
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;