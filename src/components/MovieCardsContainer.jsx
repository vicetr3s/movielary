import React from "react";
import MovieCard from "./MovieCard.jsx";

export default function MovieCardsContainer({movies}) {
    return (<div className={"movie-clapper"}>
        <div className={"clapper"}>
            <div className={"clapper-upper"}></div>
            <div className={"clapper-lower"}></div>
        </div>

        <section id={"movie-cards-container"}>
            {movies && movies?.map(movie => <MovieCard key={movie.id} title={movie.title} imgURL={movie.imgUrl}
                                                       description={movie.description} year={movie.year}
                                                       genre={movie.genre}/>)}
        </section>
    </div>)
}