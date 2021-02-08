import React, { useContext, useState } from 'react';
import '../styles/profile.css';
import ProfileImages from '../components/ProfileComponent/profileImage';
import ProfileForm from '../components/ProfileComponent/profileForm';
import { Divider } from 'semantic-ui-react';
import { Container, Row, Col, Button, Spinner } from 'react-bootstrap';
import ProfileInfor from '../components/ProfileComponent/profileInfor';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../utils/graphql';
import { AuthContext } from '../context/auth-context';

function Profile() {
    const { user } = useContext(AuthContext);
    const [isEdit, setIsEdit] = useState(false);
    const onEdit = () => {
        const status = !isEdit;
        setIsEdit(status);
    }

    const { loading, data: userData } = useQuery(GET_USER, {
        variables: { id: user.userId }
    });

    if (loading) {
        return <Spinner animation="border" />;
    }

    return (
        <Container xs={12} md={8}>
            <Row >
                <Col >
                    <ProfileImages />
                </Col>
                <Col className='content' >
                    <h3>Personal Details</h3>
                    {!isEdit && (
                        <Button
                            variant="danger"
                            onClick={onEdit}
                            style={{
                                width: '80px'

                            }}
                        >Edit</Button>
                    )}
                    {isEdit ? (<ProfileForm onEdit={onEdit} isEdit={isEdit} />)
                        : (<ProfileInfor userData={userData} />)
                    }
                </Col>
            </Row>
            <Divider />
            <Row>
                <h1>Listings</h1>
            </Row>
        </Container>

    )



}


export default Profile