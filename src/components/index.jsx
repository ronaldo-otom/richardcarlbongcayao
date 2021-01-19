// import { Button } from 'react-bootstrap';
import React from 'react'
import cover from '../assets/cover.jpg';
import './style.css'

function Index() {
    return (
        <div className="imageWrapper">         
            <img src={cover} alt="" height="912"/>
            <div className="centeredBackground" />
            <div className="centered">
                <h1>Photography | Videography</h1>
                <p>Today’s special moments. Tomorrows priceless treasures.</p>
            </div>
        </div>
    )
}

export default Index
