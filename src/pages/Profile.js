import React from 'react';
import '../styles/profile.css';
import ProfileCard from '../components/ProfileCard/profileCard';
import ProfileDetails from '../components/ProfileCard/profileDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';


function Profile() {

    return (

        <div className="flex-container">
            <div className="left-container">
                <ProfileCard />
            </div>
            <div className="right-container">
                <div className="content">
                    <h3>Personal Details</h3>
                    <div className="edit-profile">
                      
                    <Button variant="primary">Save</Button>
                    <Button variant="secondary">Cancel</Button>
                    <Button variant="danger">Edit</Button>
                    </div>
                    <ProfileDetails />
                </div>
            </div>
        </div>

    )
}


export default Profile