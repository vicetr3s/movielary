import CreatorImage from "../components/about/CreatorImage.jsx";
import CreatorDescription from "../components/about/CreatorDescription.jsx";
import {getMovieSubtitle} from "../lib/SubtitlesAPI.js";

export default function About() {
    getMovieSubtitle("tt0137523").then(str => console.log(str));

    return (
        <main className="about-main grid-spacing">
            <CreatorDescription/>
            <CreatorImage/>
        </main>
    )
}