import React from 'react';

import './UserOutput.css';

const userOutput = (props) => {

    return (
        <div className="UserOutput">
            <p> <strong>Username:</strong> {props.username} </p>
            <p className="greeting"> You are awesome! </p>
        </div>
    )
}


export default userOutput;