import React, { useContext, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './../styles/auth.css';


const RegisterPage = (props) => {



    return (
        <div className="auth-form">
            <h1>Register</h1>
            <Form>
                <Form.Group controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        Email must be in type abc@qwe.xyz
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="confirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="info" type="submit">
                    Register
                </Button>
            </Form>
        </div>
    )
}

export default RegisterPage;