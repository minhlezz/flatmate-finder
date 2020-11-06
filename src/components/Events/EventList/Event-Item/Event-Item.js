import React from 'react';
import './Event-item.css';

const eventItem = (props) => {
    return (
        <li
            key={props.eventId}
            className="events_list-item"
        >
            <div>
                <h1> {props.title}</h1>
                <h2> ${props.price} -  {new Date(props.date).toLocaleDateString()}</h2>
            </div>
            <div>
              { props.userId === props.creatorId?  
                <p>  Current Owner </p> :
                <button className="btn"
                    onClick = {props.onDetail.bind(this,props.eventId)}
                >View Detial</button> 
                }
              
            </div>
            
        </li>
    )
}

export default eventItem;