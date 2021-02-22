import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import SidebarDashboard from '../components/DashBoard/sidebarDB/sidebarDB';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Overview from '../components/DashBoard/Component/overview';
import ManageData from '../components/DashBoard/Component/manageData';
import Analysis from '../components/DashBoard/Component/analysis';

function DashBoard() {
    return (

        <Router>
            <Container xs={12} md={8} fluid >
                <Row>
                    <Col >
                        <SidebarDashboard />
                    </Col>
                    <Col xs={9}

                    >
                        <Switch>
                            <Route path="/dashboard/chart" component={Overview} />
                            <Route path="/dashboard/analysis" component={Analysis} />
                            <Route path="/dashboard/manage" component={ManageData} />
                        </Switch>
                    </Col>

                </Row>
            </Container>


        </Router>



    )
}

export default DashBoard;