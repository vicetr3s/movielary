import React from "react";

export default function EmojiIcon({emoji, size}) {
    return (
        <>
            <span style={{fontSize: size}}>{emoji}</span>
        </>
    )
}