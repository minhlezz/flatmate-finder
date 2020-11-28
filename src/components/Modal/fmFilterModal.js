import React from 'react';
import { Modal, Button, Form, Col, Row } from 'react-bootstrap';

export default function FlatmateModal(props) {

    return (
        <Modal
            {...props}
            scrollable='true'
            size='lg'
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Filters
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <Form className="modal-form">
                    {/* Radius Range */}
                    <Form.Row>
                        <Form.Group as={Col} controlId="radius">
                            <Row>
                                <Col sm="2">
                                    <Form.Label column="lg" lg={2}>Radius</Form.Label>
                                </Col>
                                <Col sm="2">
                                    <Form.Control size="lg" type="text" placeholder="20" />
                                </Col>
                                <Form.Label className="label-range">-</Form.Label>
                                <Col sm="2">
                                    <Form.Control size="lg" type="text" placeholder="20" />
                                </Col>
                            </Row>

                            <Col xs={8}>
                                <Form.Control size="lg" type="range" />
                            </Col>
                        </Form.Group>
                    </Form.Row>
                    {/* Budget Range   */}
                    <Form.Row>
                        <Form.Group as={Col} controlId="budget">
                            <Row>
                                <Col sm="2">
                                    <Form.Label column="lg" lg={2}>Budget</Form.Label>
                                </Col>
                                <Col sm="2">
                                    <Form.Control size="lg" type="text" placeholder="20" />
                                </Col>
                                <Form.Label className="label-range">-</Form.Label>
                                <Col sm="2">
                                    <Form.Control size="lg" type="text" placeholder="20" />
                                </Col>
                            </Row>
                            <Col xs={8}>
                                <Form.Control size="lg" type="range" />
                            </Col>
                        </Form.Group>
                    </Form.Row>
                    {/* Age Range */}
                    <Form.Row>
                        <Form.Group as={Col} controlId="age">
                            <Row>
                                <Col sm="2">
                                    <Form.Label column="lg" lg={2}>Age</Form.Label>
                                </Col>
                                <Col sm="2">
                                    <Form.Control size="lg" type="text" placeholder="20" />
                                </Col>
                                <Form.Label className="label-range">-</Form.Label>
                                <Col sm="2">
                                    <Form.Control size="lg" type="text" placeholder="20" />
                                </Col>
                            </Row>
                            <Col xs={8}>
                                <Form.Control size="lg" type="range" />
                            </Col>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="gender">
                            <Form.Label column="lg" lg={2}>Gender</Form.Label>
                            {['Male', 'Female', 'Others'].map((type) => (
                                <Col xs={8} key={`${type}`}>
                                    <Form.Check
                                        inline
                                        type='radio'
                                        id={`${type}`}
                                        label={`${type}`}

                                    />
                                </Col>
                            ))}
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="pets">
                            <Form.Label column="lg" lg={2}>Pets</Form.Label>
                            <Col xs={8}>
                                <Form.Control size="lg" as="select" custom>
                                    <option>Cats</option>
                                    <option>Dogs</option>
                                    <option>Birds</option>
                                    <option>Fish</option>
                                    <option>Reptiles</option>
                                </Form.Control>
                            </Col>

                        </Form.Group>
                    </Form.Row>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Cancel</Button>
                <Button onClick={props.onConfirm}>Apply</Button>
            </Modal.Footer>
        </Modal>
    )
}