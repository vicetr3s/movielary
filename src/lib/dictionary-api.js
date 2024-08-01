import fetchUrl from "./fetch-url.js";

export async function getWordDefinition(word) {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    const dataJson = await fetchUrl(url, {});

    if (!dataJson) return null;

    const {meanings} = dataJson[0];
    const {definitions} = meanings[0];

    return definitions[0].definition;
}