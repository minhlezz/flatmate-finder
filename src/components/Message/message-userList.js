import { useQuery } from '@apollo/client';
import React from 'react';
import { Spinner, Image } from 'react-bootstrap';
import { GET_USERS_MESSAGE } from '../../utils/graphql';
import '../../styles/message.css'
import { formatHour } from '../../utils/constants';
import { useMessageDispatch, useMessageState } from '../../context/message-context';
import classNames from 'classnames'

function MessageUserList() {
    const dispatch = useMessageDispatch();
    const { users } = useMessageState();
    const { loading } = useQuery(GET_USERS_MESSAGE, {
        onCompleted: data => dispatch({ type: 'SET_USERS', payload: data.users }),
        onError: err => console.log(err)
    })

    const selectedUser = users?.find((u) => u.selected === true)?.email
    let usersMarkUp
    if (!users || loading) {
        usersMarkUp = <Spinner animation='border' />;
    } else if (users.length === 0) {
        usersMarkUp = <p>No users have joined</p>
    } else if (users.length > 0) {
        usersMarkUp = users.map((user) => {
            const selected = selectedUser === user.email
            return (
                <div
                    className={classNames('user-selected', { 'bg-gray': selected })}
                    key={user.id}
                    role='button'
                    onClick={() =>
                        dispatch({ type: 'SET_SELECTED_USER', payload: user.email })
                    }
                >
                    <>
                        <div className="container-row user-list ">
                            <Image
                                src='https://pickaface.net/gallery/avatar/unr_mess_170916_0520_zfs40.png'
                                roundedCircle
                                style={{ width: 50, height: 50, objectFit: 'cover' }}
                            />
                            <div  className="d-none d-md-block ml-2" >
                                <p>{user.email}</p>
                                <p className="font-weight-light">
                                    {user.latestMessage ? user.latestMessage.content
                                        : 'You are now connected!'}
                                </p>

                            </div>
                            <div>
                                <p>{user.latestMessage ? formatHour(user.latestMessage.createdAt) : ''}</p>
                            </div>
                        </div>
                    </>
                </div>
            )

        })
    }
    return (
        <div>
            { usersMarkUp}
        </div>

    )
}

export default MessageUserList;