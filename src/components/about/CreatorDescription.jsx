import GithubIcon from "../../assets/svg/github.svg?react";
import TMDBIcon from "../../assets/svg/tmdb.svg?react"

export default function CreatorDescription() {
    return (
        <section className="creator-description-section">
            <div className="about-box container">
                <h2>About</h2>
            </div>
            <ul className="description-list">
                <li>
                    Created by <strong className={"accent-text"}>@vicetr3s</strong> <GithubIcon
                        className={"about-icon"}/>
                </li>
                <li>
                    This product uses the TMDB API but is not endorsed or certified by TMDB <TMDBIcon
                        className={"about-icon"}/>
                </li>
            </ul>
        </section>
    )
}