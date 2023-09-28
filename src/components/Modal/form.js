import React from "react";

const Form = (props) => {
    return ( 
        <form action='#' onSubmit={props.onSubmit}>{props.children}</form>
    );
}

const ChildrenInput = ({label, typeI, inputHandler, value}) => {
    return (
        <div className="inputName" style={{width: '100%',display: 'flex',gap:'20px',alignItems: 'center'}}>
            <label htmlFor={label} style={{width:"160px", fontSize:"30px"}}>{`${label[0].toUpperCase()}${label.slice(1)}: `}</label>
            <input 
            type={`${typeI?typeI:"text"}`} 
            name={label} 
            id={label} 
            placeholder={`Enter ${label[0].toUpperCase()}${label.slice(1)}`} 
            onChange={inputHandler}
            value={value}
            />
        </div>
    );
}

Form.ChildrenInput = ChildrenInput

export default Form