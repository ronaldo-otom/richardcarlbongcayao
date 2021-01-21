import React from 'react'
import { Button, Container } from 'react-bootstrap';
import cover from '../assets/cover.jpg';
import './style.css'
import GalleryComponent from './gallery/galleryComponent';
import ContactComponent from './contact/contactComponent';
import BookComponent from './book/bookComponent';

function Index() {
    const [location, setLocation] = React.useState();
    const [activeHome, setActiveHome] = React.useState(true);
    const [activeGallery, setActiveGallery] = React.useState();
    const [activeBook, setActiveBook] = React.useState();
    const [activeContact, setActiveContact] = React.useState();
    

    const Home = () => {
        return (
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
        )
    }
    const locationSet = (path) => {
        if(path === 'home') {
            setLocation('home')
            setActiveHome(true)
            setActiveGallery(false)
            setActiveBook(false)
            setActiveContact(false)
        }else if(path === 'gallery') {
            setLocation('gallery')
            setActiveHome(false)
            setActiveGallery(true)
            setActiveBook(false)
            setActiveContact(false)
        }else if(path === 'book') {
            setLocation('book')
            setActiveHome(false)
            setActiveGallery(false)
            setActiveBook(true)
            setActiveContact(false)
        }else if(path === 'contact') {
            setLocation('contact')
            setActiveHome(false)
            setActiveGallery(false)
            setActiveBook(false)
            setActiveContact(true)
        }else {
            setLocation('home')
            setActiveHome(true)
            setActiveGallery(false)
            setActiveBook(false)
            setActiveContact(false)
        }
    }
    const renderDisplay = () => {
        if(location === 'home') {
            return <Home />
        }else if(location === 'gallery') {
            return <GalleryComponent />
        }else if(location === 'book') {
            return <BookComponent />
        }else if(location === 'contact') {
            return <ContactComponent />
        }else {
            return <Home />
        }
    }
    return (
        <div className="imageWrapper">  
            <img src={cover} alt="" className="coverImage"/>
            <div className="centeredBackground" />
            <Container>
            <div className="centeredNavigation">                
                <div className="navigation">                
                    <div>
                        <ul>
                            <li id={activeHome ? 'active' : null} onClick={() => locationSet('home')}>Home</li>
                            <li id={activeGallery ? 'active' : null} onClick={() => locationSet('gallery')}>Gallery</li>                           
                            <li id={activeBook ? 'active' : null} onClick={() => locationSet('book')}>Book Now</li>
                            <li id={activeContact ? 'active' : null} onClick={() => locationSet('contact')}>Contact</li>
                        </ul>
                    </div>   
                </div>          
            </div>
            </Container>
            {renderDisplay()} 
        </div>
    )
}

export default Index
