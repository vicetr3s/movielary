import "./App.css"
import {HashRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from "./components/ui/NavBar.jsx"
import Home from "./pages/home.jsx"
import About from "./pages/about.jsx";

export default function App() {
    return (
        <>
            <Router>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                </Routes>
            </Router>
        </>
    )
}