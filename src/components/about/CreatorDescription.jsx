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
                    Created by <a href={"https://github.com/vicetr3s"}
                                  className={"accent-text github-name"}>@vicetr3s</a>
                    <a href={"https://github.com/"} target={"_blank"} rel="noopener noreferrer">
                        <GithubIcon className={"about-icon"}/>
                    </a>
                </li>
                <li>
                    This product uses the TMDB API but is not endorsed or certified by TMDB
                    <a href={"https://www.themoviedb.org/"} target={"_blank"} rel="noopener noreferrer">
                        <TMDBIcon className={"about-icon"}/>
                    </a>
                </li>
            </ul>
        </section>
    )
}