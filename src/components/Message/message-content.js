import React, { useEffect, Fragment, useState } from 'react';
import { useLazyQuery, useMutation } from '@apollo/client';
import { Spinner } from 'react-bootstrap';
import { useMessageDispatch, useMessageState } from '../../context/message-context';
import { GET_MESSAGES } from '../../utils/graphql';
import { SEND_MESSAGE } from '../../utils/mutation';
import Message from './message-content-ui';
import { Form } from 'react-bootstrap'
import { Icon } from 'semantic-ui-react';

function MessageContent() {
    const { users } = useMessageState()
    const dispatch = useMessageDispatch();
    const selectedUser = users?.find((u) => u.selected === true);
    const messages = selectedUser?.messages
    const [content, setContent] = useState('')

    //Query 
    const [
        getMessages,
        { loading: messagesLoading, data: messagesData },
    ] = useLazyQuery(GET_MESSAGES);

    //Mutation
    const [sendMessage] = useMutation(SEND_MESSAGE, {
        onError: (err) => console.log(err),
    })
    //Side Effect
    useEffect(() => {
        if (selectedUser && !selectedUser.messages) {
            getMessages({ variables: { sender: selectedUser.email } })
        }
    }, [selectedUser])
    useEffect(() => {
        if (messagesData) {
            dispatch({
                type: 'SET_USER_MESSAGES',
                payload: {
                    email: selectedUser.email,
                    messages: messagesData.getMessages,
                },
            })
        }
    }, [messagesData])

    /**Handle Form Submit */
    const submitMessage = (e) => {
        e.preventDefault();
        if (content.trim() === '' || !selectedUser) return
        sendMessage({
            variables: {
                receiver: selectedUser.email,
                content: content
            }
        });
        setContent('');
    }
    let selectedChatMarkUp;
    /**
     * 1 - check messages exist
     * 2- loading
     * 3- bind data
     * 4- first chat
     */
    if (!messages && !messagesLoading) {
        selectedChatMarkUp = <p className="info-text">Select a user chat</p>
    } else if (messagesLoading) {
        selectedChatMarkUp = <Spinner animation='border' />;
    } else if (messages.length  > 0) {
        selectedChatMarkUp = messages.map((message, index) => {
            return (
                <Fragment key={message.id}>
                    <Message message={message} />
                    {index === messages.length - 1 && (
                        <div className='invisible'>
                            <hr className='m-0' />
                        </div>
                    )}
                </Fragment>
            )
        })

    } else if (messages.length === 0) {
        selectedChatMarkUp = <p className="info-text">Connected ! let send message to your friend!!</p>
    }

    return (
        <>
            <div >
                <div className="message-content d-flex flex-column-reverse">
                    {selectedChatMarkUp}
                </div>
                <div>
                    <Form onSubmit={submitMessage}>
                        <Form.Group className="d-flex align-items-center">
                            <Form.Control
                                type="text"
                                className="message-input rounded-pill p-4 bg-light border-0"
                                placeholder="Type a message.."
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                            />
                            <Icon
                                className="text-primary d-flex align-items-center ml-2"
                                size='big'
                                name="send"
                                onClick={submitMessage}
                                role="button"
                            />
                        </Form.Group>
                    </Form>
                </div>
            </div>

        </>
    )
}

export default MessageContent;