import CreatorImage from "../components/about/CreatorImage.jsx";
import CreatorDescription from "../components/about/CreatorDescription.jsx";
import {useEffect} from "react";
import {getWordDefinition} from "../lib/dictionary-api.js";

export default function About() {

    useEffect(() => {
        getWordDefinition("ace").then(wordDefinition => {console.log(wordDefinition);});
    }, []);
    return (
        <main className="about-main grid-spacing">
            <CreatorDescription/>
            <CreatorImage/>
        </main>
    )
}