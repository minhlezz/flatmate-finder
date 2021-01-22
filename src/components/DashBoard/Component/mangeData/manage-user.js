import React from 'react';
import { Button, Icon, Table, Checkbox } from 'semantic-ui-react'



function ManageUser(props) {
    const users = props.users
    return (
        <Table celled sortable >
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell />
                    <Table.HeaderCell>ID</Table.HeaderCell>
                    <Table.HeaderCell>Username</Table.HeaderCell>
                    <Table.HeaderCell>E-mail</Table.HeaderCell>
                    <Table.HeaderCell>Places</Table.HeaderCell>
                    <Table.HeaderCell />
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {users.map((user, index) => {
                    return (
                        <Table.Row key={index}>
                            <Table.Cell collapsing>
                                <Checkbox />
                            </Table.Cell>
                            <Table.Cell>{index}</Table.Cell>
                            <Table.Cell>{user.username}</Table.Cell>
                            <Table.Cell >{user.email}</Table.Cell>
                            <Table.Cell >{user.districtCityUser}</Table.Cell>
                            <Table.Cell>
                                <Icon
                                    color='red'
                                    name='delete' />

                            </Table.Cell>
                        </Table.Row>
                    )
                })}
            </Table.Body>
        </Table>
    )
}


export default ManageUser;