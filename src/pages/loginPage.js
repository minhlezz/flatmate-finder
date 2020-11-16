import React, { useContext, useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './../styles/auth.css';

const loginStyle = ({
    button: {
        marginLeft: '5rem',
        width: '8rem'
    },

    nav: {
        margin: '0 0.5rem'
    }

})

const loginPage = (props) => {
    return (
        <div className="auth-form">
            <h1>Login</h1>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <div className="horizontal-items">
                    <Button variant="primary" type="submit">
                        Submit
                </Button>
                    <NavLink
                        to='/register'
                        style={{ marginLeft: '1rem' }}
                    >No Account Yet?? Register now!</NavLink>
                </div>

            </Form>
        </div>
    )
}

export default loginPage;