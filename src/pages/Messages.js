import React, { useEffect, useContext } from 'react';
import MessageContent from '../components/Message/message-content';
import MessageUserList from '../components/Message/message-userList';
import { gql, useSubscription } from '@apollo/client'
import { useMessageDispatch } from '../context/message-context';
import { AuthContext } from '../context/auth-context';


const NEW_MESSAGE = gql`
  subscription newMessage {
    newMessage {
      id
      sender
      receiver
      content
      createdAt
    }
  }
`

function Message() {
    const { user } = useContext(AuthContext);
    const messageDispatch = useMessageDispatch();
    const { data: messageData, error: messageError } = useSubscription(
        NEW_MESSAGE
    )

    useEffect(() => {
        if (messageError) console.log(messageError)
        if (messageData) {
            const message = messageData.newMessage
            const otherUser = user.email === message.receiver ? message.sender : message.receiver;

            messageDispatch({
                type: 'ADD_MESSAGE',
                payload: {
                    email: otherUser,
                    message,
                }
            })
        }
    }, [messageError, messageData])
    return (
        <>

            <div className="container-row-unwrap ">
                <div className="container-column message-user-list bg-light">
                    <MessageUserList />
                </div>
                <div className="container-column">
                    <MessageContent />
                </div>
            </div>
        </>
    )
}


export default Message;