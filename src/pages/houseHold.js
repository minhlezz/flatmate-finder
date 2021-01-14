import React, { Fragment, useState } from 'react';
import { Card, Row, Col, Button, Image, Spinner } from 'react-bootstrap';
import { Icon } from 'semantic-ui-react'
import '../styles/household.css';
import { NavLink } from 'react-router-dom';
import HouseHoldModal from '../components/HouseHoldComponent/HouseHoldModal/houseHold.modal';
import { GET_HOUSEHOLDS } from '../utils/graphql';
import { useQuery } from '@apollo/client';

function HouseHold() {
    const url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0cMhRaPgqVMdYwCsU8eje4v6gOkj962GL3g&usqp=CAU"
    const avt = "https://noidangsong.vn/files/uploads/fb1735058496563345/1526444239-tt_avatar_small.jpg"
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { loading: houseHoldLoading, data: houseHoldData, error: queryError } = useQuery(GET_HOUSEHOLDS);
    if (queryError) {
        return <p>Error happening in query data</p>
    }

    if (houseHoldLoading) {
        return <Spinner animation='border' />;
    }
    const households = houseHoldData.getHouseHolds;
    let houseHoldMarkUp;
    if (households.length > 0) {
        houseHoldMarkUp = households.map((house, index) => {
            const houseHoldID = house.id;
            const flatmateID = house.owner.id;
            return (
                <Fragment key={index}>
                    <Card className='card-main'>
                        <Col className="card-content">
                            <Card.Img src={url}
                                style={
                                    {
                                        width: '200px',
                                        height: '200px'
                                    }}
                            />
                            <Card.Body>
                                <Card.Subtitle>
                                    {house.houseTitle ? house.houseTitle : 'aA'}
                                </Card.Subtitle>
                                <small className="text-muted">address- number Number street Street, city City,</small>
                                <p>
                                    {house.bed ? house.bed : 'aA'}
                                    <Icon disabled
                                        size='large'
                                        name='bed' />
                                    {house.bath ? house.bath : 'aA'}
                                    <Icon disabled
                                        size='large'
                                        name='bath' />
                                    <Icon disabled
                                        size='large'
                                        name='square full' />
                                    {house.area ? house.area : 'aA'}m2
                                </p>

                                <p>
                                    <Icon disabled
                                        size='large'
                                        name='dollar' />
                                    {house.budget ? house.budget : 'aA'}
                                </p>
                                <p>
                                    {house.houseDescription ? house.houseDescription : 'aA'}
                                </p>
                                <NavLink to={`/household/${houseHoldID}`} >
                                    <Icon.Group size='large'>
                                        <Icon loading size='big' name='circle notch'
                                            inverted
                                            color='black' />

                                        <Icon name='home'
                                            inverted
                                            color='black'
                                        />
                                    </Icon.Group>
                                </NavLink>
                            </Card.Body>
                            <Col className="card-owner">
                                <Image
                                    src={avt}
                                    style={
                                        {
                                            width: '82px',
                                            height: '82px',
                                            margin: '5px'
                                        }}
                                    roundedCircle />
                                <NavLink to={`/flatmate/${flatmateID}`} >
                                    <Icon
                                        inverted
                                        color='black'
                                        size='big'
                                        name='address card outline' />
                                </NavLink>

                                <Icon
                                    inverted
                                    color='black'
                                    size='big'
                                    name='chat' />
                                <Icon
                                    inverted
                                    color='black'
                                    size='big'
                                    name='phone' />
                            </Col>

                        </Col>
                    </Card>
                </Fragment>
            )
        })
    }
    return (
        <Row>
            <Col xs={12} md={8}>
                <Col className="household-addingg">
                    <h3>Add your home there...  </h3>
                    <Button
                        style={{
                            marginLeft: '5px'
                        }}
                        onClick={handleShow}
                    >
                        <Icon name='add' />
                    </Button>
                </Col>
                <HouseHoldModal show={show} handleClose={handleClose} />
                <h3>Finding "..." results</h3>
                {houseHoldMarkUp}
            </Col>
        </Row >
    )
}

export default HouseHold;