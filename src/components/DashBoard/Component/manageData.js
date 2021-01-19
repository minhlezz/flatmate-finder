import React from 'react';
import { useQuery } from '@apollo/client';
import { BOTH_QUERY } from '../../../utils/graphql';
import { Row, Spinner } from 'react-bootstrap';
import ManageUser from './mangeData/manage-user';
import ManageHouseHold from './mangeData/manage-household';

function ManageData() {
    const { loading: QueryLoading, data: dataQuery, error: errorQuery } = useQuery(BOTH_QUERY);

    if (QueryLoading) return <Spinner animation="border" />;
    if (errorQuery) return <p>'Error'</p>
    const { users, getHouseHolds } = dataQuery;

    return (
        <Row>
            <h2>User Account</h2>
            <ManageUser users={users} />
            <h2>Household</h2>
            <ManageHouseHold getHouseHolds={getHouseHolds} />
        </Row>

    );
}

export default ManageData;