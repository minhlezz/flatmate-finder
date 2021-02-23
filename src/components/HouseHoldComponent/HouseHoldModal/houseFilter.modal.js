import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import Slider from '@material-ui/core/Slider';
import './household.modal.css';

function HouseFilterModal(props) {
    const handleCloseFilterModal = props.handleCloseFilterModal;
    const executeFilter = props.executeFilter;

    const [values, setValues] = useState({
    });
    const [area, setArea] = useState([0, 2000]);
    const [budget, setBudget] = useState([0, 4000000]);
    const [budgetValues, setBudgetValues] = useState({
        budgetGTE: 0,
        budgetLTE: 4000000
    })
    const handleChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        setValues({
            ...values,
            [name]: value
        });
        console.log(values);
    }
    const handelSubmit = (e) => {
        e.preventDefault();
        console.log(values);
        console.log(budgetValues.budgetValues);
        const budgetList = budgetValues.budgetValues
        executeFilter({
            variables: {
                ...values,
                ...budgetList
            }
        });

        setValues('');
        handleCloseFilterModal();
    }

    const handleArea = (e, newArea) => {
        setArea(newArea);
        console.log(newArea);
    }
    const handleBudget = (e, newValue) => {
        setBudget(newValue)
        setBudgetValues({
            budgetValues: {
                budgetGTE: newValue[0],
                budgetLTE: newValue[1]
            }
        })
    }
  
    return (

        <Modal show={props.filterModal} onHide={handleCloseFilterModal}>
            <Modal.Header closeButton>
                <Modal.Title>Household Filters</Modal.Title>
            </Modal.Header>
            <Form onSubmit={handelSubmit}>
                <Modal.Body>
                    <Form.Group controlId="formBudget">
                        <Form.Label>Budget</Form.Label>
                        <Row>
                            <Col xs={7}>
                                <Slider
                                    value={budget}
                                    onChange={handleBudget}
                                    min={0}
                                    max={9999999}
                                    step={1000}
                                />
                            </Col>
                            <Col className="ml-1rem">
                                <p>
                                    {budget[0]} - {budget[1]} vnd
                                </p>
                            </Col>
                        </Row>
                    </Form.Group>
                    {/* <Form.Group controlId="formArea" >
                        <Form.Label>Area</Form.Label>
                        <Row>
                            <Col xs={6}>
                                <Slider
                                    value={area}
                                    onChange={handleArea}
                                    min={0}
                                    max={2000}
                                    step={1}
                                />
                            </Col>
                            <Col className="ml-1rem">
                                <p>
                                    {area[0]} - {area[1]} m2
                                </p>
                            </Col>
                        </Row>
                    </Form.Group> */}
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
                                name="internet"
                                onChange={handleChange}
                            />
                            <Form.Check
                                custom
                                inline
                                label="Yard"
                                type="checkbox"
                                id="Yard"
                                name="yard"
                                onChange={handleChange}
                            />
                            <Form.Check
                                custom
                                inline
                                label="Air Conditioning"
                                type="checkbox"
                                id="Air Conditioning"
                                name="airConditioning"
                                onChange={handleChange}
                            />

                            <Form.Check
                                custom
                                inline
                                label="Parking"
                                type="checkbox"
                                id="Parking"
                                name="parking"
                                onChange={handleChange}
                            />
                            <Form.Check
                                custom
                                inline
                                label="Private Bathroom"
                                type="checkbox"
                                id="PrivateBathroom"
                                name="privateBathroom"
                                onChange={handleChange}
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