import React from 'react';

const validationComponent = (props) => {

    let inputLength = props.inputLength;
    let validationResult = null;

    if(inputLength <=5) {
        validationResult = "Text too short";
    } else {
        validationResult = "Text Long Enough";
    }

    return (
        <p>{validationResult}</p>
    )

}

export default validationComponent;