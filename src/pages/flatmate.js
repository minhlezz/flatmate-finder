import React, { Fragment, useContext } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import '../styles/flatmate.css'
import { useQuery } from '@apollo/client';
import { ALL_USERS } from '../utils/graphql';
import FlatmateListCard from '../components/FlatmateComponent/FlatmateList/flatmateListCard';
import { AuthContext } from '../context/auth-context';

function FlatmatePage() {

    const { user } = useContext(AuthContext);
    const userContext = user;
    const { loading, error, data: flatmateData } = useQuery(ALL_USERS)
    if (error) return <p>Error :!!:</p>
    const users = flatmateData?.users;
    let flatmateMarkUp;
    if (users?.length > 0) {
        flatmateMarkUp = users.map((user, index) => {
            return (
                <Fragment key={index}>
                    <FlatmateListCard userData={user} userContext={userContext} />
                </Fragment>
            )
        }
        )
        console.log(flatmateMarkUp);
    } else if (loading) {
        flatmateMarkUp = <Spinner animation="border" />
    }


    return (

        <Row xs={12} md={8} >
            <Row>
                <h2>Find your ideal flatmate....</h2>
            </Row>
            <Row className="fm-card-display">
                {flatmateMarkUp}
            </Row>
        </Row>

    )
}


export default FlatmatePage;