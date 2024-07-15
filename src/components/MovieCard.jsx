import React from "react";
import Button from "./Button.jsx";

export default function MovieCard({imgUrl, title, description, tags}) {
    return (
        <>
            <div className="movie-card">
                <img className={"movie-card-img"} src={imgUrl} alt={title}/>
                <span className={"movie-card-title"}>{title}</span>
                <p className={"movie-card-description"}>{description}</p>
                <div className={"movie-card-tags"}>
                    <span>IMDB: {tags.imdb}</span>
                    <span>Year: {tags.year}</span>
                    <strong>{tags.genre}</strong>
                </div>
                <Button text={"See cards"} styleClass={"primary-btn"}/>
            </div>
        </>
    )
}