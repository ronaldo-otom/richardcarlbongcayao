import React from 'react'
import { Button, Container } from 'react-bootstrap';
import cover from '../assets/cover.jpg';
import './style.css'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"

function Index() {
    return (
        <div className="imageWrapper">         
            <img src={cover} alt="" className="coverImage"/>
            <div className="centeredBackground" />
            <Container>
            <div className="centeredNavigation">                
                <div className="navigation">                
                    <div>
                        <ul>
                            <li id='active'>Home</li>
                            <li><Link to="/gallery" className="link">Gallery</Link></li>                           
                            <li>Book Now</li>
                            <li>Contact</li>
                        </ul>
                    </div>   
                </div>          
            </div>
            </Container>
            <div className="centered">                
                <h1>Richard Carl Bongcayao</h1>
                <p>Photographer, Film-maker and Traveller. "Passionate in making memories"</p>                
                <div className="icons">
                    <i className="fa fa-facebook"></i>
                    <i className="fa fa-instagram"></i>
                    <i className="fa fa-youtube"></i>                   
                </div>
                <Button variant="warning" size="sm"><strong>Book Now</strong></Button>
            </div> 
        </div>
    )
}

export default Index
