import React, {useState}  from 'react';
import * as FaIcons from 'react-icons/fa';
import { Form, FormControl, Button } from 'react-bootstrap';
import HomeModal from '../components/Modal/homeModal';
import '../styles/flatmate.css';
import HomeCard from '../components/Cards/HomeCard/homeCard';


export default function HomePage() {
    const [modalShow, setModalShow] = useState(false);
    const handleClose = () => setModalShow(false);
    const handleShow = () => setModalShow(true);
    const handleConfirm = () => {
        handleClose()
        console.log('modal confirm');
    }
    return (
        <div className="flatmate-container">
            <div className="class-filter">
                <h4>Looking for homes...</h4>

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
                <HomeModal
                    show={modalShow}
                    onHide={handleClose}
                    onConfirm={handleConfirm}
                />
                <Button variant="outline-secondary" className="sort-btn" >
                    <FaIcons.FaSort />
                </Button>

            </div>
            <div className="card-flatmate">
                <HomeCard />
            </div>
        </div>
    )
}