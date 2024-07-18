import React from "react";
import Button from "./Button.jsx";
import SearchIcon from "../assets/search.svg?react";
import DiscoverIcon from "../assets/discover.svg?react";
import "../App.css"
import SearchBar from "./SearchBar.jsx";

export default function SearchAndDiscover() {
    return (
        <section className={"search-and-discover"}>
            <div>
                <Button text={""} styleClass={"round-btn primary-btn"}
                        icon={<SearchIcon className={"svg-icon"}/>}/>
                <SearchBar/>
            </div>
            <Button text={"Discover"} styleClass={"accent-btn"}
                    icon={<DiscoverIcon className={"svg-icon"}/>}/>
        </section>
    )
}