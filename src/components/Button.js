
import React from 'react';
import "../assets/css/Button.css"

const STYLES = [
    "btn--primary--solid",
    "btn--warning--solid",
    "btn--danger--solid",
    "btn--success--solid",
    "btn--primary--outline",
    "btn--warning--outline",
    "btn--danger--outline",
    "btn--success--outline",
]

const SIZES = [
    "btn--medium",
    "btn--large",
    "btn--small",
]

const RADIUS = [
    "btn-semiCircle",
    "btn-circle",
    "btn-styled1",
    "btn-styled2"
]

const ICON = [
    "btn-iconLeft",
    "btn-iconRight"
]



const Button = ({children, type, onClick, buttonStyle, buttonSize, buttonBorder, iconPlace}) => {


    const checkButtonSyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    
    const checkButtonBorder = RADIUS.includes(buttonBorder) ? buttonBorder : RADIUS[0];

    const checkIconPlace = ICON.includes(iconPlace) ? iconPlace : ICON[0];

  
    



    return (
        <button className={`btn ${checkButtonSyle} ${checkButtonSize} ${checkButtonBorder} ${checkIconPlace}`} type={type}>
        {children}
        </button>
    );
}

export default Button;