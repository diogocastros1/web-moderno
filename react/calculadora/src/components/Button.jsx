import React from "react";
import './Button.css'

//Componentes sem estados são mais faceis de trabalhar

export default props => {
    let classes = 'button '
    classes += props.operation ? "operation" : ""
    classes += props.double ? "double" : ""
    classes += props.triple ? "triple" : ""
    
    return (
        <button 
        onClick={() => props.click && props.click(props.label)}
        className={classes}>
            {props.label}
        </button>
    )
}