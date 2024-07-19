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

    const dataJson = await fetchURL(URL);
    const configJson = await getConfiguration();
    const genresJson = await getGenres();

    return Array.from(dataJson.results).map(item => {
        const {id, title, backdrop_path, overview, release_date, genre_ids} = item;
        const imgUrl = `${configJson.images.base_url}${configJson.images.backdrop_sizes[0]}${backdrop_path}`
        const genresList = genresJson.genres;
        const genre = genresList.find(genre => genre.id === genre_ids[0]).name;
        const yearRegex = /^.*?-/;
        const year = release_date.match(yearRegex)[0].slice(0, -1);

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

async function getGenres() {
    const URL = "https://api.themoviedb.org/3/genre/movie/list";

    return fetchURL(URL);
}

export async function getConfiguration() {
    const URL = "https://api.themoviedb.org/3/configuration";

    return fetchURL(URL);
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
