import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';
import '../assets/css/DonateSection.css';

function DonateSection() {
    

    return (
        <Container id="donate" className="donate-section">
            <Row className="align-items-center justify-content-center">
                <Col md={8} className="text-center">
                    <h2>Donate Us</h2>
                    <p>Join our team and make a difference by helping us extend our reach and impact. Your skills and passion can drive real change in the lives of many. Whether it's through teaching, fundraising, or event planning, your contribution will be valued and vital.</p>
                    <Button className="donate-button mb-4" >Donate Now</Button>
                </Col>
            </Row>

            
        </Container>
    );
}

export default DonateSection;
