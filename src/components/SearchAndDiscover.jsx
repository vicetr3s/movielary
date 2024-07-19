import React from "react";
import Button from "./Button.jsx";
import SearchIcon from "../assets/search.svg?react";
import DiscoverIcon from "../assets/discover.svg?react";
import "../App.css"
import {getPopularMovies} from "../lib/MoviesAPI.js";

export default function SearchAndDiscover({searchText, setSearchText, setMovies}) {

    const handleDiscoverButtonClick = () => {
        getPopularMovies().then((movies) => {
            setMovies(movies);
        });
    }

    return (
        <section className={"search-and-discover"}>
            <div>
                <Button text={""} styleClass={"round-btn primary-btn"}
                        icon={<SearchIcon className={"svg-icon"}/>}/>
                <input className={"search-bar"} type="text" placeholder="Search a movie title..." value={searchText}
                       onChange={event => setSearchText(event.target.value)}/>
            </div>
            <Button text={"Discover"} styleClass={"accent-btn"}
                    icon={<DiscoverIcon className={"svg-icon"}/>} handleClick={handleDiscoverButtonClick}/>
        </section>
    )
}