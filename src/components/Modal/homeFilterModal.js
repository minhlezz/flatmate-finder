import React from 'react';
import { Modal, Button, Form, Col, Row } from 'react-bootstrap';



export default function HomeModal(props) {

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
                                    <Form.Label column="lg" lg={3}>Radius</Form.Label>
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
                                    <Form.Label column="lg" lg={3}>Budget</Form.Label>
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
                        <Form.Group as={Col} controlId="bedrooms">
                            <Form.Label column="lg" lg={3}>BedRooms</Form.Label>
                            {['Studio', '1 bedrooms', '2 bedrooms', '3 bedrooms', '4 bedrooms'].map((type) => (
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
                        <Form.Group as={Col} controlId="bedrooms">
                            <Form.Label column="lg" lg={3}>Bathrooms    </Form.Label>
                            {['1', '2', '3 ', '4 +'].map((type) => (
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
                            <Form.Label column="lg" lg={3}>Flat Amenities</Form.Label>
                            <Col xs={8}>
                                <Form.Control size="lg" as="select" custom>
                                    <option>Security</option>
                                    <option>High Rise</option>
                                    <option>Elevator</option>
                                    <option>Internet</option>
                                    <option>Garage</option>
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
    );
}