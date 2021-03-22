import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Icon,
    Menu,
    Sidebar,
} from 'semantic-ui-react';
import './sidebar.css';

function SidebarDashboard() {
    const [activeItem, setActiveItem] = useState('chart');
    const handleActive = (e, { name }) => {
        setActiveItem({
            activeItem: name
        });
    }
    return (
        <Sidebar
            as={Menu}
            icon='labeled'
            inverted
            vertical
            visible
            className="sidebar"

        >
            <div className="icon-home">
                <Link
                    to="/dashboard"
                >
                    <Icon name='dashboard' size="big" color="blue"

                    />
                    <p>Dashboard</p>
                </Link>

            </div>
            <Menu.Item
                style={{
                    marginTop: "70px"
                }}
                name='chart'
                active={activeItem.activeItem === 'chart'}
                color='blue'
                onClick={handleActive}
                as={Link}
                to='/dashboard/chart'
            >
                <Icon name='chart bar' />
            </Menu.Item>
            <Menu.Item
                name='budgetChart'
                active={activeItem.activeItem === 'budgetChart'}
                color='blue'
                onClick={handleActive}
                as={Link}
                to='/dashboard/analysis'
            >
                <Icon name='chart area' />
            </Menu.Item>

            <Menu.Item
                name='mnguser'
                active={activeItem.activeItem === 'mnguser'}
                onClick={handleActive}
                as={Link}
                to='/dashboard/manage'
            >
                <Icon name='table'
                    style={{
                        color: '#fff'
                    }}
                />
            </Menu.Item>
        </Sidebar>

    )
}

export default SidebarDashboard;