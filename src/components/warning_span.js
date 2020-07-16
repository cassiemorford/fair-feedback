import React from "react"

const warningStyle= {
    'background': '#ad4d2d',
};

const WarningSpan = props => {
    return (
        <span {...props} style={warningStyle}>
            {props.children}
        </span>
    );
};

export default WarningSpan;