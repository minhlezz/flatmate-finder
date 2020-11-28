import React from 'react';
import { Form, Button, Divider, Select, Checkbox, Radio, Input, TextArea } from 'semantic-ui-react';
import '../../../styles/flatmate.css'

const options = [
    { key: 'm', text: '1 month', value: '1month' },
    { key: 'f', text: '2 month', value: '2month' },
    { key: 'o', text: '3 month', value: '3month' },
]
const descriptionGuide = 'Try to have at least 20 words. Our most successful listings are more than 160 words long.'

function FlatmateDetailForm(props) {
    const onEdit = () => {
        props.onEdit()
    }
    return (
        <>
            <div className="container-row">
                <Button className="btn-general mr-1rem" secondary > Save</Button>
                <Button className="btn-general" secondary
                    onClick={onEdit}
                > Cancel</Button>

            </div>
            <Form>
                <div className="form-lists-edit mt-1rem">
                    <h3>Headline</h3>
                    <Form.Field>
                        <input size="big" placeholder='Headline'
                            name="headline"
                        />
                    </Form.Field>
                    <h3>Monthly Rental Rate</h3>
                    <Form.Field>
                        <label>Per month budget</label>
                        <input placeholder='$0.0000'
                            name="budget"
                        />
                    </Form.Field>
                    <h3>Duration</h3>
                    <Form.Group widths='equal'>
                        <Form.Field>
                            <label>Move In Date</label>
                            <input type="date"
                                name="moveInDate"
                            />
                        </Form.Field>
                        <Form.Field
                            control={Select}
                            label='Minimum Stay'
                            options={options}
                            placeholder='Minimum Stay'
                        />
                    </Form.Group>
                    <h3>Location</h3>
                    <Form.Group>
                        <Form.Field
                            inline
                            control={Select}
                            label='Province'
                            options={options}
                            placeholder='Province'
                        />
                        <Form.Field
                            inline
                            control={Select}
                            label='City'
                            options={options}
                            placeholder='City'
                        />
                    </Form.Group>

                </div>
                <Divider />
                <div className="form-lists-edit mt-1rem">
                    <h3>Description</h3>
                    <Form.Field
                        control={TextArea}
                        label='About Me'
                        placeholder='Minimum Stay'
                    />
                </div>
                <Divider />
                <div className="form-lists-edit mt-1rem">
                    <h3>Lifestyle</h3>
                    <Form.Group widths='equal'>
                        <Form.Field
                            control={Select}
                            label='Cleanliness'
                            options={options}
                            placeholder='Cleanliness '
                        />
                        <Form.Field
                            control={Select}
                            label='Overnight Guests'
                            options={options}
                            placeholder='Overnight Guests '
                        />
                        <Form.Field
                            control={Select}
                            label='Party Habits'
                            options={options}
                            placeholder='Party Habits '
                        />
                    </Form.Group>

                    <Form.Group widths='equal'>
                        <Form.Field
                            control={Select}
                            label='Get Up'
                            options={options}
                            placeholder='Get Up '
                        />
                        <Form.Field
                            control={Select}
                            label='Go To Bed'
                            options={options}
                            placeholder='Go To Bed'
                        />
                        <Form.Field
                            control={Select}
                            label='Food Preference'
                            options={options}
                            placeholder='Food Preference'
                        />
                    </Form.Group>

                    <Form.Group widths='equal'>
                        <Form.Field
                            control={Select}
                            label='Smoker'
                            options={options}
                            placeholder='Smoker'
                        />
                        <Form.Field
                            control={Select}
                            label='Work Schedule'
                            options={options}
                            placeholder='Work Schedule'
                        />
                        <Form.Field
                            control={Select}
                            label='Occupation'
                            options={options}
                            placeholder='Occupation'
                        />
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