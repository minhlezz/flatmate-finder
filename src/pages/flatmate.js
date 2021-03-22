import React, { Fragment, useContext, useEffect, useState } from 'react';
import { Container, Row, Spinner, Button, Dropdown, DropdownButton } from 'react-bootstrap';
import '../styles/flatmate.css'
import { useLazyQuery } from '@apollo/client';
import FlatmateListCard from '../components/FlatmateComponent/FlatmateList/flatmateListCard';
import { AuthContext } from '../context/auth-context';
import FlatmateFilter from '../components/FlatmateComponent/FlatmateFilter/flatmateFilter.modal';
import { USER_FILTER } from '../utils/graphql';
function FlatmatePage() {

    //Auth user variable
    const { user } = useContext(AuthContext);
    const userContext = user;

    /**State decleration */
    const [filterModal, setFilterModal] = useState(false);
    const [state, setState] = useState([]);
    const [query, setQuery] = useState("");
    /********GraphQL handling **********/
    const [filterFunction, { called, loading, data }] = useLazyQuery(USER_FILTER, {
        variables: {
            ...query
        }
    })

    /** controlling render  */
    useEffect(() => {
        filterFunction();
        if (data && data.userFilters) {
            setState(data.userFilters);
        }
    }, [query, data, filterFunction]);

    /**Flatmate List Card */
    let flatmateMarkUp;
    if (state?.length > 0) {
        flatmateMarkUp = state.map((user, index) => {
            return (
                <Fragment key={index}>
                    <FlatmateListCard userData={user} userContext={userContext} />
                </Fragment>
            )
        })
    } else if (called && loading) {
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

    const callbackFilterModal = async (childData) => {
        setQuery(childData)
    }

    const handleSortBy = (sortBy) => {
        const sortList = [...state]
        if (sortBy === 'ASC') {
            sortList.sort((a, b) => a.budget < b.budget ? -1 : 1);
        } else if (sortBy === 'DESC') {
            sortList.sort((a, b) => a.budget < b.budget ? 1 : -1);
        }
        setState(sortList);
    };
    return (

        <Container xs={12} md={8} >
            <Row>
                <h2>Find your ideal flatmate....</h2>
            </Row>
            <Row className="filterButton">
                <Button variant="outline-secondary"
                    title="Filters"
                    size="lg"
                    onClick={handleModalShow}
                >
                    Filters
                </Button>
                <DropdownButton
                    id="dropdown-item-button"
                    variant="outline-secondary"
                    title="SortBy"
                    onSelect={handleSortBy}
                    size="lg"
                >
                    <Dropdown.ItemText>Budget</Dropdown.ItemText>
                    <Dropdown.Item eventKey='ASC'>ASC</Dropdown.Item>
                    <Dropdown.Item eventKey='DESC'>DESC</Dropdown.Item>
                </DropdownButton>
                <FlatmateFilter
                    filterModal={filterModal}
                    handleModalClose={handleModalClose}
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