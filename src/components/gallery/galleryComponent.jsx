import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import './style.css';

function GalleryComponent() {
    return (
        <div className="gallerySection">
          <h1>Gallery</h1>
            <Row>
                <Col>
                    <h3>Photography</h3>
                    <hr/>
                    <div className="photography">
                        <p>Street Shots</p>
                    </div>
                </Col>
                <Col>
                    <h3>Videography</h3>
                    <hr/>                   
                </Col>
            </Row>
        </div>
    )
}

export default GalleryComponent
