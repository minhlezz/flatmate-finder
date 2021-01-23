import React from 'react';
import { Row, Col } from 'react-bootstrap';
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
            <Row>
                <Col xs={2}>
                    <SidebarDashboard />
                </Col>
                <Col xs={10}

                >
                    <Switch>
                        <Route path="/dashboard/chart" component={Overview} />
                        <Route path="/dashboard/analysis" component={Analysis} />
                        <Route path="/dashboard/manage" component={ManageData} />
                    </Switch>
                </Col>

            </Row>

        </Router>



    )
}

export default DashBoard;