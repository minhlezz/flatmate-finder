import React from 'react';
import { Card, Button } from 'react-bootstrap';
import CardStyles from './cardStyle';


export default function UserCard() {
  const url = 'https://1.bp.blogspot.com/-emHO_9HVxGU/WZazwgy8_rI/AAAAAAAAAhs/3Zg7j4TZAlM2gMovjXK4FAEf3ju55hmEwCLcBGAs/s1600/18881967_131782964052220_5128435195745790304_n.jpg'
  const classes = CardStyles;
  return (
    <>
      <Card style={classes.root}>
        <Card.Img variant="top" src={url} />
        <Card.Body style={classes.body}>
          <Card.Title style={classes.title}>Yu Saitama</Card.Title>
          <Button style={classes.button} variant="secondary">Upload Avatar</Button>
        </Card.Body>
      </Card>
      <Card style={classes.aboutMe}>
        <Card.Header>About Me</Card.Header>
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>

        </Card.Body>

      </Card>

    </>
  )
}