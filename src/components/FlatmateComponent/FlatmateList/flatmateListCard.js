import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BiMessageAltDetail } from 'react-icons/bi';
import cardStyles from './cardStyles';

function FlatmateListCard(props) {
    const url = 'https://www.w3schools.com/w3images/avatar2.png';
    const classes = cardStyles;
    const { id, username, budget, age, gender, moveInDate } = props.userData;
    const userContext = props.userContext;

    return (
        <>
            <Card
                style={classes.root}
            >
                <Card.Img style={classes.image} src={url} />
                <Card.Body style={classes.body}>
                    <Card.Title ><strong>{username}</strong></Card.Title>
                    <Card.Text> {age}{' '}{gender} </Card.Text>
                    <Card.Title>${budget}</Card.Title>
                    <Card.Text>Melbourn, VIC, Australia </Card.Text>
                    <Card.Text><strong>MoveInDate</strong> {moveInDate}</Card.Text>
                    {userContext?.userId === id && (
                        <Button className="btn-fmCard" as={Link} to={`/flatmate/${id}`} >View</Button>
                    )}
                    <Card.Text> Phone Verified </Card.Text>
                    <Card.Text> Phone Verified </Card.Text>
                    <Button style={classes.btn} className="sort-btn">
                        <BiMessageAltDetail style={classes.icon} />
                    </Button>
                </Card.Body>

            </Card>

        </>
    )
}

export default FlatmateListCard;