import React from 'react';
import { Button, Icon, Table } from 'semantic-ui-react'



function ManageUser(props) {
    const users = props.users
    return (
        <Table striped >
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>ID</Table.HeaderCell>
                    <Table.HeaderCell>Username</Table.HeaderCell>
                    <Table.HeaderCell>E-mail</Table.HeaderCell>
                    <Table.HeaderCell>Places</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {users.map((user, index) => {
                    return (
                        <Table.Row key={index}>
                            <Table.Cell>{index}</Table.Cell>
                            <Table.Cell>{user.username}</Table.Cell>
                            <Table.Cell >{user.email}</Table.Cell>
                            <Table.Cell >{user.districtCityUser}</Table.Cell>
                        </Table.Row>
                    )
                })}
            </Table.Body>
            <Table.Footer fullWidth>
                <Table.Row>
                    <Table.HeaderCell />
                    <Table.HeaderCell colSpan='4'>
                        <Button
                            floated='right'
                            icon
                            labelPosition='left'
                            primary
                            disabled
                            size='small'
                        >
                            <Icon name='user' /> Add User
                </Button>
                        <Button
                            floated='right'
                            size='small'
                            icon
                            labelPosition='left'
                            negative
                            disabled
                        >
                            <Icon name='delete' />Delete User
                </Button>
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Footer>
        </Table>
    )
}


export default ManageUser;