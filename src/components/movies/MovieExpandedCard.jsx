export default function MovieExpandedCard({movieURL, imgURL, title, description, imdb, year, min, adult, genre}) {
    const adultTag = adult ? "Adult" : "Not adult";

    return (
        <>
            <div className="movie-expanded-card">
                <a href={movieURL} target="_blank" rel="noopener noreferrer">
                    <img className={"movie-expanded-card-img"} src={imgURL} alt={title}/>

                </a>
                <span className={"movie-expanded-card-title cut-long-text"} title={title}>{title}</span>
                <p className={"movie-expanded-card-description cut-long-text"}>{description}</p>
                <div className={"movie-card-tags"}>
                    <span>IMDB: {imdb}</span>
                    <span>Year: {year}</span>
                    <span>Duration: {min}</span>
                    <strong>{adultTag}</strong>
                    <strong>{genre}</strong>
                </div>
            </div>
        </>
    )
}