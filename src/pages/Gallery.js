import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image, Modal } from 'react-bootstrap';
import { FaSearch, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../assets/css/GalleryPage.css';

// Importing images


function Gallery() {
    const [eventData, setEventData] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch('https://www.penciltruck.com/api/gallery');
                const data = await response.json();
                const formattedData = data.data.map(item => ({
                    description: item.title,
                    images: [
                        { id: item.id, src: item.image1, alt: 'Image 1', group: item.id },
                        item.image2 && { id: item.id + 1, src: item.image2, alt: 'Image 2', group: item.id },
                        item.image3 && { id: item.id + 2, src: item.image3, alt: 'Image 3', group: item.id },
                        item.image4 && { id: item.id + 3, src: item.image4, alt: 'Image 4', group: item.id }
                    ].filter(Boolean) // Remove undefined or null entries
                }));

                setEventData(formattedData);
            } catch (error) {
                console.error("Error fetching images:", error);
            }
        };

        fetchImages();



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

    return (
        <div className="gallery-page">
            <Container>
                <h1 className="gallery-title">Our Gallery</h1>
                <Row className="gallery-row">
                    {eventData.map((event) => (
                        <Col key={event.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
                            <div className="event-card" onClick={() => handleEventClick(event)}>
                                <div className="event-image-container">
                                    <Image src={event.images[0].src} alt={event.title} fluid />
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
            </Container>

            <Modal show={showModal} onHide={handleCloseModal} size="lg" centered className="gallery-modal">
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
                                src={selectedEvent.images[currentImageIndex].src}
                                alt={selectedEvent.images[currentImageIndex].alt}
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
                    <p className="image-counter">Image {currentImageIndex + 1} of {selectedEvent?.images.length}</p>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Gallery;