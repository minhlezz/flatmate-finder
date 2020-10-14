import React from 'react';
import { Menu, Layout, Row, Col, Dropdown, Avatar } from 'antd';
import { HomeOutlined, MenuOutlined, LogoutOutlined, UserOutlined, UserAddOutlined } from '@ant-design/icons';
import './../../../styles/styles.css';

const { Header } = Layout;

function HeaderList() {
    const menuSignIn = (
        <Menu theme="dark" mode="vertical" defaultSelectedKeys={['1']}>

            <Menu.Item key="profile">
                <a href="/profile" target="_blank" rel="noopener noreferrer">
                    Profile
                </a>
            </Menu.Item>
            <Menu.Item key="settings" >
                <a href="/settings" target="_blank" rel="noopener noreferrer">
                    Settings
                </a>
            </Menu.Item>
            <Menu.Item key="flat" icon={LogoutOutlined}>
                <a href="/logout" target="_blank" rel="noopener noreferrer">
                    Logout
                </a>
            </Menu.Item>
        </Menu>
    );

    const menuSignOut = (
        <Menu 
        style={{ width: 200 }}
        theme="dark" 
        mode="vertical" 
        defaultSelectedKeys={['1']}>

            <Menu.Item key="login" icon={<UserOutlined />}>
                <a href="/login" target="_blank" rel="noopener noreferrer">
                    Sign In
                </a>
            </Menu.Item>
            <Menu.Item key="register" icon={<UserAddOutlined />}>
                <a href="/register" target="_blank" rel="noopener noreferrer">
                    Sign Up
                </a>
            </Menu.Item>
        </Menu>
    );

    return (
        <Header  >
            <Row align="middle">
                <Col flex="1 1 200px">
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <HomeOutlined
                                style={
                                    { fontSize: '25px' }
                                } />
                        </Menu.Item>

                        <Menu.Item key="flatmate">
                            <a href="/flatmate" target="_blank" rel="noopener noreferrer">
                                Find a flatmate
                    </a>
                        </Menu.Item>
                        <Menu.Item key="flat">
                            <a href="/home" target="_blank" rel="noopener noreferrer">
                                Find a home
                    </a>
                        </Menu.Item>
                    </Menu>
                </Col>
                {/* SignOut */}
                <Col flex="0 1 20px" >
                    <Dropdown overlay={menuSignOut}>
                        <a className="ant-dropdown-link user-icon" onClick={e => e.preventDefault()}>
                            <MenuOutlined style={{ fontSize: '20px' }} />

                        </a>
                    </Dropdown>
                </Col>
                {/* Sign */}
                {/* <Col flex="0 1 100px" >
                    <Dropdown overlay={menuSignIn}>
                        <a className="ant-dropdown-link user-icon" onClick={e => e.preventDefault()}>
                            User Name <UserOutlined style={{ fontSize: '20px' }} />
                        </a>
                    </Dropdown>
                </Col> */}

            </Row>

        </Header>

    );
}


export default HeaderList;