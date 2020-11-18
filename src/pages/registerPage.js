import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { gql, useMutation } from '@apollo/client';
import { useForm } from '../utils/useFormHook';
import { NavLink } from 'react-router-dom';

const REGISTER_USER = gql`
      mutation Register(
          $email: String!, 
          $password: String!
          $confirmPassword: String!
          ){
            register(
                input: {
                    email: $email,
                    password: $password,
                    confirmPassword: $confirmPassword
                }
            ){
                id
                email
            }
        }
`;
function RegisterPage(props) {
    const [errors, setErrors] = useState({});
    const { onChange, onSubmit, values } = useForm(registerUser, {
        email: '',
        password: '',
        confirmPassword: ''
    });


    const [addUser, { loading }] = useMutation(REGISTER_USER, {
        update(_, result) {
            console.log(result);
            props.history.push('/login');
        },

        onError(err) {
            console.log(err.graphQLErrors[0].extensions.exception.errors);
            setErrors(err.graphQLErrors[0].extensions.exception.errors);
        },
        variables: values
    });

    function registerUser() {
        addUser();
    }


    return (
        <div className="form-container ">
            <h1>Register</h1>
            <Form
                onSubmit={onSubmit}
                noValidate
                className={loading ? 'loading' : ''}
            >
                <Form.Input
                    label="Email"
                    placeholder="Email.."
                    name="email"
                    type="email"
                    value={values.email}
                    error={errors.email ? true : false}
                    onChange={onChange}
                />

                <Form.Input
                    label="Password"
                    placeholder="Password.."
                    name="password"
                    type="password"
                    value={values.password}
                    error={errors.password ? true : false}
                    onChange={onChange}
                />
                <Form.Input
                    label="Confirm Password"
                    placeholder="Confirm Password.."
                    name="confirmPassword"
                    type="password"
                    value={values.confirmPassword}
                    error={errors.confirmPassword ? true : false}
                    onChange={onChange}
                />
                <Button type="submit" primary>
                    Register
                </Button>
                <p>Have account already! <NavLink to='/login'>Switch to Login</NavLink></p>
            </Form>
            {Object.keys(errors).length > 0 && (
                <div className="ui error message">
                    <ul className="list">
                        {Object.values(errors).map((value) => (
                            <li key={value}>{value}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default RegisterPage;