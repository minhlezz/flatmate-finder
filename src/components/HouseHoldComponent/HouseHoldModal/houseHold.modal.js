import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Modal, Button, Form, Col, Row, Spinner } from 'react-bootstrap';
import { CREATE_HOUSEHOLD } from '../../../utils/mutation';
import { GET_HOUSEHOLDS } from '../../../utils/graphql';
import { HOME_FILTER } from '../../../utils/graphql';

function HouseHoldModal(props) {
    const [values, setValues] = useState({
        houseTitle: '',
        bed: '',
        bath: '',
        area: '',
        budget: '',
        houseDescription: '',
        houseHoldSex: ''
    });

    const [createHouseHold, { loading: newHouseLoading }] = useMutation(CREATE_HOUSEHOLD, {
        onError: (err) => {
            console.log(err);
        }


    });

    const onChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,

        });

    };
    const onSubmit = (e) => {
        e.preventDefault();
        values.area = parseFloat(values.area);
        values.budget = parseFloat(values.budget);
        values.bath = parseInt(values.bath);
        values.bed = parseInt(values.bed);

        createHouseHold({
            variables: values,
            refetchQueries: [
                { query: HOME_FILTER }
            ]
        });
        setValues('');
        props.handleClose();
    }

    if (newHouseLoading) {
        return <Spinner animation="grow" />
    }
    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Household</Modal.Title>
            </Modal.Header>
            <Form onSubmit={onSubmit}>
                <Modal.Body>
                    <Form.Group as={Row} >
                        <Form.Label column sm="2">House Title</Form.Label>
                        <Col sm="10">
                            <Form.Control
                                required
                                type="text"
                                name="houseTitle"
                                value={values.houseTitle}
                                onChange={onChange}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} >
                        <Form.Label column sm="2">Bed</Form.Label>
                        <Col sm="10">
                            <Form.Control
                                required
                                type="number"
                                name="bed"
                                value={values.bed}
                                onChange={onChange}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} >
                        <Form.Label column sm="2">Bath</Form.Label>
                        <Col sm="10">
                            <Form.Control
                                required
                                type="number"
                                name="bath"
                                value={values.bath}
                                onChange={onChange}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} >
                        <Form.Label column sm="2">Area</Form.Label>
                        <Col sm="10">
                            <Form.Control
                                required
                                type="number"
                                name="area"
                                value={values.area}
                                onChange={onChange}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} >
                        <Form.Label column sm="2">Budget</Form.Label>
                        <Col sm="10">
                            <Form.Control
                                required
                                name="budget"
                                value={values.budget}
                                onChange={onChange}
                                type="number" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} >
                        <Form.Label column sm="2">Description</Form.Label>
                        <Col sm="10">
                            <Form.Control
                                required
                                name="houseDescription"
                                value={values.houseDescription}
                                onChange={onChange}
                                as="textarea" rows={3}
                            />
                        </Col>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                     </Button>
                    <Button type='submit'>
                        Create
                     </Button>
                </Modal.Footer>
            </Form>

        </Modal>
    )
}

export default HouseHoldModal;