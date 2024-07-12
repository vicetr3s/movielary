import React from "react";

// eslint-disable-next-line react/prop-types
export default function Button({text, icon, handleClick}) {
    return (
        <button onClick={handleClick}>
            {icon && <span>{icon}</span>}
            {text}
        </button>
    )
}