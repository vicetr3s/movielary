import MovieCard from "./MovieCard.jsx";
import Loading from "../ui/Loading.jsx";

export default function MovieCardsContainer({movies, isLoading}) {
    return (<div className={"movie-clapper"}>
        <div className={"clapper"}>
            <div className={"clapper-upper"}></div>
            <div className={"clapper-lower"}></div>
        </div>

        <section className={"movie-cards-container container"}>
            {
                isLoading ? (
                    <Loading message={"Loading"}/>
                ) : (
                    movies && movies?.map(movie => <MovieCard key={movie.id} movieID={movie.id} title={movie.title}
                                                              imgURL={movie.imgUrl}
                                                              description={movie.description} year={movie.year}
                                                              genre={movie.genre}/>)
                )
            }
        </section>
    </div>)
}