import MovieExpandedCard from "../components/movies/MovieExpandedCard.jsx";
import ExplanationCard from "../components/movies/ExplanationCard.jsx";
import {useLocation} from "react-router-dom";

export default function Movie() {
    const location = useLocation();
    const {id} = location.state;

    return (
        <>
            <MovieExpandedCard />
            <ExplanationCard/>
        </>
    )
}