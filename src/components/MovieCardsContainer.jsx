import React from "react";
import MovieCard from "./MovieCard.jsx";

export default function MovieCardsContainer() {
    return (
        <div className={"movie-clapper"}>
            <div className={"clapper"}>
                <div className={"clapper-upper"}></div>
                <div className={"clapper-lower"}></div>
            </div>
            <section id={"movie-cards-container"}>
                {/*Testing purposes only*/}
                <MovieCard
                    imgUrl={"https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg"}
                    description={"An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more."}
                    title={"Fight Club"}
                    tags={{imdb: "10 / 10", year: "1999", genre: "Drama"}}
                />
                <MovieCard
                    imgUrl={"https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg"}
                    description={"Un texto mas largo eooooo eoooo eoooo eoooooooo eoooo eoooooooooooooooo  eeeeeeeeeeeeeeeeeeAn insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more."}
                    title={"Fight Club"}
                    tags={{imdb: "10 / 10", year: "1999", genre: "Drama"}}
                />
                <MovieCard
                    imgUrl={"https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg"}
                    description={"An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more."}
                    title={"Fight Club"}
                    tags={{imdb: "10 / 10", year: "1999", genre: "Drama"}}
                />
                <MovieCard
                    imgUrl={"https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg"}
                    description={"An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more."}
                    title={"Fight Club"}
                    tags={{imdb: "10 / 10", year: "1999", genre: "Drama"}}
                />
            </section>
        </div>
    )
}