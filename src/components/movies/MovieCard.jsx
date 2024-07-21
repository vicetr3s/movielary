import Button from "../ui/Button.jsx";

export default function MovieCard({imgURL, title, description, year, genre}) {

    return (
        <>
            <div className="movie-card">
                <img className={"movie-card-img"} src={imgURL} alt={title}/>
                <span className={"movie-card-title cut-long-text"} title={title}>{title}</span>
                <p className={"movie-card-description cut-long-text"}>{description}</p>
                <div className={"movie-card-tags"}>
                    <span>Year: {year}</span>
                    <strong>{genre}</strong>
                </div>
                <Button text={"See cards"} styleClass={"primary-btn"}/>
            </div>
        </>
    )
}