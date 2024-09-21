import React from 'react';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaHeart } from 'react-icons/fa';
import logo from '../assets/images/logo.png';
import '../assets/css/Footer.css'; // Custom CSS for additional styling

function Footer() {
    return (
        <footer id="contact" className="footer text-light" >
            <Container className="py-5">
                <Row>
                    {/* Brand and About */}
                    <Col md={4} className="footer-brand mb-4 mb-md-0">
                        <Image width={'40px'} src={logo} alt="NGO Logo" fluid />
                        <span className="ml-2 brand-title">Pencil Truck</span>
                        <p className="mt-3 text">
                            
                        </p>
                    </Col>
                    
                    {/* Navigation Links */}
                    <Col md={2} className="mb-4 mb-md-0">
                        <h5 className="footer-heading">Navigation</h5>
                        <ul className="list-unstyled">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </Col>

                    {/* Contact Information */}
                    <Col md={3} className="mb-4 mb-md-0">
                        <h5 className="footer-heading">Contact</h5>
                        <ul className="list-unstyled contact-icons">
                            <li><FaMapMarkerAlt /> IWA INDIA FOUNDATION<br />7/659 PERUMBIL QUARTERS<br />PARAMMAL ROAD<br /> RAMANATTUKARA <br />KOZHIKODE, KERALA, 673633</li>
                            <li><FaPhone /> +91 8086 660 088</li>
                        </ul>
                    </Col>

                    {/* Social Media and Newsletter */}
                    <Col md={3}>
                        <h5 className="footer-heading">Follow Us</h5>
                        <div className="social-icons d-flex">
                            <a href="https://facebook.com" className="me-3 social-icon"><FaFacebook /></a>
                            <a href="https://twitter.com" className="me-3 social-icon"><FaTwitter /></a>
                            <a href="https://instagram.com" className="me-3 social-icon"><FaInstagram /></a>
                            <a href="https://linkedin.com" className="me-3 social-icon"><FaLinkedin /></a>
                        </div>
                        <h5 className="footer-heading mt-4">Newsletter</h5>
                        <Form>
                            <Form.Group className="mb-3 d-flex newsletter-form">
                                <Form.Control 
                                    type="email" 
                                    placeholder="Enter email" 
                                    className="newsletter-input me-2" 
                                />
                                <Button variant="outline-light" type="submit">
                                    Subscribe
                                </Button>
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

