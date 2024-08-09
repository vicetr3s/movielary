import {useEffect, useState} from "react";
import {getSimilarMovies} from "../../lib/movies-api.js";
import MoviesCarousel from "./MoviesCarousel.jsx";

export default function MovieSuggestions({movieId, genreId}) {
    const [movieSuggestions, setMovieSuggestions] = useState([]);
    const suggestionsAmount = 6;

    useEffect(() => {
        getSimilarMovies(genreId, movieId, suggestionsAmount).then((movies) => {
            setMovieSuggestions(movies);
        });
    }, []);

    return (
        <section className={"movie-suggestions-section"}>
            <h3 className={"container-label-h3"}>Learn from similar movies</h3>
            <MoviesCarousel movies={movieSuggestions}/>
        </section>
    )
}