/**** INPUT CONTROLS COMPONENT ****/
import React from 'react';
import classes from './Input.scss';

const input = props => {
    let inputElement = null;
    let inputClasses = [classes.form_control,'form-control'];
    let validationError = null;

    // ADD `invalid` class TO INPUT CONTROLS WITJ INVALID VALUE
    if(!props.valid && props.touched) {
        inputClasses.push(classes.invalid);
        validationError = <p className={classes.validation_error}>{props.errorMessage}</p>;
    }

    // SELECTRING THE INPUT CONTROL ELEMNET BASED ON RECIVED TYPE IN `props`
    switch(props.elementtype) {
        case ('input') :
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementconfig} 
                value={props.value} 
                onChange={props.change}/>;
            break;
        default :
            inputElement = <input 
                className={inputClasses.join(' ')}
                {...props.elementconfig}
                value={props.value}
                onChange={props.change}/>
    }
    return (
        <div className="form-group position-relative">
            <label>{props.title}</label>
            {inputElement}
            {validationError}
        </div>
    );
} 

export default input;