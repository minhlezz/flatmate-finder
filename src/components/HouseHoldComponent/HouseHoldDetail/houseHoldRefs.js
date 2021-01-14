import React from 'react';
import { Divider, Label, Checkbox } from 'semantic-ui-react';
import LocationAPI from '../../LocationAPI/locationAPI';
import { Col } from 'react-bootstrap';
import '../../../styles/household.css'
function HouseHoldRefs(props) {
    const sample = 'A job description is an internal document that clearly states the essential job requirements, job duties, job responsibilities, and skills required to perform a specific role. A more detailed job description will cover how success is measured in the role so it can be used during performance evaluations.';
    const {
        area, bath, bed,
        budget, buildingType, houseHoldSex,
        houseDescription, houseTitle, airConditioning,
        internet, parking, privateBathroom, yard, } = props.houseData.getHouseHold;


    return (
        <>
            <Col className="household-position" >
                <h3 style={{
                    textAlign: "center"
                }} >{houseTitle}</h3>
                <div>
                    <Label>Description</Label>
                    <p
                        style={{
                            minHeight: '100px',
                            minWidth: '350px',
                        }}
                    >{houseDescription ? houseDescription : sample}</p>
                </div>
                <Divider />
                <div>
                    <Label>Address</Label>
                    <p>1 street, ABC city, XYZ Country </p>
                </div>
                <Divider />
                <div className="maps" >
                    <Label>Position</Label>
                    <LocationAPI />
                </div>

            </Col>
            <Col xs={6} >
                <h2
                    style={{
                        textAlign: 'center'
                    }} >Household Preferences</h2>

                <Divider />
                <div className="household-overview" >
                    <div>
                        <Label>Bath</Label>
                        <p>{bath ? bath : 'NaN'}</p>
                    </div>
                    <div>
                        <Label>Bed</Label>
                        <p>{bed ? bed : 'NaN'}</p>
                    </div>
                    <div>
                        <Label>Area</Label>
                        <p>{area ? area : 'NaN'}</p>
                    </div>
                    <div>
                        <Label>Budget</Label>
                        <p>{budget ? budget : 'NaN'}</p>
                    </div>

                    <div>
                        <Label>BuldingType</Label>
                        <p>{buildingType}</p>
                    </div>
                    <div>
                        <Label>Household Sex</Label>
                        <p>{houseHoldSex ? houseHoldSex : ''}</p>
                    </div>

                </div>
                <Divider />
                {/* Checkbox Type */}

                <div className="household-detail">
                    <div>
                        {airConditioning ? <Label color='teal'>Air Conditioning</Label> : ''}
                        {internet ? <Label color='teal'>Internet</Label> : ''}
                        {parking ? <Label color='teal'>Parking</Label> : ''}
                        {privateBathroom ? <Label color='teal'>Private Bathroom</Label> : ''}
                        {yard ? <Label color='teal'>yard</Label> : ''}
                    </div>
                </div>
            </Col>

        </>
    )
}

export default HouseHoldRefs;