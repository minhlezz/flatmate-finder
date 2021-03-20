import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { Slider } from 'antd';

function FlatmateFilter(props) {
    /**Declare variables *******/

    //Props properties
    const filterModal = props.filterModal;
    const handleModalClose = props.handleModalClose;
    //State variables
    const [budget, setBudget] = useState([0, 200000000]);
    const [age, setAge] = useState([18, 100]);
    const [gender, setGender] = useState();
    const selectOptions = {
        budgetGTE: budget[0],
        budgetLTE: budget[1],
        ageGTE: age[0],
        ageLTE: age[1],
        gender: gender ? gender : ''
    };
    /**Apollo Client */

    /**Form ********/

    //onChange
    const handleChangeBudget = (budgetValue) => {
        setBudget(budgetValue);
    }

    const handleChangeAge = (ageValue) => {
        setAge(ageValue);
    }

    //onSubmit
    const handleSubmit = async (e) => {
        e.preventDefault();
        sendData();
        handleModalClose();

    }

    const sendData = () => {
        props.parentCallback(selectOptions);
    };

    /*************Render ***********/
    return (
        <Modal show={filterModal} onHide={handleModalClose}>
            <Modal.Header closeButton>
                <Modal.Title>Flatmate Filters</Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleSubmit} >
                <Modal.Body>

                    <Form.Group as={Row} controlId="formGender">
                        <Form.Label column sm={2}>Gender</Form.Label>
                        <Col sm={10}>
                            <Form.Control as="select"
                                value={gender}
                                onChange={e => setGender(e.target.value)}
                                required
                            >
                                <option value=''>Select Gender</option>
                                <option>All</option>
                                <option >Male</option>
                                <option >Female</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Row>
                        <Form.Label>Age</Form.Label>
                        <Form.Label className="ml-2">
                            <strong> {age[0]} - {age[1]}</strong>
                        </Form.Label>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="age">
                            <Slider
                                className="slider-range"
                                range
                                defaultValue={age}
                                step={1}
                                onChange={handleChangeAge}
                                min={18}
                                max={100}
                            />
                        </Form.Group>
                    </Form.Row>
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
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleModalClose}>
                        {'Close'}
                    </Button>
                    <Button variant="primary" type="submit">
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal >
    )
}

export default FlatmateFilter;