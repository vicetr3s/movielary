import MovieExpandedCard from "../components/movies/MovieExpandedCard.jsx";
import ExplanationCard from "../components/movies/ExplanationCard.jsx";
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {getMovieDetailsFromID} from "../lib/movies-api.js";
import ConceptCardsContainer from "../components/movies/ConceptCardsContainer.jsx";
import {getWordCards} from "../lib/create-concept-cards.js";

export default function Movie() {
    const location = useLocation();
    const {id} = location.state;
    const conceptCardsAmount = 12;

    const [movie, setMovie] = useState(null);
    const [conceptCards, setConceptCards] = useState(null);

    useEffect(() => {
        getMovieDetailsFromID(id).then(movie => setMovie(movie));

    }, [])

    useEffect(() => {
        if (!movie) return;

        getWordCards(movie.imdbId, conceptCardsAmount).then(conceptCards => setConceptCards(conceptCards));

    }, [movie]);

    return (
        <>
            <main className={"movie-main grid-spacing"}>
                {movie && <MovieExpandedCard title={movie.title}
                                             imgURL={movie.imgUrl}
                                             description={movie.description} year={movie.year}
                                             genre={movie.genre} duration={movie.min}/>}
                <ExplanationCard cardsAmount={conceptCards ? conceptCards.length : 0}/>
                {conceptCards && <ConceptCardsContainer cards={conceptCards}/>}
            </main>
        </>
    )
}