import React from 'react';
import { Card, Button } from 'react-bootstrap';
import cardHFStyles from '../cardHFStyles';

export default function FlatmateCard(props) {
    const url = 'https://www.w3schools.com/w3images/avatar2.png';
    const classes = cardHFStyles;
    return (
        <>
            <Card
                style={classes.root}
            >
                <Card.Img style={classes.image} src={url} />
                <Card.Body style={classes.body}>
                    <Card.Title >Pitek Oni Jr</Card.Title>
                    <Card.Text>5000$</Card.Text>
                    <Card.Text>Melbourn, VIC, Australia </Card.Text>
                    <Card.Text> Move-in-Date: Immediately </Card.Text>
                    <Card.Text> Phone Verified </Card.Text>
                    <Button variant="info" className="btn-fmCard" size="lg">View</Button>
                    <Button variant="info" className="btn-fmCard">Contact</Button>
                    <Button variant="info" className="btn-fmCard">Message</Button>
                </Card.Body>
            </Card>
        </>
    )
}

