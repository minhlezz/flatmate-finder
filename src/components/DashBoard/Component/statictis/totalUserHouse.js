import React from 'react';
import { Col } from 'react-bootstrap';
import { Icon, Statistic } from 'semantic-ui-react';

function TotalUserHouse(props) {
    const users = props.users;
    const getHouseHolds = props.getHouseHolds;
    return (
        <>
            <Col className="statistic-user " xs={2}>
                <Statistic size="small"
                    floated="right" >
                    <Statistic.Value>{users.length}</Statistic.Value>
                    <Statistic.Label>
                        <Icon name="users" size="big"
                            color="orange"
                            inverted
                        />
                        {" Users"}
                    </Statistic.Label>
                </Statistic>

            </Col>
            <Col className="statistic-household" xs={2}>
                <Statistic size="small">
                    <Statistic.Value>{getHouseHolds.length}</Statistic.Value>
                    <Statistic.Label>
                        <Icon name="home" size="big"
                            color="green"
                            inverted
                        />
                        {"Household"}
                    </Statistic.Label>
                </Statistic>
            </Col>
        </>
    );
}

export default TotalUserHouse;
