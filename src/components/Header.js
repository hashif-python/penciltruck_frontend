import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Image } from "react-bootstrap";
import "../assets/css/Navigation.css"; // Custom CSS for additional styling
import logo from "../assets/images/logo.png";

function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`custom-navbar ${scrolled ? "navbar-scrolled" : ""}`}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <Image width={"30px"} src={logo} alt="Logo" fluid />
          <span className="ml-2 brand-title">Pencil Truck</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ml-auto">
            <Nav.Link href="/" className="nav-item">
              Home
            </Nav.Link>
            <Nav.Link href="/#about" className="nav-item">
              About
            </Nav.Link>
            <Nav.Link href="/#projects" className="nav-item">
              Projects
            </Nav.Link>
            <Nav.Link href="/#gallery" className="nav-item">
              Gallery
            </Nav.Link>
            <Nav.Link href="/#contact" className="nav-item">
              Contact
            </Nav.Link>
            <Nav.Link href="/#donate" className="nav-item nav-donate">
              Donate Now
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
