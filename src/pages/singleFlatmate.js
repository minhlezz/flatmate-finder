import React, { useState } from 'react';
import FlatmateDetailForm from '../components/FlatmateComponent/FlatmateDetails/flatmateDetailForm';
import FlatmateDetailCard from '../components/FlatmateComponent/FlatmateDetails/flatmateDetailCard';
import { Button } from 'semantic-ui-react';
import FlatmateDetailInfor from '../components/FlatmateComponent/FlatmateDetails/flatmateDetailInfor';

function SingleFlatmate(props) {
    const [isEdit, setisEdit] = useState(false);

    const onEdit = () => {
        setisEdit(!isEdit)
    }
    const flatmateID = props.match.params.ID;
    return (
        <>
            <div className="container-row-unwrap mh-105vh mb-2rem">
                <div className="container-column mr-1rem">
                    {isEdit ?
                        (


                            <FlatmateDetailForm onEdit={onEdit} />

                        ) :(
                            <>
                            <Button className="btn-general" secondary
                            onClick={onEdit}> Edit</Button>
                            <FlatmateDetailInfor/>
                            </>
                        )
                    }
                </div>
                <div className="container-column">
                    <FlatmateDetailCard flatmateID={flatmateID} />
                </div>
            </div>
        </>
    )
}

export default SingleFlatmate;