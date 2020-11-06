import React, { Component } from 'react';
import './../styles/auth.css';
import AuthContext from '../context/auth-context';
import { Form, Row, Col, Button } from 'react-bootstrap';

class AuthPage extends Component {

    state = {
        isLogin: true
    }

    static contextType = AuthContext;
    constructor(props) {
        super(props);
        this.emailEl = React.createRef();
        this.passwordEl = React.createRef();
    }

    switchModeHandler = () => {
        this.setState(prevState => {
            return { isLogin: !prevState.isLogin }
        }
        );
    }

    submitHandler = event => {
        event.preventDefault();
        const email = this.emailEl.current.value;
        const password = this.passwordEl.current.value;

        // if (email.trim().length === 0 || password.trim().length === 0) {
        //     return;
        // }
        let requestBody = {
            query: `
              query Login($email: String!, $password: String!) {
                login(email: $email, password: $password) {
                  userId
                  token
                  tokenExpiration
                }
              }
            `,
            variables: {
                email: email,
                password: password
            }
        };
        if (!this.state.isLogin) {
            requestBody = {
                query: `
                mutation CreateUser($email: String!, $password: String!) {
                  createUser(userInput: {email: $email, password: $password}) {
                    _id
                    email
                  }
                }
              `,
                variables: {
                    email: email,
                    password: password
                }
            };
        }
        fetch('http://localhost:3001/graphql', {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then(res => {
                if (res.status !== 200 && res.status !== 201) {
                    throw new Error('failed')
                }
                return res.json();
            })
            .then(resData => {
                if (resData.data.login.token) {
                    this.context.login(
                        resData.data.login.token,
                        resData.data.login.userId,
                        resData.data.login.tokenExpiration
                    )
                }
            })
            .catch(err => {
                console.log(err);
            })
            ;
    };

    render() {
        return (
            // <form className="auth-form" onSubmit={this.submitHandler}>
            //     <div className="form-control">
            //         <label htmlFor="email"> E-Mail</label>
            //         <input type="email" id="email"
            //             ref={this.emailEl}
            //         ></input>
            //     </div>
            //     <div className="form-control">
            //         <label htmlFor="password"

            //         > Password</label>
            //         <input type="password" id="password"
            //         ref={this.passwordEl}></input>
            //     </div>
            //     <div className="form-actions">
            //         <button type="submit">Submit</button>
            //         <button type="button"
            //             onClick={this.switchModeHandler}>Switch to 
            //          {this.state.isLogin ? ' Sign Up' : ' Login'}
            //         </button>
            //     </div>
            // </form>
            <div className="auth-form">
                <Form onSubmit={this.submitHandler}>
                    <Form.Group as={Row} controlId="Email">
                        <Form.Label column sm={2}>
                            Email
                    </Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                type="email"
                                placeholder="Email"
                                ref={this.emailEl}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="Password">
                        <Form.Label column sm={2}>
                            Password
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                ref={this.passwordEl}
                            />
                        </Col>
                    </Form.Group>
                    <Button type="submit">Submit form</Button>
                    <Button
                        type="button"
                        onClick= {this.switchModeHandler}
                    > Switch To {this.state.isLogin? 'Sign Up': 'Login'} 
                    </Button>
                </Form>
            </div>


        );
    }
}

export default AuthPage;