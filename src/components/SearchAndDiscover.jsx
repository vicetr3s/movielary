import React from "react";
import Button from "./Button.jsx";
import SearchIcon from "../assets/search.svg?react";
import DiscoverIcon from "../assets/discover.svg?react";
import "../App.css"
import SearchBar from "./SearchBar.jsx";

export default function SearchAndDiscover() {
    const iconStyle = {
        fill: "white",
        width: "25px",
        height: "25px",
    }

    return (
        <section className={"search-and-discover"}>
            <div>
                <Button text={""} styleClass={"round-btn primary-btn"}
                        icon={<SearchIcon style={iconStyle} className={"svg-icon"}/>}/>
                <SearchBar/>
            </div>
            <Button text={"Discover"} styleClass={"accent-btn"}
                    icon={<DiscoverIcon style={iconStyle} className={"svg-icon"}/>}/>
        </section>
    )
}