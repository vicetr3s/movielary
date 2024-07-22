import {NavLink} from "react-router-dom";

export default function MovieCard({movieID, imgURL, title, description, year, genre}) {
    return (
        <div className="movie-card">
            <img className={"movie-card-img"} src={imgURL} alt={title} loading="lazy"/>
            <span className={"movie-card-title cut-long-text"} title={title}>{title}</span>
            <p className={"movie-card-description cut-long-text"}>{description}</p>
            <div className={"movie-card-tags"}>
                <span>Year: {year}</span>
                <strong>{genre}</strong>
            </div>
            <NavLink to="/movie" state={{id: movieID}} className={"movie-card-btn primary-btn btn"}>
                See cards
            </NavLink>
        </div>
    )
}