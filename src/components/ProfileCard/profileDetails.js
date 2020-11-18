import React from 'react';
import { Form, Row, Col, } from 'react-bootstrap';

export default function ProfileDetails() {

    return (
        <Form>
            <Form.Group as={Row} controlId="username">
                <Form.Label column sm="2">
                    User Name
                </Form.Label>
                <Col sm="9">
                    <Form.Control type="text" placeholder="Username..." />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="email">
                <Form.Label column sm="2">
                    Email Address
                </Form.Label>
                <Col sm="9">
                    <Form.Control type="text" placeholder="Email address ..." />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="phoneNumber">
                <Form.Label column sm="2">
                    Phone number
            </Form.Label>
                <Col sm="9">
                    <Form.Control type="text" placeholder="Phone Number " />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="gender">
                <Form.Label column sm="2">
                    Gender & sexuality
            </Form.Label>
                <Col sm="9">
                    <Form.Control type="text" placeholder=" Gender " />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="age">
                <Form.Label column sm="2">
                    Age
            </Form.Label>
                <Col sm="9">
                    <Form.Control type="text" placeholder="Age " />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="budget">
                <Form.Label column sm="2">
                    Budget
            </Form.Label>
                <Col sm="9">
                    <Form.Control type="text" placeholder="Age " />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="city">
                <Form.Label column sm="2">
                    City
            </Form.Label>
                <Col sm="9">
                    <Form.Control type="text" placeholder="Age " />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="moveInDate">
                <Form.Label column sm="2">
                    Move in Date
            </Form.Label>
                <Col sm="9">
                    <Form.Control type="text" placeholder="Age " />
                </Col>
            </Form.Group>
        </Form>
    )
}