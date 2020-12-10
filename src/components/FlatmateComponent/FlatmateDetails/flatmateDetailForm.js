import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Form, Button, Divider, Select, Checkbox, Radio, Input, TextArea } from 'semantic-ui-react';
import '../../../styles/flatmate.css'
import { FM_UPDATE_INFOR } from '../../../utils/mutation';
import { selectData } from '../../../data/selectData';
const options = [
    { key: 'm', text: '1 month', value: '1month' },
    { key: 'f', text: '2 month', value: '2month' },
    { key: 'o', text: '3 month', value: '3month' },
]


function FlatmateDetailForm(props) {
    const flatmateID = props.flatmateID;
    const onEdit = () => {
        props.onEdit()
    }
    const fmData = props.flatmateData;
    const [values, setValues] = useState({});
    const [fmUpdateInfor] = useMutation(FM_UPDATE_INFOR);

    const onChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });

    };
    const onSubmit = (e) => {
        e.preventDefault();
        fmUpdateInfor({
            update(_, result) {
                console.log(result);
            },
            variables: {
                id: flatmateID,
                ...values,
                budget: parseFloat(values.budget)
            },

        })
        console.log(fmData.getUser.budget);

        onEdit();

    }

    return (
        <>

            <Form
                onSubmit={onSubmit}
            >
                <div className="container-row">
                    <Button className="btn-general mr-1rem" type='submit' secondary  > Save</Button>
                    <Button className="btn-general" secondary
                        onClick={onEdit}
                    > Cancel</Button>

                </div>
                <div className="form-lists-edit mt-1rem">
                    <h3>Headline</h3>
                    <Form.Field>
                        <Form.Input size="big"
                            placeholder='Headline'
                            name="headline"
                            type="text"
                            defaultValue={fmData.getUser.headline}
                            onChange={onChange}
                        />
                    </Form.Field>
                    <h3>Monthly Rental Rate</h3>
                    <Form.Field>
                        <Form.Input placeholder='$0.0000'
                            label='Per month budget'
                            type='number'
                            name="budget"
                            onChange={onChange}
                            required
                        />
                    </Form.Field>
                    <h3>Duration</h3>
                    <Form.Group widths='equal'>
                        <Form.Field>
                            <label>Move In Date</label>
                            <input type="date"
                                name="moveInDate"
                                defaultValue={fmData.getUser.moveInDate}
                                onChange={onChange}
                            />
                        </Form.Field>
                        <Form.Field
                            control={Select}
                            label='Minimum Stay'
                            options={options}
                            placeholder='Minimum Stay'
                            defaultValue={fmData.getUser.minStay}
                            onChange={onChange}
                        />
                    </Form.Group>
                </div>
                <Divider />
                <div className="form-lists-edit mt-1rem">
                    <h3>Description</h3>
                    <Form.Field
                        control={TextArea}
                        label='Description'
                        placeholder='Description'
                        defaultValue={fmData.getUser.description}
                        onChange={onChange}
                    />
                </div>

                <Divider />
                <div className="form-lists-edit mt-1rem">
                    <h3>Lifestyle</h3>
                    <Form.Group widths='equal'>
                        <Form.Field>
                            <label>Cleanliness</label>
                            <select placeholder='Cleanliness'
                                name="cleanliness"
                                defaultValue={fmData.getUser.cleanliness}
                                onChange={onChange}
                            >
                                {selectData.cleanliness.map((option) => {
                                    return <option key={option.key} value={option.value}>{option.label}</option>
                                })}
                            </select>
                        </Form.Field>
                        <Form.Field>
                            <label>Overnight Guests</label>
                            <select
                                placeholder='Overnight Guests'
                                name="overnightGuests"
                                defaultValue={fmData.getUser.overnightGuests}
                                onChange={onChange}
                            >
                                {selectData.overnightGuests.map((option) => {
                                    return <option key={option.key} value={option.value}>{option.label}</option>
                                })}
                            </select>
                        </Form.Field>
                        <Form.Field>
                            <label>Party Habits</label>
                            <select
                                placeholder='Party Habits'
                                name="partyHabits"
                                defaultValue={fmData.getUser.partyHabits}
                                onChange={onChange}
                            >
                                {selectData.partyHabits.map((option) => {
                                    return <option key={option.key} value={option.value}>{option.label}</option>
                                })}
                            </select>
                        </Form.Field>
                    </Form.Group>

                    <Form.Group widths='equal'>
                        <Form.Field>
                            <label>Get Up</label>
                            <select
                                placeholder='Get Up'
                                name="getUp"
                                defaultValue={fmData.getUser.getUp ? fmData.getUser.getUp : ''}
                                onChange={onChange}
                            >
                                {selectData.getUp.map((option) => {
                                    return <option key={option.key} value={option.value}>{option.label}</option>
                                })}
                            </select>
                        </Form.Field>
                        <Form.Field>
                            <label>Get Up</label>
                            <select
                                placeholder='Go To Bed'
                                name="goToBed"
                                defaultValue={fmData.getUser.goToBed ? fmData.getUser.goToBed : ''}
                                onChange={onChange}
                            >
                                {selectData.goToBed.map((option) => {
                                    return <option key={option.key} value={option.value}>{option.label}</option>
                                })}
                            </select>
                        </Form.Field>
                        <Form.Field>
                            <label>Food Preference</label>
                            <select placeholder='Food Preference'
                                name="foodPreference"
                                defaultValue={fmData.getUser.foodPreference}
                                onChange={onChange}
                            >
                                {selectData.foodPreference.map((option) => {
                                    return <option key={option.key} value={option.value}>{option.label}</option>
                                })}
                            </select>
                        </Form.Field>
                    </Form.Group>

                    <Form.Group widths='equal'>
                        <Form.Field>
                            <label>Smoker</label>
                            <select placeholder='Smoker '
                                name="smoker"
                                defaultValue={fmData.getUser.smoker}
                                onChange={onChange}
                            >
                                {selectData.smoker.map((option) => {
                                    return <option key={option.key} value={option.value}>{option.label}</option>
                                })}
                            </select>
                        </Form.Field>
                        <Form.Field>
                            <label>Work Schedule</label>
                            <select placeholder='Work Schedule '
                                name="workSchedule"
                                defaultValue={fmData.getUser.workSchedule}
                                onChange={onChange}
                            >
                                {selectData.workSchedule.map((option) => {
                                    return <option key={option.key} value={option.value}>{option.label}</option>
                                })}
                            </select>
                        </Form.Field>
                        <Form.Field>
                            <label>Occupation</label>
                            <select placeholder='Occupation'
                                name="occupation"
                                defaultValue={fmData.getUser.occupation}
                                onChange={onChange}
                            >
                                {selectData.occupation.map((option) => {
                                    return <option key={option.key} value={option.value}>{option.label}</option>
                                })}
                            </select>
                        </Form.Field>
                    </Form.Group>
                    <Divider />
                    <h3>Pets </h3>
                    <Form.Group widths='equal'>
                        <Form.Field
                            control={Checkbox}
                            label='Cats'
                        />
                        <Form.Field
                            control={Checkbox}
                            label='Dogs'
                        />
                        <Form.Field
                            control={Checkbox}
                            label='Fish'
                        />
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Field
                            control={Checkbox}
                            label='Birds'
                        />
                        <Form.Field
                            control={Checkbox}
                            label='Small Pets'
                        />
                        <Form.Field
                            control={Checkbox}
                            label='Reptiles'
                        />
                    </Form.Group>
                </div>
            </Form>


        </>
    )
}


export default FlatmateDetailForm