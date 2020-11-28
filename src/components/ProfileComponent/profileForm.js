import React, { useState, useContext } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { gql, useMutation, useQuery } from '@apollo/client';
import { Spinner } from 'react-bootstrap';
import { AuthContext } from '../../context/auth-context';
import { GET_USER } from '../../utils/graphql';

const UPDATE_USER = gql`
    mutation UpdateUser(
        $id: String!,
        $username: String,
        $mobile: String,
        $age: Int,
        $gender: String,
        $aboutMe: String
    ) {
        updateUser(
            id: $id,
            profileInput: {
                username: $username,
                mobile: $mobile,
                age: $age,
                gender: $gender,
                aboutMe: $aboutMe
            }) {
            id
            username
            mobile
            age
            gender
            aboutMe
        }
    }
`
function ProfileForm(props) {
    const { user } = useContext(AuthContext);
    const [values, setValues] = useState({});
    const { loading, error, data } = useQuery(GET_USER, {
        variables: { id: user.userId }
    });
    const [updateData] = useMutation(UPDATE_USER);

    if (error) return <h2>Error :!!:</h2>
    const userData = data;

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };
    const onSubmit = (e) => {
        e.preventDefault()
        updateData({
            update(cache,result) {
                console.log(result);
            },
            variables: {
                id: userData.getUser.id,
                ...values
            }
        });
    }

    return (
        <>
            { loading ? (<Spinner />) :
                (
                    <Form
                        onSubmit={onSubmit}
                    >

                        <Button type="submit" primary>Save</Button>
                        {/* <Button onClick={onEdit}>Cancel</Button> */}
                        <Form.Field>
                            <label>About Me</label>
                            <textarea placeholder='describe yourself'
                                disabled={false}
                                name="aboutMe"
                                defaultValue={userData.getUser.aboutMe}
                                onChange={onChange}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>User Name</label>
                            <input placeholder='Mobile Phone'
                                disabled={false}
                                name="username"
                                defaultValue={userData.getUser.username}
                                onChange={onChange}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Mobile Phone</label>
                            <input placeholder='Mobile Phone'
                                disabled={false}
                                name="mobile"
                                defaultValue={userData.getUser.mobile}
                                onChange={onChange}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Age</label>
                            <input placeholder='Age'
                                disabled={false}
                                name="age"
                                defaultValue={userData.getUser.age}
                                onChange={onChange}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Gender</label>
                            <select placeholder='Gender'
                                disabled={false}
                                name="gender"
                                defaultValue={userData.getUser.gender}
                                onChange={onChange}
                            >
                                <option>Male</option>
                                <option>Female</option>
                                <option>Others</option>
                            </select>
                        </Form.Field>
                    </Form>
                )}

        </>



    )

}

export default ProfileForm;