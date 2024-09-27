import React, { useState } from "react";
import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaHandsHelping } from 'react-icons/fa';
import "../assets/css/HomeSection.css";

function HomeSection() {
    const [showModal, setShowModal] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState(""); // Store only the 10 digits of the phone number
    const [emailOtp, setEmailOtp] = useState(""); // OTP for email
    const [mobileOtp, setMobileOtp] = useState(""); // OTP for mobile
    const [isOtpSent, setIsOtpSent] = useState(false); // Track if OTPs have been sent
    const [errors, setErrors] = useState({ email: "", phone: "" });
    const [isOtpValidated, setIsOtpValidated] = useState(false); // Track if OTPs are validated

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => {
        setShowModal(false);
        resetFormFields();
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

    const handleInputChange = (e, type) => {
        const { value } = e.target;
        if (type === "name") setName(value);
        else if (type === "email") setEmail(value);
        else if (type === "phone") {
            // Limit input to 10 digits
            const phoneValue = value.replace(/\D/g, ""); // Remove non-numeric characters
            if (phoneValue.length <= 10) {
                setPhone(phoneValue);
            }
        } else if (type === "emailOtp") setEmailOtp(value);
        else if (type === "mobileOtp") setMobileOtp(value);
    };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/; // Strict 10-digit validation

    // POST the email and phone to /api/send-otp/ and handle success/failure
    const handleSendOtp = async () => {
        const fullPhoneNumber = `+91${phone}`;
        const csrfToken = getCsrfToken(); // Get CSRF token

        if (emailRegex.test(email) && phoneRegex.test(phone) && name) {
            try {
                const response = await fetch("https://www.penciltruck.com/api/send-otp/", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "X-CSRFToken": csrfToken, // Include CSRF token
                    },
                    body: JSON.stringify({
                        email,
                        phone: phone,
                    }),
                });

                if (response.ok) {
                    toast.success("OTP has been sent to your email and mobile.");
                    setIsOtpSent(true);
                } else {
                    const data = await response.json();
                    toast.error(data.message || "Failed to send OTP. Please try again.");
                }
            } catch (error) {
                toast.error("An error occurred while sending OTP. Please try again.");
            }
        } else {
            toast.error("Please fill in valid details before getting OTP.");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let isValid = true;
        const csrfToken = getCsrfToken(); // Get CSRF token

        setErrors({ email: "", phone: "" });

        // Initial validation for name, email, and phone
        if (!emailRegex.test(email)) {
            isValid = false;
            setErrors((prev) => ({ ...prev, email: "Invalid email address" }));
            toast.error("Please enter a valid email.");
        }

        if (!phoneRegex.test(phone)) {
            isValid = false;
            setErrors((prev) => ({
                ...prev,
                phone: "Phone number must be exactly 10 digits.",
            }));
            toast.error("Please enter a valid 10-digit phone number.");
        }

        if (!name) {
            isValid = false;
            toast.error("Please fill in your name.");
        }

        // Send OTPs if form is valid and OTPs are not yet sent
        if (isValid && !isOtpSent) {
            handleSendOtp();
        }

        // Validate OTPs and submit the form
        if (isOtpSent) {
            setIsOtpValidated(true);
            try {
                const response = await fetch("https://www.penciltruck.com/api/volunteer-request", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "X-CSRFToken": csrfToken, // Include CSRF token
                    },
                    body: JSON.stringify({
                        name,
                        email,
                        phone, // Only send the 10-digit phone number to the API
                        emailOtp,
                        mobileOtp,
                    }),
                });

                if (response.ok) {
                    toast.success("Form submitted successfully!");
                    handleCloseModal();
                } else if (response.status === 400) {
                    const data = await response.json();
                    toast.error(data.message || "Bad request. Please check your inputs.");
                } else {
                    toast.error("Something went wrong. Please try again.");
                }
            } catch (error) {
                toast.error("An error occurred. Please try again.");
            }
        } else if (isOtpSent && (emailOtp !== "1234" || mobileOtp !== "1234")) {
            toast.error("Invalid OTP. Please try again.");
        }
    };


    const resetFormFields = () => {
        setName("");
        setEmail("");
        setPhone("");
        setEmailOtp("");
        setMobileOtp("");
        setErrors({ email: "", phone: "" });
        setIsOtpSent(false);
        setIsOtpValidated(false);
    };

    return (
        <div id="home" className="hero-background">
            <ToastContainer
                className="toast-container"
                position="top-right"
                style={{ position: "fixed", top: "20px", right: "20px", zIndex: 9999 }}
            />
            <Container className="text-white text-center hero-container">
                <Row className="align-items-center justify-content-center">
                    <Col md={8}>
                        <FaHandsHelping className="hero-icon mb-4" />
                        <h1 className="hero-title">Help Us Change Lives</h1>
                        <p className="hero-subtitle">
                            Join our mission to make the world a better place for everyone.
                        </p>
                        <Button className="cta-button" onClick={handleShowModal}>
                            Join Us Now
                        </Button>
                    </Col>
                </Row>

                <Modal
                    show={showModal}
                    onHide={handleCloseModal}
                    centered
                    className="custom-modal"
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Volunteer Application</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        {!isOtpSent ? (
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-4">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your name"
                                        value={name}
                                        onChange={(e) => handleInputChange(e, "name")}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-4">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => handleInputChange(e, "email")}
                                        isInvalid={!!errors.email}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.email}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-4">
                                    <Form.Label>Phone Number (+91)</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your 10-digit phone number"
                                        value={phone}
                                        onChange={(e) => handleInputChange(e, "phone")}
                                        isInvalid={!!errors.phone}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.phone}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Button className="submit-button w-100" type="submit">
                                    Get OTP
                                </Button>
                            </Form>
                        ) : (
                            <Form onSubmit={handleSubmit}>
                                {/* OTP for Email */}
                                <Form.Group className="mb-4">
                                    <Form.Label>Enter OTP sent to Email</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter the 4-digit OTP for email"
                                        value={emailOtp}
                                        onChange={(e) => handleInputChange(e, "emailOtp")}
                                    />
                                </Form.Group>

                                {/* OTP for Mobile */}
                                <Form.Group className="mb-4">
                                    <Form.Label>Enter OTP sent to Mobile</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter the 4-digit OTP for mobile"
                                        value={mobileOtp}
                                        onChange={(e) => handleInputChange(e, "mobileOtp")}
                                    />
                                </Form.Group>

                                <Button className="submit-button w-100" type="submit">
                                    Validate and Submit
                                </Button>
                            </Form>
                        )}
                    </Modal.Body>
                </Modal>
            </Container>
        </div>
    );
}

export default HomeSection;
