import {fetchUrl} from "./MoviesAPI.js";

const apiKey = import.meta.env.VITE_OS_API_KEY; // Type your opensubtitles.com free api key
const username = import.meta.env.VITE_OS_USERNAME; // Type your opensubtitles.com username
const password = import.meta.env.VITE_OS_PASSWORD; // Type your opensubtitles.com password
let accessToken;

function setLoginPostOptions() {
    return {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Api-Key': `${apiKey}`,
            'User-Agent': 'movielary v0.0.0',
        },
        body: JSON.stringify(
            {"username": username, "password": password},
        )
    }
}

function setGetOptions() {
    return {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Api-Key': `${apiKey}`,
            'Authorization': `Bearer ${accessToken}`,
            'User-Agent': 'movielary v0.0.0',
        }
    };
}

function setDownloadPostOptions(fileId) {
    return {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Api-Key': `${apiKey}`,
            'User-Agent': 'movielary v0.0.0',
        },
        body: JSON.stringify(
            {"file_id": fileId},
        )
    }
}

async function getAccessToken() {
    const url = "https://api.opensubtitles.com/api/v1/login";

    const dataJson = await fetchUrl(url, setLoginPostOptions());

    accessToken = dataJson.token;
}

async function getMovieSubtitleFileId(imdbId) {
    const url = `https://api.opensubtitles.com/api/v1/subtitles?imdb_id=${imdbId}&languages=en&order_by=ratings`;

    try {
        if (!accessToken) await getAccessToken();

        const dataJson = await fetchUrl(url, setGetOptions());

        return dataJson.data[0].attributes.files[0].file_id;
    } catch (error) {
        console.log(error);
    }
}

export async function getMovieSubtitleStr(imdbId) {
    const url = "https://api.opensubtitles.com/api/v1/download";

    try {
        if (!accessToken) await getAccessToken();

        const fileId = await getMovieSubtitleFileId(imdbId);
        const dataJson = await fetchUrl(url, setDownloadPostOptions(fileId));
        const strLink = dataJson.link;

        return strLink;
    } catch (error) {
        console.log(error);
    }
}
