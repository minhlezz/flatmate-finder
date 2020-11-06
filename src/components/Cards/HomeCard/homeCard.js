import React from 'react';
import { Card, Button } from 'react-bootstrap';
import cardHFStyles from '../cardHFStyles';



export default function HomeCard(props) {
    const url = 'https://dhp.dreeshomes.com/cms/images/EYrud-a6KJ-Ayt63GXIVxF?scale=xxl';
    const classes = cardHFStyles;
    return (
        <>
            <Card
                style={classes.root}
            >
                <Card.Img style={classes.image} src={url} />
                <Card.Body style={classes.body}>
                    <Card.Title >Home  Title</Card.Title>
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