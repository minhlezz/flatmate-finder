import React from 'react';
import { Divider, Form, Input, Label } from 'semantic-ui-react';

function FlatmateDetailInfor(props) {


    return (
        <>
            <Divider />
            <Form className="mr-1rem">
                <h1>Headings</h1>
                <Form.Group>
                    <Form.Field className="input-unborder">
                        <label>Budget/month</label>
                        <Input
                            disabled
                            value='2222'
                            placeholder='Budget per month'
                            name="budget"
                        />
                    </Form.Field>
                    <Form.Field className="input-unborder"
                    >
                        <label>Mobile</label>
                        <Input
                            disabled
                            value='09xxx'
                            name="mobile"
                        />
                    </Form.Field>
                </Form.Group>

                <Form.Group>
                    <Form.Field className="input-unborder">
                        <label>Minimum Stay</label>
                        <Input
                            disabled
                            placeholder='Minimum Stay'
                            name="minStay"
                            value='1 month'
                        />
                    </Form.Field>
                    <Form.Field className="input-unborder">
                        <label>Move In Date</label>
                        <Input
                            disabled
                            placeholder='Move In Date'
                            name="moveInDate"
                        />
                    </Form.Field>
                </Form.Group>
                <Form.Field className="input-unborder" inline>
                    <Label>Location</Label>
                    <Input
                        disabled
                        value='City/address/street'
                        name="location"
                    />
                </Form.Field>
                <Divider />
                <h3>Description</h3>
                <Form.Field className="input-unborder">
                    <Form.TextArea
                        disabled
                        placeholder='Description'
                        name="description"
                        value='Just looking for a place to work remotely and not be bothered... east maintenance, don’t need much.'
                    />
                </Form.Field>


                <Divider />
                <h3>Lifestyle</h3>
                <div className="container-row-unwrap">
                    <div className='container-column'>
                        <Form.Field className="input-unborder" inline>
                            <label>Cleanliness</label>
                            <Input
                                disabled
                                name="cleanliness"
                                value='cleanliness'
                            />
                        </Form.Field>
                        <Form.Field className="input-unborder" inline>
                            <label>OvernightGuests</label>
                            <Input
                                disabled
                                name="overnightGuests"
                                value='overnightGuests'
                            />
                        </Form.Field>
                        <Form.Field className="input-unborder" inline>
                            <label>Party Habits</label>
                            <Input
                                disabled
                                name="partyHabits"
                                value='partyHabits'
                            />
                        </Form.Field>
                        <Form.Field className="input-unborder" inline>
                            <label>Smoker</label>
                            <Input
                                disabled
                                name="Smoker"
                                value='Smoker'
                            />
                        </Form.Field>
                    </div>
                    <div className='container-column'>
                        <Form.Field className="input-unborder" inline>
                            <label>Get Up</label>
                            <Input
                                disabled
                                name="getUp"
                                value='getUp'
                            />
                        </Form.Field>
                        <Form.Field className="input-unborder" inline>
                            <label>Go To Bed</label>
                            <Input
                                disabled
                                name="goToBed"
                                value='goToBed'
                            />
                        </Form.Field>
                        <Form.Field className="input-unborder" inline>
                            <label>Work Schedule</label>
                            <Input
                                disabled
                                name="workSchedule"
                                value='workSchedule'
                            />
                        </Form.Field>
                        <Form.Field className="input-unborder" inline>
                            <label>Occupation</label>
                            <Input
                                disabled
                                name="occupation"
                                value='occupation'
                            />
                        </Form.Field>
                    </div>
                </div>
                <Divider />
                <h3>Pets Owner</h3>
                <Form.Field className="input-unborder" inline>
                    <label>Pets</label>
                    <Input
                        disabled
                        name="Pets"
                        value='Dogs,Cats'
                    />
                </Form.Field>
            </Form>
        </>
    )


}


export default FlatmateDetailInfor