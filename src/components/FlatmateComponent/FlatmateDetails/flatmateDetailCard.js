import React from 'react';
import '../../../styles/flatmate.css';
import { Card } from 'react-bootstrap';

function FlatmateDetailCard(props) {
    const id = props.flatmateID;
    const url = 'https://1.bp.blogspot.com/-emHO_9HVxGU/WZazwgy8_rI/AAAAAAAAAhs/3Zg7j4TZAlM2gMovjXK4FAEf3ju55hmEwCLcBGAs/s1600/18881967_131782964052220_5128435195745790304_n.jpg';
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={url}/>
                <Card.Body>
                    <Card.Title>User Name</Card.Title>
                    <Card.Text>
                        Gender Age
                </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default FlatmateDetailCard;