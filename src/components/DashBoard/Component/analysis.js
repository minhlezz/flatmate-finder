import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import BudgetAvgChart from './chart/budgetAvg.chart';
import BudgetTrendArea from './chart/budgetTrendArea';


function Analysis() {

    return (
        <Container className="container-analysis">
            <h1>Analysis Data</h1>
            <Row>
                <Col>
                    <Card
                    >
                        <Card.Header>Budget Average Between Flatmate and Household</Card.Header>
                        <Card.Body>
                            <BudgetAvgChart />
                        </Card.Body>
                    </Card>

                </Col>
            </Row>

            <Row>
                <Col>
                    <Card
                    >
                        <Card.Header>Budget Trend 's Area</Card.Header>
                        <Card.Body>
                            <BudgetTrendArea />
                        </Card.Body>
                    </Card>

                </Col>
            </Row>
        </Container>
    )
}


export default Analysis;