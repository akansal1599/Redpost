import React from 'react';

import classes from './UserInput.module.css';

const UserInput = (props) => {
    return <input
        className={classes.Input}
        type="text"
        onChange={props.changed}
        value = {props.currentName}
    />;
};

export default UserInput;
