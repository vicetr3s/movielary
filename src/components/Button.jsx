import React from "react";

export default function Button({text, icon, handleClick, styleClass}) {
    const buttonStyleClasses = styleClass + " btn";

    return (
        <button className={buttonStyleClasses} onClick={handleClick}>
            {icon && <span>{icon}</span>}
            {text}
        </button>
    )
}