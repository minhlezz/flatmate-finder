import React, { useState, useContext } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import * as FaIcons from 'react-icons/fa';
import '../styles/flatmate.css'
import FlatmateModal from '../components/Modal/fmFilterModal';
import { useQuery } from '@apollo/client';
import { ALL_USERS } from '../utils/graphql';
import Spinner from '../components/Spinner/Spinner';
import FlatmateListCard from '../components/FlatmateComponent/FlatmateList/flatmateListCard';
import LocationAPI from '../components/LocationAPI/locationAPI';
import { AuthContext } from '../context/auth-context';

function FlatmatePage() {
    const [modalShow, setModalShow] = useState(false);
    const handleClose = () => setModalShow(false);
    const handleShow = () => setModalShow(true);
    const handleConfirm = () => {
        handleClose()
        console.log('modal confirm');
    }
    const { user } = useContext(AuthContext);
    const userContext = user;
    const { loading, error, data } = useQuery(ALL_USERS)
    if (error) return <p>Error :!!:</p>
    return (
        <>
            {loading ? (<Spinner />) : (
                <>
                    <div className="flatmate-container">
                        <div className="class-filter">
                            <h4>Ready to find your best ideal flatmates......</h4>

                        </div>
                        <div className="form-search">
                            <Form inline>
                                <FormControl type="text" placeholder="Search" className="search" />
                                <Button variant="info" className="search-btn">Search</Button>
                            </Form>

                            <Button variant="outline-secondary"
                                className="filter-btn"
                                onClick={handleShow}
                            >
                                <FaIcons.FaFilter />
                            </Button>
                            <FlatmateModal
                                show={modalShow}
                                onHide={handleClose}
                                onConfirm={handleConfirm}
                            />
                            <Button variant="outline-secondary" className="sort-btn" >
                                <FaIcons.FaSort />
                            </Button>

                        </div>
                        <div className="container-row-unwrap">
                            <div className="container-column">
                                {data.users.map((user) => (
                                    <div key={user.id}>
                                        { user.username &&
                                            (<FlatmateListCard userData={user} userContext={userContext} />)}
                                    </div>
                                ))}
                            </div>
                            <div className="container-column">
                                <h1>Location</h1>
                                <LocationAPI userData={data} />
                            </div>
                        </div>


                    </div>
                </>
            )}

        </>
    )
}


export default FlatmatePage;