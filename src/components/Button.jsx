import React from "react";

export default function Button({text, icon, handleClick}) {
    return (
        <button onClick={handleClick}>
            {icon && <span>{icon}</span>}
            {text}
        </button>
    )
}