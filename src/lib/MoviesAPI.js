import {API_KEY} from "./AUTH.js";

function setGETOptions() {
    return {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_KEY}`
        }
    };
}

export async function getPopularMovies() {
    const URL = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";

    const dataJSON = await fetchURL(URL);

    return getMovies(dataJSON);
}

async function getGenres() {
    const URL = "https://api.themoviedb.org/3/genre/movie/list";

    return fetchURL(URL);
}

export async function getConfiguration() {
    const URL = "https://api.themoviedb.org/3/configuration";

    return fetchURL(URL);
}

export async function getMoviesFromTitle(title, adult, page) {
    const titleName = title.split(" ").join("%20");
    const includeAdult = `&include_adult=${adult}`;
    const language = "&language=en-US";
    const pageNumber = `&page=${page}`
    const URL = `https://api.themoviedb.org/3/search/movie?query=${titleName}${includeAdult}${language}${pageNumber}`;

    const dataJSON = await fetchURL(URL);

    return getMovies(dataJSON);
}

async function getMovies(dataJSON) {
    const configJSON = await getConfiguration();
    const genresJSON = await getGenres();
    const genresList = genresJSON.genres;

    return Array.from(dataJSON.results).map(item => {
        const {id, title, backdrop_path, overview, release_date, genre_ids} = item;
        const imgUrl = backdrop_path ? `${configJSON.images.base_url}${configJSON.images.backdrop_sizes[0]}${backdrop_path}` : "";
        const genreFound = genresList.find(genre => genre.id === genre_ids[0]);
        const genre = genreFound ? genreFound.name : "";
        const yearRegex = /^.*?-/;
        const year = release_date ? release_date.match(yearRegex)[0].slice(0, -1) : "";

        return {
            id: id,
            title: title,
            imgUrl: imgUrl,
            description: overview,
            year: year,
            genre: genre,
        }
    })
}

export async function fetchURL(URL) {
    const fetchOptions = setGETOptions();

    try {
        const response = await fetch(URL, fetchOptions);

        if (!response.ok) {
            console.error(`Could not fetch.`);
            return;
        }

        return await response.json();
    } catch (error) {
        console.error(error);
    }
}
