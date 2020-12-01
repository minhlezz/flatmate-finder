import React from 'react';
import '../../../styles/flatmate.css';
import { Card, Spinner } from 'react-bootstrap';
import { GET_USER } from '../../../utils/graphql';
import { useQuery } from '@apollo/client';
import { Icon } from 'semantic-ui-react';

function FlatmateDetailCard(props) {
    const url = 'https://1.bp.blogspot.com/-emHO_9HVxGU/WZazwgy8_rI/AAAAAAAAAhs/3Zg7j4TZAlM2gMovjXK4FAEf3ju55hmEwCLcBGAs/s1600/18881967_131782964052220_5128435195745790304_n.jpg';
    const flatmateID = props.flatmateID
    const { loading, error, data } = useQuery(GET_USER, {
        variables: {
            id: flatmateID
        }
    });
    const fmData = data;
    const renderChild = (gender) => {
        if (gender?.toString() === 'Male') return <Icon name='male' />
        if (gender?.toString() === 'Female') return <Icon name='female' />
        if (gender?.toString() === 'Others') return <Icon name='transgender' />
    }
    if (error) return <h1>Error...</h1>
    return (
        <>
            {loading ? (<Spinner />) : (<Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={url} />
                <Card.Body>
                    <Card.Title>{fmData.getUser.username}</Card.Title>
                    <Card.Text>
                        {renderChild(fmData.getUser.gender)}
                        {fmData.getUser.age}
                    </Card.Text>
                </Card.Body>
            </Card>)}
        </>
    )
}

export default FlatmateDetailCard;