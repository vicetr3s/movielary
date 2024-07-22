import MovieExpandedCard from "../components/movies/MovieExpandedCard.jsx";
import ExplanationCard from "../components/movies/ExplanationCard.jsx";
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {getMovieDetailsFromID} from "../lib/MoviesAPI.js";

export default function Movie() {
    const location = useLocation();
    const {id} = location.state;
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        getMovieDetailsFromID(id).then((movie) => {
            setMovie(movie);
        });
    })

    return (
        <>
            <main className={"movie-main grid-spacing"}>
                {movie && <MovieExpandedCard title={movie.title}
                                             imgURL={movie.imgUrl}
                                             description={movie.description} year={movie.year}
                                             genre={movie.genre} duration={movie.min}/>}
                <ExplanationCard/>
            </main>
        </>
    )
}