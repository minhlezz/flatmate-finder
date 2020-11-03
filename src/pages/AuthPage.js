import React, { Component } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';


class AuthPage extends Component {
    render() {
        return (
            <form className="form-control">
                <ul>
                    <label>Username</label>
                    <input type="text"></input>

                </ul>
            </form>
        );

    }
}

export default AuthPage;