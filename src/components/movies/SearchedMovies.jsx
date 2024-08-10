import {useState} from "react";
import SearchAndDiscover from "./SearchAndDiscover.jsx";
import MovieCardsContainer from "./MovieCardsContainer.jsx";

export default function SearchedMovies() {
    const [movies, setMovies] = useState(null);
    const [isLoadingMovies, setIsLoadingMovies] = useState(false);

    return (
        <>
            <SearchAndDiscover setMovies={setMovies} setIsLoadingMovies={setIsLoadingMovies}/>
            <MovieCardsContainer movies={movies} isLoading={isLoadingMovies}/>
        </>
    )
}