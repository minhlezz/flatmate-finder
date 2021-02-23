import React, { useState, useContext } from 'react';
import FlatmateDetailForm from '../components/FlatmateComponent/FlatmateDetails/flatmateDetailForm';
import FlatmateDetailCard from '../components/FlatmateComponent/FlatmateDetails/flatmateDetailCard';
import { Button } from 'semantic-ui-react';
import FlatmateDetailInfor from '../components/FlatmateComponent/FlatmateDetails/flatmateDetailInfor';
import { FM_USERINFOR } from '../utils/graphql';
import { useQuery } from '@apollo/client';
import { Spinner } from 'react-bootstrap';
import { AuthContext } from '../context/auth-context';
import LocationPoint from '../components/LocationAPI/locationPoint';

function SingleFlatmate(props) {
    const { user } = useContext(AuthContext);
    const flatmateID = props.match.params.ID;
    const [isEdit, setisEdit] = useState(false);
    const onEdit = () => {
        setisEdit(!isEdit)
    }

    const { loading, error, data } = useQuery(FM_USERINFOR, {
        variables: { id: flatmateID }
    })
    if (error) return <h2>Error!!!</h2>
    return (
        <>
            {loading ? (<Spinner animation='border' />) : (
                <div className="container-row-unwrap mh-105vh mb-2rem">
                    <div className="container-column mr-1rem">
                        {isEdit ?
                            (<>
                                <div className="container-column mr-1rem">
                                    <FlatmateDetailForm
                                        onEdit={onEdit}
                                        flatmateData={data}
                                        flatmateID={flatmateID}
                                    />

                                </div>

                            </>
                            ) : (
                                <>
                                    {(user.userId === flatmateID) ? (<Button className="btn-general" secondary
                                        onClick={onEdit}> Edit</Button>) :
                                        ('')
                                    }
                                    <FlatmateDetailInfor
                                        flatmateData={data}
                                    />
                                </>
                            )
                        }
                    </div>
                    <div className="container-column">
                        <FlatmateDetailCard flatmateID={flatmateID} />
                        <h3>Location </h3>
                        <LocationPoint flatmateData={data} isEdit={isEdit} />
                    </div>
                </div>
            )}

        </>
    )
}

export default SingleFlatmate;