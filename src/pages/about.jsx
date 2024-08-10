import CreatorImage from "../components/about/CreatorImage.jsx";
import CreatorDescription from "../components/about/CreatorDescription.jsx";

export default function About() {
    return (
        <main className="about-main grid-spacing">
            <CreatorDescription/>
            <CreatorImage/>
        </main>
    )
}