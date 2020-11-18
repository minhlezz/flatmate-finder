import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/auth-context';
import {
    Checkbox,
    Grid,
    Header,
    Icon,
    Image,
    Menu,
    Segment,
    Sidebar,
} from 'semantic-ui-react'

export default function MainNavigation(props) {
    const [visible, setVisible] = useState(false)


    return (
        <Grid columns={1}>
            <Grid.Column>
                <Checkbox
                    checked={visible}
                    label={{ children: <code>visible</code> }}
                    onChange={(e, data) => setVisible(data.checked)}
                />
                 <Icon name='th list' />
            </Grid.Column>
        </Grid>

    );
}

