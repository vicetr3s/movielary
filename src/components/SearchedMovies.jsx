import React, {useState} from "react";
import SearchAndDiscover from "./SearchAndDiscover.jsx";
import MovieCardsContainer from "./MovieCardsContainer.jsx";

export default function SearchedMovies() {
    const [searchText, setSearchText] = useState("");
    const [movies, setMovies] = useState(null);

    return (<>
        <SearchAndDiscover searchText={searchText} setSearchText={setSearchText}
                           setMovies={setMovies}/>
        {<MovieCardsContainer movies={movies}/>}
    </>)
}