import React from 'react';
import { Button, Icon, Table } from 'semantic-ui-react'



function ManageHouseHold(props) {
    const households = props.getHouseHolds
    return (
        <Table striped >
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>ID</Table.HeaderCell>
                    <Table.HeaderCell>Title</Table.HeaderCell>
                    <Table.HeaderCell>Budget</Table.HeaderCell>
                    <Table.HeaderCell>Places</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {households.map((house, index) => {
                    return (
                        <Table.Row key={index}>
                            <Table.Cell>{index}</Table.Cell>
                            <Table.Cell>{house.houseTitle}</Table.Cell>
                            <Table.Cell >{house.budget}</Table.Cell>
                            <Table.Cell >{house.districtCityHH}</Table.Cell>
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


export default ManageHouseHold;