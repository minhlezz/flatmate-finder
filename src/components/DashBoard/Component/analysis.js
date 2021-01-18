import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Icon, Statistic, Divider, Dropdown } from 'semantic-ui-react';
import Chart from './chart';

import './chart.css';

function Analysis() {
    const options = [
        {
            key: 'Jenny Hess',
            text: 'Jenny Hess',
            value: 'Jenny Hess',
        },
        {
            key: 'Elliot Fu',
            text: 'Elliot Fu',
            value: 'Elliot Fu'
        },
    ];
    return (
        <>
            {/* Row User Household Statistics */}
            <Row >
                <Col className="statistic-user " xs={2}>
                    <Statistic size="small"
                        floated="right" >
                        <Statistic.Value>5,550</Statistic.Value>
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
                        <Statistic.Value>3,000</Statistic.Value>
                        <Statistic.Label>
                            <Icon name="home" size="big"
                                color="green"
                                inverted
                            />
                            {"Household"}
                        </Statistic.Label>
                    </Statistic>
                </Col>
            </Row>
            <Divider />

            {/* Row Chart Statistics ***************** */}
            <h3>Budget Average Area</h3>
            <Row>
                <Col xs={6}>
                    <span>
                        <Dropdown
                            inline
                            options={options}
                            defaultValue={options[0].value}
                        />
                    </span>
                    <Chart />
                </Col>
                <Col xs={3} className="total-number">
                    <Row >
                        <Statistic size="tiny">
                            <Statistic.Value>
                                <Icon name="arrow up" size="small"
                                    color="green"
                                />
                            3,000
                            </Statistic.Value>
                            <Statistic.Label>
                                {"Total User's Budget"}
                            </Statistic.Label>
                        </Statistic>
                    </Row>
                    <Row >
                        <Statistic size="tiny">
                            <Statistic.Value>
                                <Icon name="arrow down"
                                    color="red"
                                    size="small" />
                                3,000
                                </Statistic.Value>
                            <Statistic.Label>
                                {"Total Household's Budget"}
                            </Statistic.Label>
                        </Statistic>
                    </Row>
                    <Row>
                        <Statistic size="tiny">
                            <Statistic.Value>
                                <Icon name="arrow up"
                                    color="green"
                                    size="small" />
                                3,000
                            </Statistic.Value>
                            <Statistic.Label>
                                {"Household"}
                            </Statistic.Label>
                        </Statistic>
                    </Row>
                </Col>
            </Row>
            {/* Row another statictis */}
            <Row>
                <Col>
                    Statictis
                    Statictis
                    Statictis
                    Statictis
                </Col>
            </Row>

        </>
    )

}

export default Analysis;
