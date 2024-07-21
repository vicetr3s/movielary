import PageTitle from "../components/ui/PageTitle.jsx";
import SearchedMovies from "../components/movies/SearchedMovies.jsx";

export default function Home() {
    return (
        <main className="home-main grid-spacing">
            <PageTitle/>
            <SearchedMovies/>
        </main>
    )
}