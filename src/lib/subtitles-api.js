import fetchUrl from "./fetch-url.js";

const apiKey = import.meta.env.VITE_OS_API_KEY; // Type your opensubtitles.com free api key
const username = import.meta.env.VITE_OS_USERNAME; // Type your opensubtitles.com username
const password = import.meta.env.VITE_OS_PASSWORD; // Type your opensubtitles.com password

let accessToken;

function setLoginPostHeaders() {
    return {
        method: 'POST', headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Api-Key': `${apiKey}`,
            'User-Agent': 'movielary v0.0.0',
        }, body: JSON.stringify({"username": username, "password": password},)
    }
}

function setGetHeaders() {
    return {
        method: 'GET', headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Api-Key': `${apiKey}`,
            'Authorization': `Bearer ${accessToken}`,
            'User-Agent': 'movielary v0.0.0',
        }
    };
}

function setDownloadPostHeaders(fileId) {
    return {
        method: 'POST', headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Api-Key': `${apiKey}`,
            'User-Agent': 'movielary v0.0.0',
        }, body: JSON.stringify({"file_id": fileId},)
    }
}

async function getAccessToken() {
    const url = "https://api.opensubtitles.com/api/v1/login";

    const dataJson = await fetchUrl(url, setLoginPostHeaders());

    if (!dataJson) return;

    accessToken = dataJson.token;
}

async function getMovieSubtitleFileId(imdbId) {
    const url = `https://api.opensubtitles.com/api/v1/subtitles?imdb_id=${imdbId}&languages=en&order_by=ratings`;

    try {
        if (!accessToken) await getAccessToken();

        const dataJson = await fetchUrl(url, setGetHeaders());

        if (!dataJson) return null;

        return dataJson.data[0].attributes.files[0]["file_id"];
    } catch (error) {
        console.log(error);
    }
}

export async function getMovieSubtitle(imdbId) {
    const url = "https://api.opensubtitles.com/api/v1/download";

    try {
        if (!accessToken) await getAccessToken();

        const fileId = await getMovieSubtitleFileId(imdbId);
        const dataJson = await fetchUrl(url, setDownloadPostHeaders(fileId));
        const srtUrl = dataJson["link"];
        const srt = await fetchUrl(srtUrl, {}, false);

        return parseSrt(String(srt));
    } catch (error) {
        console.log(error);
    }
}

async function parseSrt(srt) {
    const subtitleBlocks = srt.trim().split(/\n\s*\n/);

    return subtitleBlocks.map(subtitleBlock => {
        let [_timeString, ...textLines] = subtitleBlock.split("\n");
        textLines.shift();
        return textLines
            .join(" ")
            .replace(/<[^>]*>/g, "")
            .replace(/\{.*?}/g, '');
    });
}