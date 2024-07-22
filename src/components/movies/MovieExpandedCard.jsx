export default function MovieExpandedCard({imgURL, title, description, imdb, year, duration, adult, genre}) {
    const adultTag = adult ? "Adult" : "Family";

    return (
        <div className="movie-expanded-card container">
            <img className={"movie-expanded-card-img"} src={imgURL} alt={title}/>
            <div className="movie-expanded-card-body-text">
                <span className={"movie-expanded-card-title cut-long-text"} title={title}>{title}</span>
                <p className={"movie-expanded-card-description cut-long-text"}>{description}</p>
            </div>
            <div className={"movie-expanded-card-tags"}>
                <span>IMDB: {imdb}</span>
                <span>Year: {year}</span>
                <span>Duration: {duration} min</span>
                <strong>{adultTag}</strong>
                <strong>{genre}</strong>
            </div>
        </div>
    )
}