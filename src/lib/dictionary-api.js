import fetchUrl from "./fetch-url.js";

const apiKey = import.meta.env.VITE_DICT_API_KEY || prompt("Type your Merriam-Webster free api key: "); // Type your Merriam-Webster free api key

export async function getWordDefinition(word) {
    const url = `https://www.dictionaryapi.com/api/v3/references/sd4/json/${word}?key=${apiKey}`;

    const dataJson = await fetchUrl(url, {});

    if (!dataJson) return null;

    const shortDefinitions = dataJson[0]["shortdef"];

    return shortDefinitions[0];
}