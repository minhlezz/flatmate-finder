import React, { Fragment, useState, useEffect } from 'react';
import { Card, Row, Col, Button, Image, Spinner, Container } from 'react-bootstrap';
import { Icon } from 'semantic-ui-react'
import '../styles/household.css';
import { NavLink } from 'react-router-dom';
import HouseHoldModal from '../components/HouseHoldComponent/HouseHoldModal/houseHold.modal';
import { useLazyQuery } from '@apollo/client';
import HouseFilterModal from '../components/HouseHoldComponent/HouseHoldModal/houseFilter.modal';
import { HOME_FILTER } from '../utils/graphql';

function HouseHold() {
    const url = "https://abcland.vn/wp-content/uploads/2020/07/Apartment-la-gi.jpg"
    const avt = "https://www.udiscovermusic.com/wp-content/uploads/2019/11/The-Weekend-Heartless.jpg"
    const [show, setShow] = useState(false);
    const [filterModal, setFilterModal] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleCloseFilterModal = () => setFilterModal(false);
    const handleShowFilterModal = () => setFilterModal(true);


    const [executeFilter, { data: homeFiltersData, loading: filterLoading }] = useLazyQuery(HOME_FILTER);

    useEffect(() => {
        //render data at initialize
        executeFilter();
    }, []);

    if (filterLoading) return <Spinner animation="border" />

    const homes = homeFiltersData?.homeFilters;

    let houseHoldMarkUp;

    if (homes?.length > 0) {
        houseHoldMarkUp = homes.map((house, index) => {
            const houseHoldID = house.id;
            const flatmateID = house.owner.id;
            return (
                <Fragment key={index}>
                    <Card className='card-main'>

                        <Card.Img src={url} />

                        <Card.Body>
                            <Row>
                                <Col>

                                    <Card.Title><strong>{house.houseTitle ? house.houseTitle : 'aA'}</strong> </Card.Title>

                                    {/* <small className="text-muted">address- number Number street Street, city City,</small> */}
                                    <Card.Text>
                                        <Icon
                                            size='large'
                                            name='dollar' />
                                        {house.budget ? house.budget : 'aA'}
                                    </Card.Text>

                                    <Card.Text>
                                        <Icon
                                            color='color-dg'
                                            size='large'
                                            name='bed' />
                                        {house.bed ? house.bed : 'aA'}

                                        <Icon
                                            color='color-dg'
                                            size='large'
                                            name='bath' />
                                        {house.bath ? house.bath : 'aA'}

                                        <Icon
                                            color='color-dg'
                                            size='large'
                                            name='square full' />
                                        {house.area ? house.area : 'aA'}m2
                                    </Card.Text>

                                    <Button className="btn-fmCard" as={NavLink} to={`/household/${houseHoldID}`} >View</Button>
                                    {/* <NavLink to={`/household/${houseHoldID}`} >
                                        <Icon name='home'
                                            inverted
                                            color='black'
                                            size="big"
                                        />
                                    </NavLink> */}
                                </Col>

                                {/* House owner */}
                                <Col xs={3} className="card-owner">
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
                                            color='color-dg'
                                            size='big'
                                            name='address card outline' />
                                    </NavLink>
                                    <Icon
                                        inverted
                                        color='color-dg'
                                        size='big'
                                        name='chat' />
                                    <Icon
                                        inverted
                                        color='color-dg'
                                        size='big'
                                        name='phone' />
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Fragment>
            )
        })
    }


    return (
        <Container xs={12} md={8}>
            <Row className="household-addingg">
                <h3>Add your home there...  </h3>
                <Button
                    style={{
                        marginLeft: '5px'
                    }}
                    onClick={handleShow}
                >
                    <Icon name='add' />
                </Button>
                <Button
                    style={{
                        marginLeft: '5px'
                    }}
                    onClick={handleShowFilterModal}
                    variant="secondary"
                >
                    <Icon name='filter' />
                </Button>
            </Row>
            {/* Add new HouseHold */}

            <HouseHoldModal show={show} handleClose={handleClose} />

            {/* Filtering  */}
            <HouseFilterModal
                filterModal={filterModal}
                handleCloseFilterModal={handleCloseFilterModal}
                executeFilter={executeFilter}
            />

            {/* Household*/}
            <Row className="card-display">
                {houseHoldMarkUp}
            </Row>
        </Container>
    )
}

export default HouseHold;