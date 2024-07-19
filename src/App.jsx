import "./App.css"
import Header from "./components/Header"
import PageTitle from "./components/PageTitle.jsx";
import SearchedMovies from "./components/SearchedMovies.jsx";

export default function App() {
    return (
        <main>
            <Header/>
            <PageTitle/>
            <SearchedMovies/>
        </main>
    )
}