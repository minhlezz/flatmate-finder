import React from 'react';
import { Form } from 'semantic-ui-react';


function ProfileInfor(props) {
    const userData = props.userData
    return (
        <Form
        >
            <Form.Field>
                <label>About Me</label>
                <textarea placeholder='describe yourself'
                    disabled
                    name="aboutMe"
                    defaultValue={userData.getUser.aboutMe}
                />
            </Form.Field>
            <Form.Field>
                <label>User Name</label>
                <input placeholder='Username '
                    disabled
                    name="username"
                    defaultValue={userData.getUser.username}
                    required
                />
            </Form.Field>
            <Form.Field>
                <label>Mobile Phone</label>
                <input placeholder='Mobile Phone'
                    disabled
                    name="mobile"
                    defaultValue={userData.getUser.mobile}
                    required
                />
            </Form.Field>
            <Form.Field>
                <label>Age</label>
                <input placeholder='Age'
                    type='number'
                    disabled
                    name="age"
                    defaultValue={userData.getUser.age}
                    required
                />
            </Form.Field>
            <Form.Field>
                <label>Gender</label>
                <select placeholder='Gender'
                    disabled
                    name="gender"
                    defaultValue={userData.getUser.gender}
                >
                    <option>Male</option>
                    <option>Female</option>
                    <option>Others</option>
                </select>
            </Form.Field>
        </Form>

    )

}

export default ProfileInfor;