import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import './household.modal.css';
import { Slider } from 'antd';

function HouseFilterModal(props) {
    const handleCloseFilterModal = props.handleCloseFilterModal;

    /**State Declaration */
    const [area, setArea] = useState([0, 2000]);
    const [budget, setBudget] = useState([0, 200000000]);
    const [values, setValues] = useState("");
    const selectOptions = {
        budgetGTE: budget[0],
        budgetLTE: budget[1],
        areaGTE: area[0],
        areaLTE: area[1],
        ...values
    };
    /**
    /**onSubmit */
    const handelSubmit = (e) => {
        e.preventDefault();
        sendData();
        setValues("");
        handleCloseFilterModal();
    };

    /**onChange */
    const handleChangeBudget = (budgetValue) => {
        setBudget(budgetValue);
    };
    const handleChangeArea = (areaValue) => {
        setArea(areaValue);
    };

    const handleChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        setValues({
            ...values,
            [name]: value
        });
    };

    //Callback
    const sendData = () => {
        props.parentCallback(selectOptions);
    };

    /**Render */
    return (

        <Modal show={props.filterModal} onHide={handleCloseFilterModal}>
            <Modal.Header closeButton>
                <Modal.Title>Household Filters</Modal.Title>
            </Modal.Header>
            <Form onSubmit={handelSubmit}>
                <Modal.Body>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Budget</Form.Label>
                            <Form.Label className="ml-2">
                                <strong> {budget[0]}vnd - {budget[1]}vnd</strong>
                            </Form.Label>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="budget">
                            <Slider range
                                defaultValue={budget}
                                step={100000}
                                onChange={handleChangeBudget}
                                min={0}
                                max={200000000}
                            />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Label>Area</Form.Label>
                        <Form.Label className="ml-2">
                            <strong> {area[0]}m2 - {area[1]}m2</strong>
                        </Form.Label>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="area">
                            <Slider
                                className="slider-range"
                                range
                                defaultValue={area}
                                step={10}
                                onChange={handleChangeArea}
                                min={10}
                                max={1000}
                            />
                        </Form.Group>
                    </Form.Row>
                    <Form.Group as={Row} controlId="formGender">
                        <Form.Label column sm={2}>Household Sex</Form.Label>
                        <Col sm={10}>
                            <Form.Control as="select"
                                name="houseHoldSex"
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Household Sex</option>
                                <option>All</option>
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