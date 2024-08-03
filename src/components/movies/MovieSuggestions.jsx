import {useEffect, useState} from "react";
import {getPopularMovies} from "../../lib/movies-api.js";
import {NavLink} from "react-router-dom";

export default function MovieSuggestions({genreId}) {
    const [movieSuggestions, setMovieSuggestions] = useState([]);

    useEffect(() => {
        getPopularMovies(1, true, true, genreId).then((movies) => {
            const slicedMovies = movies.slice(0,6);
            setMovieSuggestions(slicedMovies);
        });
    }, []);

    return (
        <section className={"movie-suggestions-section"}>
            <h3 className={"container-label-h3"}>Learn from similar movies</h3>
            <div className={"movie-suggestions-container"}>
                {movieSuggestions && movieSuggestions?.map(movie => (
                    <NavLink to="/movie" state={{id: movie.id}}>
                    <img src={movie.imgUrl} alt={movie.title}/>
                    </NavLink>
                ))}
            </div>
        </section>
    )
}