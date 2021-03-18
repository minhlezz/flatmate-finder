import React, { Fragment, useContext, useState } from 'react';
import { Container, Row, Spinner, Button } from 'react-bootstrap';
import '../styles/flatmate.css'
import { useQuery } from '@apollo/client';
import { ALL_USERS } from '../utils/graphql';
import FlatmateListCard from '../components/FlatmateComponent/FlatmateList/flatmateListCard';
import { AuthContext } from '../context/auth-context';
import FlatmateFilter from '../components/FlatmateComponent/FlatmateFilter/flatmateFilter.modal';

function FlatmatePage() {
    /**Declare variables  */
    const [values, setValues] = useState({});
    //Auth user variable
    const { user } = useContext(AuthContext);
    const userContext = user;

    //Modal Variables
    const [filterModal, setFilterModal] = useState(false);

    /********GraphQL handling **********/
    const { loading, data: flatmateData } = useQuery(ALL_USERS)


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
    } else if (loading) {
        flatmateMarkUp = <Spinner animation="border" />
    }

    /**onChange handling */
    //Modal Onchange
    const handleModalShow = () => {
        setFilterModal(true);
    }

    const handleModalClose = () => {
        setFilterModal(false);
    }

    const callbackFilterModal = (childData) => {
        setValues(childData);
        console.log(childData);
    }

    return (

        <Container xs={12} md={8} >
            <Row>
                <h2>Find your ideal flatmate....</h2>
            </Row>
            <Row className="filterButton">
                <Button variant="outline-secondary"
                    title="Filters"
                    onClick={handleModalShow}
                >
                    Filters
                </Button>
                <Button variant="outline-secondary">Sort By</Button>
                <FlatmateFilter
                    filterModal={filterModal}
                    handleModalClose={handleModalClose}
                    flatmateData={flatmateData}
                    parentCallback={callbackFilterModal}
                />
            </Row>

            <Row className="fm-card-display">
                {flatmateMarkUp}
            </Row>
        </Container>

    )
}


export default FlatmatePage;