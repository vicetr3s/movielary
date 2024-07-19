import React, {useState} from "react";
import SearchAndDiscover from "./SearchAndDiscover.jsx";
import MovieCardsContainer from "./MovieCardsContainer.jsx";

export default function SearchedMovies() {
    const [movies, setMovies] = useState(null);

    return (<>
        <SearchAndDiscover setMovies={setMovies}/>
        {<MovieCardsContainer movies={movies}/>}
    </>)
}