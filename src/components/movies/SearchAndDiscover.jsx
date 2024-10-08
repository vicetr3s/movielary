import {useState} from "react";
import Button from "../ui/Button.jsx";
import SearchIcon from "../../assets/svg/search.svg?react";
import DiscoverIcon from "../../assets/svg/discover.svg?react";
import "../../App.css"
import {getMoviesFromTitle, getPopularMovies} from "../../lib/movies-api.js";

export default function SearchAndDiscover({setMovies, setIsLoadingMovies}) {
    const [searchText, setSearchText] = useState("");
    const lengthNeededToSearchMovie = 4;

    const handleDiscoverButtonClick = () => {
        setIsLoadingMovies(true);

        getPopularMovies(1, true)
            .then((movies) => {
                setMovies(movies);
            })
            .finally(() => setIsLoadingMovies(false));
    }

    const handleSearchButtonClick = () => {
        setIsLoadingMovies(true);

        getMoviesFromTitle(searchText, 1)
            .then((movies) => {
                setMovies(movies);
            })
            .finally(() => setIsLoadingMovies(false));
    }

    const handleSearchText = (searchText) => {
        setSearchText(searchText);

        if (searchText.length >= lengthNeededToSearchMovie) {
            setIsLoadingMovies(true);

            getMoviesFromTitle(searchText, 1)
                .then((movies) => {
                    setMovies(movies);
                })
                .finally(() => setIsLoadingMovies(false));
        }

        if (searchText.length === 0) {
            setMovies(null);
        }
    }

    return (
        <section className={"search-and-discover"}>
            <div>
                <Button text={""} styleClass={"round-btn primary-btn"}
                        icon={<SearchIcon className={"svg-icon"}/>} handleClick={handleSearchButtonClick}/>
                <input className={"search-bar"} type="text" placeholder="Search a movie title..." value={searchText}
                       onChange={event => handleSearchText(event.target.value)}/>
            </div>
            <Button text={"Discover"} styleClass={"accent-btn"}
                    icon={<DiscoverIcon className={"svg-icon"}/>} handleClick={handleDiscoverButtonClick}/>
        </section>
    )
}