import React, { useContext, useState } from 'react';
import '../styles/profile.css';
import ProfileImages from '../components/ProfileComponent/profileImage';
import ProfileForm from '../components/ProfileComponent/profileForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import { gql, useMutation, useQuery } from '@apollo/client';
import { AuthContext } from '../context/auth-context';
import Spinner from '../components/Spinner/Spinner';
import { Button, Divider } from 'semantic-ui-react';



function Profile() {
    // const { user } = useContext(AuthContext);
    // const { data, loading } = useQuery(GET_USER, {
    //     variables: { id: user.userId }
    // });


    // if (loading) return <Spinner />;

    // const { getUser: { email } } = data;
    return (
        <>
            <div className="flex-container">
                <div className="left">
                    <ProfileImages />
                    <Button>Upload Photo</Button>
                </div>
                <div className="right">
                    <div className="content">
                        <h3>Personal Details</h3>
                        <ProfileForm />
                    </div>
                </div>

            </div>
            <Divider/>
            <h1>Listings</h1>
            <h3>Listing Cards........</h3>
            
        </>
    )



}


export default Profile