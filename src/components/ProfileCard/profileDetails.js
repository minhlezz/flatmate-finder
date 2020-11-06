import React from 'react';
import { Form, Row, Col, } from 'react-bootstrap';

export default function ProfileDetails() {

    return (
        <Form>
            <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                    User Name
                </Form.Label>
                <Col sm="9">
                    <Form.Control type="text" placeholder="Readonly input here..." readOnly />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                    Email Address
                </Form.Label>
                <Col sm="9">
                    <Form.Control type="text" placeholder="Readonly input here..." readOnly />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                    Phone number
            </Form.Label>
                <Col sm="9">
                    <Form.Control type="text" placeholder="Readonly input here..." readOnly />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                    Gender & sexuality
            </Form.Label>
                <Col sm="9">
                    <Form.Control type="text" placeholder="Readonly input here..." readOnly />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                    Age group
            </Form.Label>
                <Col sm="9">
                    <Form.Control type="text" placeholder="Readonly input here..." readOnly />
                </Col>
            </Form.Group>



        </Form>
    )
}