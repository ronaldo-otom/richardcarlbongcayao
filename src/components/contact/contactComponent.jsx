import './style.css';
import React from 'react'
import { InputGroup, FormControl, Card, Button } from 'react-bootstrap';

function ContactComponent() {
    return (
        <div className="centeredContact">
            <Card style={{width: '28rem', backgroundColor: 'transparent', border: 'none'}}>
                <Card.Header>
                    <strong style={{color: 'white'}}>Contact for Inquiries</strong>
                </Card.Header>
                <Card.Body>
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm">Name</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                    </InputGroup>
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm">Email</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                    </InputGroup>
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm">Contact Number</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                    </InputGroup>
                    <div style={{textAlign: 'center'}}>
                       <Button variant="info" size="sm">Submit</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ContactComponent
