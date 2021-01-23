import React from 'react';
import { Col, Row, Spinner, Card, Container } from 'react-bootstrap';
import { Divider } from 'semantic-ui-react';
import FlatmateChart from './chart/flatmateChart';
import './dashboard.css';
import TotalUserHouse from './statictis/totalUserHouse';
import { useQuery } from '@apollo/client'
import { BOTH_QUERY } from '../../../utils/graphql';
import HouseholdChart from './chart/householdChart';

function Overview() {

    const { loading: dataLoading, data: ansData, error: fetchError } = useQuery(BOTH_QUERY);

    if (dataLoading) return <Spinner animation="border" />;
    if (fetchError) return <p>error</p>;
    const { users, getHouseHolds } = ansData

    return (
        <Container className="container-overview">
            {/* Row User Household Statistics */}
            <Row >
                <TotalUserHouse users={users} getHouseHolds={getHouseHolds} />
            </Row>
            <Divider />

            {/* Row Chart Statistics ***************** */}
            <Row>
                <Col>
                    <Card
                    >
                        <Card.Header>Flatmate</Card.Header>
                        <Card.Body>
                            <FlatmateChart users={users} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col >
                    <Card>
                        <Card.Header>Household</Card.Header>
                        <Card.Body>
                            <HouseholdChart households={getHouseHolds} />
                        </Card.Body>
                    </Card>

                </Col>
            </Row>

            {/* Row another statictis */}
           
        </Container>
    )

}

export default Overview;
