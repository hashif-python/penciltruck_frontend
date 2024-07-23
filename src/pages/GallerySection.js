import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image, Modal, Carousel, Button } from 'react-bootstrap';
import '../assets/css/Gallery.css';
import { useNavigate } from 'react-router-dom';

function Gallery() {
    const [imageData, setImageData] = useState([]);
    const [show, setShow] = useState(false);
    const [selectedGroup, setSelectedGroup] = useState([]);
    const [selectedDescription, setSelectedDescription] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchGalleryData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/gallery');
                const data = await response.json();
                const formattedData = data.data.map(item => ({
                    description: item.title,
                    images: [
                        { id: item.id, src: item.image1, alt: 'Image 1', group: item.id },
                        item.image2 && { id: item.id + 1, src: item.image2, alt: 'Image 2', group: item.id },
                        item.image3 && { id: item.id + 2, src: item.image3, alt: 'Image 3', group: item.id },
                        item.image4 && { id: item.id + 3, src: item.image4, alt: 'Image 4', group: item.id }
                    ].filter(Boolean) // This will remove any undefined entries from the images array
                }));
                setImageData(formattedData);
                console.log('Gallery data:', formattedData);
            } catch (error) {
                console.error('Failed to fetch gallery data:', error);
            }
        };
        fetchGalleryData();
    }, []);

    const handleClose = () => setShow(false);

    const handleShow = (groupIndex) => {
        setSelectedGroup(imageData[groupIndex].images);
        setSelectedDescription(imageData[groupIndex].description);
        setShow(true);
    };

    const navigateToFullGallery = () => {
        navigate('/gallery');
    };

    return (
        <Container id="gallery" className="mt-5">
            <h2 className="text-center mb-4">Our Gallery</h2>
            <Row>
                {imageData.map((group, index) => (
                    <Col xs={12} md={6} lg={4} className="mb-4" key={index} onClick={() => handleShow(index)}>
                        <div className="image-container">
                            {group.images[0] ? (
                                <Image src={group.images[0].src} alt={group.images[0].alt} className="gallery-image" thumbnail />
                            ) : (
                                <div className="gallery-placeholder">No image available</div>
                            )}
                        </div>
                        <p>{group.description}</p>
                    </Col>
                ))}
            </Row>
            <div className="d-flex justify-content-center mt-4">
                <Button variant="primary" onClick={navigateToFullGallery}>View More</Button>
            </div>

            <Modal show={show} onHide={handleClose} size="lg" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Image Details</Modal.Title>
                </Modal.Header>
                <Carousel>
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
                <Modal.Body>
                    <p className="text-center">{selectedDescription}</p>
                </Modal.Body>
            </Modal>
        </Container>
    );
}

export default Gallery;
