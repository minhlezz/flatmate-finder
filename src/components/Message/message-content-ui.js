import React, { useContext } from 'react';
import { AuthContext } from '../../context/auth-context';
import classNames from 'classnames'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import moment from 'moment'
function Message({ message }) {
    const { user } = useContext(AuthContext);
    const sender = message.sender === user.email;
    const receiver = !sender;
    return (
            <OverlayTrigger
                placement={sender ? 'right' : 'left'}
                overlay={
                    <Tooltip>
                        {moment(message.createdAt).format('MMMM DD, YYYY - h:mm a')}
                    </Tooltip>

                }
                transition={false}
            >
           
                <div
                    className={classNames('d-flex my-3',{
                        'ml-auto': sender,
                        'mr-auto': receiver
                    })}

                >
                    <div
                        className={classNames('py-2 px-3 rounded-pill',{
                            'bg-primary': sender,
                            'bg-light': receiver
                        })}
                    >
                        <p className={classNames({ 'text-white': sender })}>
                            {message.content}
                        </p>
                    </div>
                </div>
           
            </OverlayTrigger>

    )
}


export default Message;