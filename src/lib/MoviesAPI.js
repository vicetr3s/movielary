const apiKey = import.meta.env.VITE_TMDB_API_KEY; // Type your themoviedb free api key

function setGETOptions() {
    return {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${apiKey}`
        }
    };
}

export async function getPopularMovies(page, descSort) {
    const url = `https://api.themoviedb.org/3/discover/movie?${addUrlParameters(page, false, true, descSort)}`;

    const dataJson = await fetchUrl(url, setGETOptions());

    return getMovies(dataJson);
}

async function getGenres() {
    const url = "https://api.themoviedb.org/3/genre/movie/list";

    return fetchUrl(url, setGETOptions());
}

export async function getConfiguration() {
    const url = "https://api.themoviedb.org/3/configuration";

    return fetchUrl(url, setGETOptions());
}

export async function getMoviesFromTitle(title, page) {
    const titleName = title.split(" ").join("%20");

    const url = `https://api.themoviedb.org/3/search/movie?query=${titleName}${addUrlParameters(page)}`;

    const dataJson = await fetchUrl(url, setGETOptions());

    return getMovies(dataJson);
}

export async function getMovieDetailsFromID(movieID) {
    const url = `https://api.themoviedb.org/3/movie/${movieID}`;

    const dataJson = await fetchUrl(url, setGETOptions());

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
        const imdbID = item.imdb_id ?? "";
        const min = item.runtime ?? "";
        let genre;

        if (details) {
            genre = item.genres[0] ? item.genres[0].name : "";
        } else {
            const genreFound = genresList.find(genre => genre.id === item.genre_ids[0]);
            genre = genreFound ? genreFound.name : "";
        }

        return {
            id: id,
            title: title,
            imgUrl: imgUrl,
            description: overview,
            year: year,
            genre: genre,
            imdbID: imdbID,
            min: min,
        }
    })
}

export async function fetchUrl(url, options) {
    try {
        const response = await fetch(url, options);

        if (!response.ok) {
            switch (response.status) {
                case 400:
                    console.error("400 Bad Request");
                    break;
                case 401:
                    console.error("401 Unauthorized");
                    break;
                case 404:
                    console.error("404 Not Found");
                    break;
                case 500:
                    console.error("500 Internal Server Error");
                    break;
                default:
                    console.error("Could Not Fetch");
                    break;
            }

            return;
        }

        return await response.json();
    } catch (error) {
        throw new Error(error.message);
    }
}

const addUrlParameters = (page = 1, video = false, popularitySort = false, descSort = true) => {
    const includeAdult = `&include_adult=false`;
    const includeVideo = `&include_video=${video}`
    const language = "&language=en-US";
    const pageNumber = `&page=${page}`
    const sort = descSort ? "&sort_by=popularity.desc" : "&sort_by=popularity.asc";

    if (!popularitySort) return includeAdult + includeVideo + language + pageNumber;

    return includeAdult + includeVideo + language + pageNumber + sort;
}