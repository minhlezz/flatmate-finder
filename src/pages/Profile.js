import React from 'react';
import '../styles/profile.css';
import ProfileCard from '../components/ProfileCard/profileCard';
import ProfileDetails from '../components/ProfileCard/profileDetails';
import 'bootstrap/dist/css/bootstrap.min.css';



function Profile() {

    return (

        <div className="flex-container">
            <div className="left-container">
                <ProfileCard />
            </div>
            <div className="right-container">
                <div className="content">
                    <div className="information">
                        <h3>Personal Details</h3>
                    </div>
                    <ProfileDetails />
                </div>
            </div>
        </div>

    )
}


export default Profile