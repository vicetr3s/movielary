import MovieExpandedCard from "../components/movies/MovieExpandedCard.jsx";
import ExplanationCard from "../components/movies/ExplanationCard.jsx";
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {getMovieDetailsFromID} from "../lib/movies-api.js";
import ConceptCardsContainer from "../components/movies/ConceptCardsContainer.jsx";
import {getWordCards} from "../lib/create-concept-cards.js";
import MovieSuggestions from "../components/movies/MovieSuggestions.jsx";

export default function Movie() {
    const location = useLocation();
    const [movie, setMovie] = useState(null);
    const [conceptCards, setConceptCards] = useState(null);
    const [isLoadingCards, setIsLoadingCards] = useState(true);
    const [isErrorCards, setIsErrorCards] = useState(false);
    const {id} = location.state;
    const conceptCardsAmount = 12;

    useEffect(() => {
        if (!id) return;

        getMovieDetailsFromID(id).then(movie => setMovie(movie));

    }, [id])

    useEffect(() => {
        if (!movie) return;

        setIsLoadingCards(true);
        setIsErrorCards(false);

        getWordCards(movie.imdbId, conceptCardsAmount)
            .then(conceptCards => setConceptCards(conceptCards))
            .catch(() => setIsErrorCards(true))
            .finally(() => setIsLoadingCards(false));

    }, [movie]);

    return (
        <>
            <main className={"movie-main grid-spacing"}>
                {movie && <MovieExpandedCard title={movie.title}
                                             imgURL={movie.imgUrl}
                                             description={movie.description} year={movie.year}
                                             genre={movie.genre} duration={movie.min}/>}
                <ExplanationCard cardsAmount={conceptCards ? conceptCards.length : 0}/>
                <ConceptCardsContainer cards={conceptCards} isLoading={isLoadingCards} isError={isErrorCards}/>
                {movie && <MovieSuggestions genreId={movie.genreId} movieId={movie.id}/>}
            </main>
        </>
    )
}