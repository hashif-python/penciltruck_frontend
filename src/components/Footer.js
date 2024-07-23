import React from 'react';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope, FaHeart } from 'react-icons/fa';
import logo from '../assets/images/logo.png';
import '../assets/css/Footer.css'; // Custom CSS for additional styling

function Footer() {
    return (
        <footer id="contact" className="footer text-light" >
            <Container className="py-5">
                <Row>
                    <Col md={4} className="footer-brand">
                        <Image width={'30px'} src={logo} alt="NGO Logo" fluid />
                        <span className="ml-2">Pencil Truck</span>
                        <p className="mt-3">
                            Pencil Truck strives to empower children through education, helping them rise above their economic constraints.
                        </p>
                    </Col>
                    <Col md={2}>
                        <h5 className="footer-heading">Navigation</h5>
                        <ul className="list-unstyled">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <h5 className="footer-heading">Contact</h5>
                        <ul className="list-unstyled contact-icons">
                            <li><FaMapMarkerAlt /> IWA INDIA FOUNDATION<br />7/659 PERUMBIL QUARTERS<br />PARAMMAL ROAD<br /> RAMANATTUKARA <br />KOZHIKODE, KERALA, 673633</li>
                            <li><FaPhone /> +91 8086 660 088</li>
                            {/*<li><FaEnvelope /> contact@ngo.com</li>*/}
                        </ul>
                    </Col>
                    <Col md={3}>
                        <h5 className="footer-heading">Follow Us</h5>
                        <div className="social-icons">
                            <a href="https://facebook.com" className="me-2"><FaFacebook /></a>
                            <a href="https://twitter.com" className="me-2"><FaTwitter /></a>
                            <a href="https://instagram.com"><FaInstagram /></a>
                            <a href="https://linkedin.com" className="ms-2"><FaLinkedin /></a>
                        </div>
                        <h5 className="footer-heading mt-4">Newsletter</h5>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Control type="email" placeholder="Enter email" className="newsletter-input" />
                                <Button variant="outline-light" type="submit" className="mt-2">Subscribe</Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center mt-4">
                        <p>© {new Date().getFullYear()} Pencil Truck - All rights reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
