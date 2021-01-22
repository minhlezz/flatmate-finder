import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';

function HouseFilterModal(props) {
    const handleCloseFilterModal = props.handleCloseFilterModal;
    const executeFilter = props.executeFilter;

    const [values, setValues] = useState({
    });
    const handleChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        setValues({
            ...values,
            [name]: value
        });
    }
    const handelSubmit = (e) => {
        e.preventDefault();
        executeFilter({
            variables: {
                ...values
            }
        })
        setValues('');
        handleCloseFilterModal();
    }


    return (

        <Modal show={props.filterModal} onHide={handleCloseFilterModal}>
            <Modal.Header closeButton>
                <Modal.Title>Household Filters</Modal.Title>
            </Modal.Header>
            <Form onSubmit={handelSubmit}>
                <Modal.Body>
                    <Form.Group as={Row} controlId="formGender">
                        <Form.Label column sm={2}>Household Sex</Form.Label>
                        <Col sm={10}>
                            <Form.Control as="select"
                                name="houseHoldSex"
                                onChange={handleChange}
                                required
                            >
                                <option>Everyone</option>
                                <option >Male</option>
                                <option >Female</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formServices">
                        <Form.Label column sm={2}> Services</Form.Label>
                        <Col sm={10}>
                            <Form.Check
                                custom
                                inline
                                label="internet"
                                type="checkbox"
                                id="internet"
                            />
                            <Form.Check
                                custom
                                inline
                                label="Yard"
                                type="checkbox"
                                id="Yard"
                            />
                            <Form.Check
                                custom
                                inline
                                label="Air Conditioning"
                                type="checkbox"
                                id="Air Conditioning"
                            />
                        </Col>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseFilterModal}>
                        Close
                    </Button>
                    <Button variant="primary" type="submit">
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Form>

        </Modal>
    )
}


export default HouseFilterModal;