import React from "react";
import Button from "./Button.jsx";
import SearchIcon from "../assets/search.svg?react";
import DiscoverIcon from "../assets/discover.svg?react";

export default function SearchBar() {
    const iconStyle = {
        fill: "white",
        width: "25px",
        height: "25px",
    }

    return (
        <>
            <Button text={""} icon={<SearchIcon style={iconStyle}/>}/>
            <input type="text" placeholder="Search a movie title..."/>
            <Button text={"Discover"} icon={<DiscoverIcon style={iconStyle}/>}/>
        </>
    )
}