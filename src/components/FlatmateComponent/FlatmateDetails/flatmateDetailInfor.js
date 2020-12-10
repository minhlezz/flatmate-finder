import React from 'react';
import { Divider, Form, Input, Label } from 'semantic-ui-react';

function FlatmateDetailInfor(props) {

    const fmData = props.flatmateData;
    return (
        <>
            <Divider />
            <Form className="mr-1rem">
                { fmData.getUser.headline? <h1>{fmData.getUser.headline}</h1> :
                <h1>Title</h1>}

                <Form.Group>
                    <Form.Field className="input-unborder" inline>
                        <Label>Budget/month</Label>
                        <Input
                            readOnly
                            name="budget"
                            defaultValue={fmData.getUser.budget? ('$'+fmData.getUser.budget): ''}
                        />
                    </Form.Field>
                    <Form.Field className="input-unborder" inline>
                        <Label>Mobile</Label>
                        <Input
                            readOnly
                            name="mobile"
                            defaultValue={fmData.getUser.mobile?fmData.getUser.mobile:'' }
                        />
                    </Form.Field>
                </Form.Group>

                <Form.Group >
                    <Form.Field className="input-unborder" inline>
                        <Label>Minimum Stay</Label>
                        <Input
                            readOnly
                            placeholder='Minimum Stay'
                            name="minStay"
                            defaultValue={fmData.getUser.minStay}
                        />
                    </Form.Field>
                    <Form.Field className="input-unborder" inline>
                        <Label>Move In Date</Label>
                        <Input
                            readOnly
                            placeholder='Move In Date'
                            name="moveInDate"
                            defaultValue={fmData.getUser.moveInDate}
                        />
                    </Form.Field>
                </Form.Group>
                <Divider />
                <h3>Description</h3>
                <Form.Field className="input-unborder">
                    <Form.TextArea
                        readOnly
                        placeholder='Description'
                        name="description"
                        defaultValue={fmData.getUser.aboutMe}
                    />
                </Form.Field>


                <Divider />
                <h3>Lifestyle</h3>
                <div className="container-row-unwrap">
                    <div className='container-column'>
                        <Form.Field className="input-unborder" inline>
                            <Label>Cleanliness</Label>
                            <Input
                                readOnly
                                name="cleanliness"
                                defaultValue={fmData.getUser.cleanliness}
                            />
                        </Form.Field>
                        <Form.Field className="input-unborder" inline>
                            <Label>OvernightGuests</Label>
                            <Input
                                readOnly
                                name="overnightGuests"
                                defaultValue={fmData.getUser.overnightGuests}
                            />
                        </Form.Field>
                        <Form.Field className="input-unborder" inline>
                            <Label>Party Habits</Label>
                            <Input
                                readOnly
                                name="partyHabits"
                                defaultValue={fmData.getUser.partyHabits}
                            />
                        </Form.Field>
                        <Form.Field className="input-unborder" inline>
                            <Label>Smoker</Label>
                            <Input
                                readOnly
                                name="Smoker"
                                defaultValue={fmData.getUser.smoker}
                            />
                        </Form.Field>
                    </div>
                    <div className='container-column'>
                        <Form.Field className="input-unborder" inline>
                            <Label>Get Up</Label>
                            <Input
                                readOnly
                                name="getUp"
                                defaultValue={fmData.getUser.getUp}
                            />
                        </Form.Field>
                        <Form.Field className="input-unborder" inline>
                            <Label>Go To Bed</Label>
                            <Input
                                readOnly
                                name="goToBed"
                                defaultValue={fmData.getUser.goToBed}
                            />
                        </Form.Field>
                        <Form.Field className="input-unborder" inline>
                            <Label>Work Schedule</Label>
                            <Input
                                readOnly
                                name="workSchedule"
                                defaultValue={fmData.getUser.workSchedule}
                            />
                        </Form.Field>
                        <Form.Field className="input-unborder" inline>
                            <Label>Occupation</Label>
                            <Input
                                readOnly
                                name="occupation"
                                defaultValue={fmData.getUser.occupation}
                            />
                        </Form.Field>
                    </div>
                </div>
                <Divider />
                <h3>Pets Owner</h3>
                <Form.Field className="input-unborder" inline>
                    <Label>Pets</Label>
                    <Input
                        readOnly
                        name="Pets"
                        value='Dogs,Cats'
                    />
                </Form.Field>
            </Form>
        </>
    )


}


export default FlatmateDetailInfor