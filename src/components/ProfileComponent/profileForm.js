import React, { useState, useContext } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { gql, useMutation, useQuery } from '@apollo/client';
import { Spinner } from 'react-bootstrap';
import { AuthContext } from '../../context/auth-context';
import { GET_USER } from '../../utils/graphql';
import { withRouter } from 'react-router-dom';

const UPDATE_USER = gql`
    mutation UpdateUser(
        $id: ID!,
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
    const { loading: updateLoading, error, data } = useQuery(GET_USER, {
        variables: { id: user.userId }
    });
    const [updateUser] = useMutation(UPDATE_USER);


    const userData = data;

    const onChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,

        });

    };

    const onSubmit = async (e) => {
        e.preventDefault();
        values.age = parseInt(values.age);
        updateUser({
            variables: {
                id: userData.getUser.id,
                ...values
            },
            update(_, result) {
                props.history.push(`/flatmate/${userData.getUser.id}`);
            },

        });
        props.onEdit();
    }

    if (updateLoading) {
        return <Spinner animation="border" />
    }
    if (error) return <h2>Error :!!:</h2>

    return (
        <>

            <Form
                onSubmit={onSubmit}
            >
                {props.isEdit && (
                    <>
                        <Button type="submit" primary>Save</Button>
                        <Button onClick={props.onEdit}>Cancel</Button>
                    </>
                )}

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
                    <input placeholder='Username '
                        disabled={false}
                        name="username"
                        defaultValue={userData.getUser.username}
                        onChange={onChange}
                        required
                    />
                </Form.Field>
                <Form.Field>
                    <label>Mobile Phone</label>
                    <input placeholder='Mobile Phone'
                        disabled={false}
                        name="mobile"
                        defaultValue={userData.getUser.mobile}
                        onChange={onChange}
                        required
                    />
                </Form.Field>
                <Form.Field>
                    <label>Age</label>
                    <input placeholder='Age'
                        type='number'
                        disabled={false}
                        name="age"
                        defaultValue={userData.getUser.age}
                        onChange={onChange}
                        required
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

        </>



    )

}

export default withRouter(ProfileForm);