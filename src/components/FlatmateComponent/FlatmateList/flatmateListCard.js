import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './cardStyles.css';

function FlatmateListCard(props) {
    const url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbueodB3x6JeR824Io2li53ELqlplDb3Xoqw&usqp=CAU';
    const { id, username, budget, age, gender, moveInDate } = props.userData;
    return (
        <>
            <Card className="fm-card-main">
                <Card.Img src={url} />
                <Card.Body >
                    <Card.Title ><strong>{username ? username : 'Tom Fake'}</strong></Card.Title>
                    <Row>
                        <Col>
                            <Card.Text> {age ? age : '24'}{' '}{gender ? gender : 'Male'} </Card.Text>
                            <Card.Text>{budget ? '$' + budget : 'Private budget'}</Card.Text>
                            <Card.Text>Melbourn, VIC, Australia </Card.Text>
                            <Card.Text><strong>MoveInDate</strong> {moveInDate}</Card.Text>
                            <Card.Text>
                                <Icon name="checkmark" color="green" />
                                Phone Verified
                            </Card.Text>
                        </Col>
                        <Col className="card-contact" >
                            <Button className="btn-fmCard" as={Link} to={`/flatmate/${id}`} >View</Button>
                            <Icon name="inbox"
                                size="big"
                                color="color-dg"
                            />
                            <Icon name="phone"
                                size="big"
                                color="color-dg"
                            />
                            <Icon name="mail"
                                size="big"
                                color="color-dg"
                            />
                        </Col>
                    </Row>



                </Card.Body>
            </Card>

        </>
    )
}

export default FlatmateListCard;