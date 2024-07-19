import React from "react";
import Button from "./Button.jsx";

export default function MovieCard({imgURL, title, description, imdbStars, year, genre}) {

    return (
        <>
            <div className="movie-card">
                <img className={"movie-card-img"} src={imgURL} alt={title}/>
                <span className={"movie-card-title"}>{title}</span>
                <p className={"movie-card-description"}>{description}</p>
                <div className={"movie-card-tags"}>
                    <span>IMDB: {imdbStars}</span>
                    <span>Year: {year}</span>
                    <strong>{genre}</strong>
                </div>
                <Button text={"See cards"} styleClass={"primary-btn"}/>
            </div>
        </>
    )
}