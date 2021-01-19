import React from 'react';
import { Col, Row, Spinner, Card } from 'react-bootstrap';
import { Icon, Statistic, Divider } from 'semantic-ui-react';
import Chart from './chart';
import './chart.css';
import TotalUserHouse from './statictis/totalUserHouse';
import { useQuery } from '@apollo/client'
import { BOTH_QUERY } from '../../../utils/graphql';
import { VictoryLine, VictoryChart, VictoryTheme } from 'victory';

function Analysis() {

    const { loading: dataLoading, data: ansData, error: fetchError } = useQuery(BOTH_QUERY);

    if (dataLoading) return <Spinner animation="border" />;
    if (fetchError) return <p>error</p>;
    const { users, getHouseHolds } = ansData

    return (
        <>
            {/* Row User Household Statistics */}
            <Row >
                <TotalUserHouse users={users} getHouseHolds={getHouseHolds} />
            </Row>
            <Divider />

            {/* Row Chart Statistics ***************** */}
            <Row>
                <Col xs={4}>
                    <Card>
                        <Card.Header>Budget Average</Card.Header>
                        <Card.Body>
                            <Chart users={users} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={4} >
                    <Card>
                        <Card.Header>Line Chart</Card.Header>
                        <Card.Body>
                            <VictoryChart
                                theme={VictoryTheme.material}
                            >
                                <VictoryLine
                                    style={{
                                        data: { stroke: "#c43a31" },
                                        parent: { border: "1px solid #ccc" }
                                    }}
                                    data={[
                                        { x: 1, y: 2 },
                                        { x: 2, y: 3 },
                                        { x: 3, y: 5 },
                                        { x: 4, y: 4 },
                                        { x: 5, y: 7 }
                                    ]}
                                    labels={({ datum }) => datum.y}

                                />
                            </VictoryChart>
                        </Card.Body>
                    </Card>

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
                                9982
                                </Statistic.Value>
                            <Statistic.Label>
                                {"Total Household's Budget"}
                            </Statistic.Label>
                        </Statistic>
                    </Row>
                </Col>

            </Row>
            {/* Row another statictis */}
      

        </>
    )

}

export default Analysis;
