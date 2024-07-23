import {fetchURL} from "./MoviesAPI.js";

const apiKey = import.meta.env.VITE_OS_API_KEY; // Type your opensubtitles.com free api key
const username = import.meta.env.VITE_OS_USERNAME; // Type your opensubtitles.com username
const password = import.meta.env.VITE_OS_PASSWORD; // Type your opensubtitles.com password

function setLoginPostOptions() {
    return {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Api-Key': `${apiKey}`,
            'Authorization': `Bearer ${apiKey}`,
            'User-Agent': '{{movielary}} v{{0.0.0}}',
        },
        body: JSON.stringify(
            {"username": username, "password": password},
        )
    }
}

function setGETOptions() {
    return {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Api-Key': `${apiKey}`,
            'Authorization': `Bearer ${apiKey}`,
            'User-Agent': '{{movielary}} v{{0.0.0}}',
        }
    };
}

export async function getAccessToken() {
    const URL = "https://api.opensubtitles.com/api/v1/login";

    const dataJSON = await fetchURL(URL, setLoginPostOptions());

    console.log(dataJSON);
    return dataJSON.token;
}