import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image, Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import "../assets/css/Gallery.css";
// Importing images
import image1 from "../assets/images/gal1.jpeg";
import image2 from "../assets/images/gal2.jpeg";
import image3 from "../assets/images/gal3.jpeg";
import image4 from "../assets/images/gal4.jpeg";

const Gallery = () => {
  const [eventData, setEventData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const galleryData = [
      {
        id: 1,
        title: "Summer Tour 2023",
        description: "Unforgettable moments from our summer adventure",
        images: [image1, image2],
      },
      {
        id: 2,
        title: "Winter Retreat",
        description: "Cozy gatherings and snowy landscapes",
        images: [image3, image4],
      },
      {
        id: 3,
        title: "Spring Festival",
        description: "Colorful celebrations of nature's renewal",
        images: [image2, image3],
      },
    ];

    setEventData(galleryData);
  }, []);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setCurrentImageIndex(0);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedEvent(null);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? selectedEvent.images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === selectedEvent.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const navigateToFullGallery = () => {
    navigate("/gallery");
  };

  return (
    <Container className="gallery-section mt-5">
      <h2 className="gallery-title text-center mb-4">Our Gallery</h2>
      <Row className="gallery-row">
        {eventData.map((event) => (
          <Col key={event.id} xs={12} sm={6} md={4} className="mb-4">
            <div className="event-card" onClick={() => handleEventClick(event)}>
              <div className="event-image-container">
                <Image src={event.images[0]} alt={event.title} fluid />
                <div className="event-overlay">
                  <FaSearch className="search-icon" />
                </div>
              </div>
              <div className="event-info">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
      <div className="d-flex justify-content-center mt-4">
        <Button variant="primary" onClick={navigateToFullGallery}>
          View More
        </Button>
      </div>

      <Modal
        show={showModal}
        onHide={handleCloseModal}
        size="lg"
        centered
        className="gallery-modal"
      >
        <Modal.Header>
          <Modal.Title>{selectedEvent?.title}</Modal.Title>
          <button className="close-button" onClick={handleCloseModal}>
            <FaTimes />
          </button>
        </Modal.Header>
        <Modal.Body>
          {selectedEvent && (
            <div className="image-navigation">
              <button className="nav-button prev" onClick={handlePrevImage}>
                <FaChevronLeft />
              </button>
              <Image
                src={selectedEvent.images[currentImageIndex]}
                alt={`Image ${currentImageIndex + 1}`}
                fluid
              />
              <button className="nav-button next" onClick={handleNextImage}>
                <FaChevronRight />
              </button>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <p className="event-description">{selectedEvent?.description}</p>
          <p className="image-counter">
            Image {currentImageIndex + 1} of {selectedEvent?.images.length}
          </p>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Gallery;
