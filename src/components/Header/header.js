import React from 'react';
import './header.css';
import { NavLink } from 'react-router-dom';
import { Layout, Menu, Button } from 'antd';

const { Header } = Layout;


const HeaderComponent = () => {


    return (
        <Header className="header">
            <div className="logo">
                <h1>
                <NavLink to="/default">Logo</NavLink>
                </h1>
            </div>
            <div className="menu-header">
                <Menu theme="dark" mode="horizontal" >
                    <Menu.Item key="2">
                        <Button type="primary">Logout</Button>
                    </Menu.Item>
                    <Menu.Item key="1">
                        <NavLink to="/login">Login</NavLink>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <NavLink to="/home">Home</NavLink>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <NavLink to="/flatmate">Flatmate</NavLink>
                    </Menu.Item>
                </Menu>
            </div>
        </Header>
    )
};

export default HeaderComponent;