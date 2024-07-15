import React from "react";

export default function SearchBar({text}) {
    return (
        <input className={"search-bar"} type="text" placeholder="Search a movie title..." value={text} />
    )
}