import PageTitle from "../components/PageTitle.jsx";
import SearchedMovies from "../components/SearchedMovies.jsx";

export default function Home() {
    return (
        <main className="home-main">
            <PageTitle/>
            <SearchedMovies/>
        </main>
    )
}