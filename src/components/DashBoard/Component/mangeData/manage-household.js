import React from 'react';
import { Checkbox, Icon, Table } from 'semantic-ui-react'



function ManageHouseHold(props) {
    const households = props.getHouseHolds
    return (
        <Table celled sortable >
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell />
                    <Table.HeaderCell>ID</Table.HeaderCell>
                    <Table.HeaderCell>Title</Table.HeaderCell>
                    <Table.HeaderCell>Budget</Table.HeaderCell>
                    <Table.HeaderCell>Places</Table.HeaderCell>
                    <Table.HeaderCell />
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {households.map((house, index) => {
                    return (
                        <Table.Row key={index}>
                            <Table.Cell collapsing>
                                <Checkbox />
                            </Table.Cell>
                            <Table.Cell>{index}</Table.Cell>
                            <Table.Cell>{house.houseTitle}</Table.Cell>
                            <Table.Cell >{house.budget}</Table.Cell>
                            <Table.Cell >{house.districtCityHH}</Table.Cell>
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


export default ManageHouseHold;