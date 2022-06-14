import React from 'react';
import SimpleInput from 'react-simple-input';
import "../../assets/css/TextInput.css"


const TEXTCOLOR = [
    "txt-fontDark",
    "txt-fontPrimary",
    "txt-fontDanger",
]

const SIZE = [
    "txt-small",
    "txt-medium",
    "txt-large",
]

const RADIUS = [
    "txt-box",
    "txt-semiCircle",
]

const PADDING = [
    "txt-pad0",
    "txt-pad10",
    "txt-pad15",
    "txt-pad20",
]

const TextInput = ({textcolor, textsize, textborder, textpadding}) => {

    const checkcolor = TEXTCOLOR.includes(textcolor) ? textcolor : TEXTCOLOR[0];
    const checksize = SIZE.includes(textsize) ? textsize : SIZE[0];
    const checkborder = RADIUS.includes(textborder) ? textborder : RADIUS[0];
    const checkpadding = PADDING.includes(textpadding) ? textpadding : PADDING[0];

    return (
       <SimpleInput className={`textinput ${checkcolor} ${checksize} ${checkborder} ${checkpadding}`} placeholder='ここにメール'/>
    )
}

export default TextInput;