import fetchUrl from "./fetch-url.js";

const apiKey = import.meta.env.VITE_TMDB_API_KEY; // Type your themoviedb free api key

function setGetHeaders() {
    return {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${apiKey}`
        }
    };
}

export async function getPopularMovies(page, descSort, withGenre = false, genreId = "") {
    const parameters = !withGenre ? addUrlParameters(page, false, true, descSort) : addUrlParameters(page, false, true, descSort, genreId);
    const url = `https://api.themoviedb.org/3/discover/movie?${parameters}`;

    const dataJson = await fetchUrl(url, setGetHeaders());

    return getMovies(dataJson);
}

async function getGenres() {
    const url = "https://api.themoviedb.org/3/genre/movie/list";

    return fetchUrl(url, setGetHeaders());
}

export async function getConfiguration() {
    const url = "https://api.themoviedb.org/3/configuration";

    return fetchUrl(url, setGetHeaders());
}

export async function getMoviesFromTitle(title, page) {
    const titleName = title.split(" ").join("%20");

    const url = `https://api.themoviedb.org/3/search/movie?query=${titleName}${addUrlParameters(page)}`;

    const dataJson = await fetchUrl(url, setGetHeaders());

    return getMovies(dataJson);
}

export async function getMovieDetailsFromID(movieID) {
    const url = `https://api.themoviedb.org/3/movie/${movieID}`;

    const dataJson = await fetchUrl(url, setGetHeaders());

    const arrayMovie = await getMovies(dataJson, true);

    return {...arrayMovie[0]};
}

async function getMovies(dataJson, details = false) {
    const configJSON = await getConfiguration();
    const genresJSON = await getGenres();

    if (!dataJson || !configJSON || !genresJSON) return;

    const genresList = genresJSON.genres;
    const movies = details ? [dataJson] : Array.from(dataJson.results);

    return movies.map(item => {
        const {id, title, backdrop_path, overview, release_date} = item;
        const imgUrl = backdrop_path ? `${configJSON.images.base_url}${configJSON.images.backdrop_sizes[0]}${backdrop_path}` : "";
        const yearRegex = /^.*?-/;
        const year = release_date ? release_date.match(yearRegex)[0].slice(0, -1) : "";
        const imdbId = item.imdb_id ?? "";
        const min = item.runtime ?? "";

        let genre;
        let genreId;

        if (details) {
            genre = item.genres[0] ? item.genres[0].name : "";
            genreId = item.genres[0] ? item.genres[0].id : "";
        } else {
            const genreFound = genresList.find(genre => genre.id === item.genre_ids[0]);
            genre = genreFound ? genreFound.name : "";
            genreId = item.genre_ids[0];
        }

        return {
            id: id,
            title: title,
            imgUrl: imgUrl,
            description: overview,
            year: year,
            genre: genre,
            genreId: genreId,
            imdbId: imdbId,
            min: min,
        }
    })
}

export async function getSimilarMovies(genreId, movieId, amount) {
    const movies = await getPopularMovies(1, true, true, genreId);

    const filteredMovies = movies.filter(movie => movie.id !== movieId);

    return filteredMovies.slice(0, amount);

}

const addUrlParameters = (page = 1, video = false, popularitySort = false, descSort = true, genreId = "") => {
    const includeAdult = `&include_adult=false`;
    const includeVideo = `&include_video=${video}`
    const language = "&language=en-US";
    const pageNumber = `&page=${page}`
    const sort = descSort ? "&sort_by=popularity.desc" : "&sort_by=popularity.asc";
    const genre = genreId ? `&with_genres=${genreId}` : "";

    if (!popularitySort) return includeAdult + includeVideo + language + pageNumber + genre;

    return includeAdult + includeVideo + language + pageNumber + sort + genre;
}