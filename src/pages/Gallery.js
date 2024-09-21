import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image, Modal, Carousel } from 'react-bootstrap';
import { FaSearch, FaTimes } from 'react-icons/fa';
import '../assets/css/GalleryPage.css';

// Importing images from the local assets folder
import image1 from "../assets/images/gal1.jpeg";
import image2 from "../assets/images/gal2.jpeg";
import image3 from "../assets/images/gal3.jpeg";
import image4 from "../assets/images/gal4.jpeg";

function Gallery() {
    const [imageData, setImageData] = useState([]);
    const [show, setShow] = useState(false);
    const [selectedGroup, setSelectedGroup] = useState([]);
    const [selectedDescription, setSelectedDescription] = useState('');

    useEffect(() => {
        const galleryData = [
            {
                description: 'Gallery Item 1',
                images: [
                    { id: 1, src: image1, alt: 'Image 1', group: 1 },
                    { id: 2, src: image2, alt: 'Image 2', group: 1 }
                ]
            },
            {
                description: 'Gallery Item 2',
                images: [
                    { id: 3, src: image3, alt: 'Image 3', group: 2 },
                    { id: 4, src: image4, alt: 'Image 4', group: 2 }
                ]
            }
        ];

        setImageData(galleryData);
    }, []);

    const handleClose = () => setShow(false);

    const handleShow = (groupIndex) => {
        setSelectedGroup(imageData[groupIndex].images);
        setSelectedDescription(imageData[groupIndex].description);
        setShow(true);
    };

    return (
        <div className="gallery-page">
            <Container fluid className="gallery-container">
                <h2 className="text-center gallery-title animate-fade-in">
                    Our Gallery
                </h2>
                <Row className="justify-content-center gallery-row">
                    {imageData.map((group, index) => (
                        <Col xs={12} sm={6} md={4} lg={3} className="mb-4" key={index}>
                            <div 
                                className="image-container interactive"
                                onClick={() => handleShow(index)}
                            >
                                {group.images[0] && (
                                    <Image src={group.images[0].src} alt={group.images[0].alt} className="gallery-image" thumbnail />
                                )}
                                <div className="overlay">
                                    <div className="text">
                                        <FaSearch className="search-icon" />
                                        <p>{group.description}</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>

                <Modal show={show} onHide={handleClose} size="lg" centered className="gallery-modal">
                    <Modal.Header>
                        <Modal.Title>{selectedDescription}</Modal.Title>
                        <button className="close-button" onClick={handleClose}>
                            <FaTimes className="close-icon" />
                        </button>
                    </Modal.Header>
                    <Carousel interval={null} className="gallery-carousel">
                        {selectedGroup.map((item, idx) => (
                            <Carousel.Item key={idx}>
                                <img
                                    className="d-block w-100"
                                    src={item.src}
                                    alt={item.alt}
                                />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Modal>
            </Container>
        </div>
    );
}

export default Gallery;