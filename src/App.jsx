import "./App.css"
import Header from "./components/Header"
import PageTitle from "./components/PageTitle.jsx";
import SearchAndDiscover from "./components/SearchAndDiscover.jsx";
import MovieCardsContainer from "./components/MovieCardsContainer.jsx";

export default function App() {
    return (
        <main>
            <Header/>
            <PageTitle/>
            <SearchAndDiscover/>
            <MovieCardsContainer/>
        </main>
    )
}