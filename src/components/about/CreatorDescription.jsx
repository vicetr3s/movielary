import GithubIcon from "../../../public/assets/svg/github.svg?react";
import TMDBIcon from "../../../public/assets/svg/tmdb.svg?react"

export default function CreatorDescription() {
    return (
        <section className="creator-description-section">
            <div className="about-box container">
                <h2>About</h2>
            </div>
            <ul className="description-list">
                <li>
                    Created by <a href={"https://github.com/vicetr3s"} className={"accent-text github-name"}>@vicetr3s</a> <GithubIcon
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