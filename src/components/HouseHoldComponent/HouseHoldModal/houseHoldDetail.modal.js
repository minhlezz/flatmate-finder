import React, { useState } from 'react';

import { Modal, Button, Form, Col, Row, Spinner } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { UPDATE_HOUSEHOLD } from '../../../utils/mutation';
import { GET_HOUSEHOLD } from '../../../utils/graphql';
import { addressData } from '../../../data/address';

function HouseholdDetailModal(props) {
    const {
        id,
        houseTitle,
        houseDescription,
        buildingType,
        area, budget, bath, bed, houseHoldSex, airConditioning,
        internet, parking, privateBathroom, yard
    } = props.houseData.getHouseHold;
    const houseHoldID = id;

    const [values, setValues] = useState({
        area: area ? area : '',
        budget: budget ? budget : '',
        bath: bath ? bath : '',
        bed: bed ? bed : '',
    });
    const onChange = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setValues({
            ...values,
            [name]: value
        });
    };

    /**Connect to GraphQL */
    const [updateHouseHold, { loading: updateLoading, error: updateError }] = useMutation(UPDATE_HOUSEHOLD, {
        onError: (err) => {
            console.log(err);
        }
    })

    const onSubmit = (e) => {
        e.preventDefault();
        values.area = parseFloat(values.area);
        values.budget = parseFloat(values.budget);
        values.bath = parseInt(values.bath);
        values.bed = parseInt(values.bed);
        updateHouseHold({
            variables: {
                id: houseHoldID,
                ...values,
            },
            refetchQueries: [{
                query: GET_HOUSEHOLD,
                variables: { id: houseHoldID }
            }],
            update: (cache, { data: { updateHouseHold } }) => {
                cache.modify({
                    id: cache.identify(id),
                    fields: {
                        getHousehold(existingHHRefs = []) {
                            const newHHRef = cache.writeQuery({
                                data: updateHouseHold,
                                query: GET_HOUSEHOLD
                            });

                            return [
                                ...existingHHRefs,
                                newHHRef
                            ]
                        }
                    }
                });
            }
        })
        props.handleClose();
    }

    if (updateLoading) {
        return <Spinner animation="border" />
    }
    if (updateError) {
        return 'Error'
    }

    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Household</Modal.Title>
            </Modal.Header>
            <Form onSubmit={onSubmit}>
                <Modal.Body>
                    <Form.Group as={Row} >
                        <Form.Label column sm="3">House Title</Form.Label>
                        <Col sm="9">
                            <Form.Control
                                required
                                type="text"
                                name="houseTitle"
                                onChange={onChange}
                                defaultValue={houseTitle ? houseTitle : values[houseTitle]}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} >
                        <Form.Label column sm="3">House Description</Form.Label>
                        <Col sm="9">
                            <Form.Control
                                required
                                type="text"
                                name="houseDescription"
                                onChange={onChange}
                                defaultValue={houseDescription ? houseDescription : values[houseDescription]}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Address</Form.Label>
                        <Form.Row>
                            <Col>
                                <Form.Control as="select" custom>
                                    {addressData.provinceCity.map((pc) => {
                                        return (
                                            <option key={pc.key} value={pc.value}>
                                                {pc.label}
                                            </option>
                                        )
                                    })}
                                </Form.Control>
                            </Col>
                            <Col>
                                <Form.Control as="select" custom>
                                    {addressData.districtCity.map((dc) => {
                                        return (
                                            <option key={dc.key} value={dc.value}>
                                                {dc.label}
                                            </option>
                                        )
                                    })}
                                </Form.Control>
                            </Col>
                        </Form.Row>
                    </Form.Group>

                    <Form.Group as={Row} >
                        <Form.Label column sm="3">Building Type</Form.Label>
                        <Col sm="9">
                            <Form.Control
                                required
                                as="select" custom
                                name="buildingType"
                                onChange={onChange}
                                defaultValue={buildingType ? buildingType : values[buildingType]}
                            >
                                <option>Apartment Building (10+ units)</option>
                                <option>Apartment Complex</option>
                                <option>House</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} >
                        <Form.Label column sm="3">Area</Form.Label>
                        <Col sm="4">
                            <Form.Control
                                required
                                type="number"
                                name="area"
                                onChange={onChange}
                                defaultValue={area}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} >
                        <Form.Label column sm="3">Budget</Form.Label>
                        <Col sm="4">
                            <Form.Control
                                required
                                type="number"
                                name="budget"
                                onChange={onChange}
                                defaultValue={budget}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} >
                        <Form.Label column sm="3">Bath</Form.Label>
                        <Col sm="4">
                            <Form.Control
                                required
                                type="number"
                                name="bath"
                                onChange={onChange}
                                defaultValue={bath}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} >
                        <Form.Label column sm="3">Bed</Form.Label>
                        <Col sm="4">
                            <Form.Control
                                required
                                type="number"
                                name="bed"
                                onChange={onChange}
                                defaultValue={bed}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} >
                        <Form.Label column sm="3">Household Sex</Form.Label>
                        <Col sm="4">
                            <Form.Control
                                required
                                as="select" custom
                                name="houseHoldSex"
                                onChange={onChange}
                                defaultValue={houseHoldSex ? houseHoldSex : values[houseHoldSex]}
                            >
                                <option>Male</option>
                                <option>Female</option>
                                <option>Others</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>
                    {/* Form Checkbox */}
                    <h4>Amenities</h4>
                    <Form.Group >
                        <Form.Check
                            inline label="Air Conditioning"
                            type="checkbox"
                            name="airConditioning"
                            onChange={onChange}
                            defaultChecked={airConditioning ? airConditioning : values[airConditioning]}
                        />
                        <Form.Check
                            inline label="Internet"
                            type="checkbox"
                            name="internet"
                            onChange={onChange}
                            defaultChecked={internet ? internet : values[internet]}
                        />
                        <Form.Check
                            inline label="Parking"
                            type="checkbox"
                            name="parking"
                            onChange={onChange}
                            defaultChecked={parking ? parking : values[parking]}
                        />
                        <Form.Check
                            inline label="Private Bathroom"
                            type="checkbox"
                            name="privateBathroom"
                            onChange={onChange}
                            defaultChecked={privateBathroom ? privateBathroom : values[privateBathroom]}
                        />
                        <Form.Check
                            inline label="Yard"
                            type="checkbox"
                            name="yard"
                            onChange={onChange}
                            defaultChecked={yard ? yard : values[yard]}
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                 </Button>
                    <Button type='submit'>
                        Update
                 </Button>
                </Modal.Footer>
            </Form>

        </Modal >
    )
}


export default HouseholdDetailModal;