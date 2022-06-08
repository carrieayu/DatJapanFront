import React from 'react';
import "../assets/css/Label.css";

const FONTSIZE = [
    "lbl-fontExSmall",
    "lbl-fontSmall",
    "lbl-fontMedium",
    "lbl-fontLarge",
    "lbl-fontExLarge"
]

const SIZE = [
    "lbl-small",
    "lbl-medium",
    "lbl-large",
    "lbl-exlarge"
]

const ICON = [
    "lbl-iconLeft",
    "lbl-iconRight",
]

const FONTWEIGHT = [
    "lbl-italic",
    "lbl-bold",
    "lbl-regular",
]

const FONTSTYLE = [
    "lbl-serif",
    "lbl-sans-serif",
    "lbl-monospace",
    "lbl-cursive",
    "lbl-fantasy",
]

const TEXTALIGNMENT = [
    "lbl-center",
    "lbl-left",
    "lbl-right",
]


const Label = ({children, type, sizeFont, labelSize, iconPlace, fontWeight, fontStyle, textAlign}) => {

    const checkFontSize = FONTSIZE.includes(sizeFont) ? sizeFont : FONTSIZE[0];

    const checkLabelSize = SIZE.includes(labelSize) ? labelSize : SIZE[0];

    const checkIconPlace = ICON.includes(iconPlace) ? iconPlace : ICON[0];

    const checkFontWeight = FONTWEIGHT.includes(fontWeight) ? fontWeight : FONTWEIGHT[0];

    const checkFontStyle = FONTSTYLE.includes(fontStyle) ? fontStyle : FONTSTYLE[0];

    const checkTextAlign = TEXTALIGNMENT.includes(textAlign) ? textAlign : TEXTALIGNMENT[0];

    return (
      
        <label className={`label ${checkFontSize} ${checkLabelSize} ${checkIconPlace} ${checkFontWeight} ${checkFontStyle} ${checkTextAlign}`} type={type}>{children}</label>
    );

}

export default Label;