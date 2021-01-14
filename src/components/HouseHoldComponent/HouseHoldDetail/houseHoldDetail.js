import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { Container, Row, Col, Image, Spinner } from 'react-bootstrap';
import { Divider, Icon } from 'semantic-ui-react';
import { GET_HOUSEHOLD } from '../../../utils/graphql';
import HouseHoldCarousel from './houseHoldCarousel';
import HouseHoldRefs from './houseHoldRefs';
import { NavLink } from 'react-router-dom';
import HouseholdDetailModal from '../HouseHoldModal/houseHoldDetail.modal';

function HouseHoldDetail(props) {
    const avt = 'https://www.sustainability-times.com/wp-content/uploads/2019/11/leaves-3420078_960_720.jpg';
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const houseHoldID = props.match.params.ID;
    const { loading: houseLoading, data: houseData, error: houseError } = useQuery(GET_HOUSEHOLD, {
        variables: {
            id: houseHoldID
        }
    });
    if (houseError) return 'Error';
    if (houseLoading) return <Spinner animation="border" />;

    const { age, username, id, gender } = houseData.getHouseHold.owner;
    const flatmateID = id;

    /**Gender Condition */
    let sexGender;
    if (gender && gender.length > 0) {
        if (gender === "Female") {
            sexGender = <Icon name="female" size="large" />;
        } else {
            sexGender = <Icon name="male" size="large" />
        }
    }


    return (
        <Container style={{
            minHeight: "160vh"
        }} >
            <Row>
                {/* House images */}
                <Col>
                    <HouseHoldCarousel />
                </Col>
                {/* House Hold Owner */}
                <Col className="household-owner">
                    <div>
                        <Image
                            src={avt}
                            style={
                                {
                                    width: '150px',
                                    height: '150px',
                                }}
                            thumbnail />
                    </div>
                    <div style={{
                        marginTop: "10px"
                    }}>
                        {username ? <h3>{username}</h3> : <h3>Green Leaf </h3>}
                        {sexGender ? sexGender : 'F'}
                        <strong>{age ? age : '25'}</strong>
                    </div>
                    <div>
                        <NavLink to={`/flatmate/${flatmateID}`} >
                            <Icon inverted
                                color='black'
                                size='big'
                                name='address card outline' />
                        </NavLink>
                        <Icon inverted
                            color='black'
                            size='big'
                            name='chat' />
                        <Icon inverted
                            color='black'
                            size='big'
                            name='phone'
                            onClick={() => {
                                console.log('phone');
                            }}
                        />
                    </div>
                    <div style={{ marginTop: "10px" }}>
                        <Icon inverted
                            style={{
                                color: '#417054'
                            }}
                            size='big'
                            name='edit'
                            onClick={handleShow}
                        />
                    </div>
                </Col>
                <HouseholdDetailModal show={show} handleClose={handleClose}
                    houseData={houseData}
                />
            </Row>
            <Divider />
            {/* Household References */}
            <Row >
                <HouseHoldRefs houseData={houseData} />
            </Row>
        </Container >
    )
}


export default HouseHoldDetail;