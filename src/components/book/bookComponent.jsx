import React from 'react'
import './style.css'
import messengerIcon from '../../assets/icons/messenger.png'

function BookComponent() {
    return (
        <div className="centeredBooking">                
            <h3>Book by Sending a Message</h3>
            <div style={{marginTop: 20}}>
                <a href="https://www.messenger.com/t/100004254185767" target="_blank"><img src={messengerIcon} alt="" height="40" /></a>
            </div>
        </div> 
    )
}

export default BookComponent
