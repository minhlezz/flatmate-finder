import React, { useContext, useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { useForm } from '../utils/useFormHook';
import { gql, useMutation } from '@apollo/client';
import { AuthContext } from '../context/auth-context';


const LOGIN_USER = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token
        tokenExpiration
        userId
    }
  }
`;

function LoginPage(props) {
    const context = useContext(AuthContext);
    const [errors, setErrors] = useState({});
    const { onChange, onSubmit, values } = useForm(loginUserCallback, {
        email: '',
        password: '',
    });

    const [loginUser, { loading }] = useMutation(LOGIN_USER, {
        update(_, { data: { login: userData } }) {
            console.log(userData);
            context.login(userData)
            props.history.push('/flatmate');
        },
        onError(err) {
            console.log(err.graphQLErrors[0].extensions.exception.errors);
            setErrors(err.graphQLErrors[0].extensions.exception.errors);
        },
        variables: values
    });


    function loginUserCallback() {
        loginUser();
    }
    return (
        <div className="form-container ">
            <h1>Login</h1>
            <Form onSubmit={onSubmit} className={loading ? 'loading' : ''}>
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
                <Button type="submit" primary>
                    Login
                </Button>
                <p>Have an account yet? <NavLink to='/register'>Register!!</NavLink></p>
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

export default LoginPage;