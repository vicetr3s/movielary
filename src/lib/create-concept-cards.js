import {getMovieSubtitle} from "./subtitles-api.js";
import fetchUrl from "./fetch-url.js";
import {getWordDefinition} from "./dictionary-api.js";
import Lemmatizer from "./javascript-lemmatizer-master/js/lemmatizer.js";

const lemmatizer = new Lemmatizer();
const MAX_WORDS = 15;

let stopWordsSet;

async function getConceptWords(imdbId) {
    const subtitle = await getMovieSubtitle(imdbId);
    const stopWordsTxt = await fetchUrl("/txt/stop_words.txt", {}, false);
    const subtitleWordsMap = new Map();
    const initialWordsSplice = 10;

    if (!subtitle) return;

    const shuffle = (array) => {
        return array.sort(() => Math.random() - 0.5)
    };

    if (!stopWordsSet || stopWordsSet.size === 0) {
        stopWordsSet = new Set();
        stopWordsTxt.split("\r\n").forEach(word => stopWordsSet.add(word.trim().toLowerCase()));
    }
    console.log("txt",stopWordsTxt);

    console.log("set",stopWordsSet);

    subtitle.forEach(line => line.split(" ").forEach(word => {
            const processedWord = word.trim().toLowerCase().replace(/[\[\]()“”".,-?!…]|'s|'d|'em|'ve/g, "");
            const lemmatizedWord = lemmatizer.only_lemmas(processedWord).sort()[0];

            if (!lemmatizedWord || lemmatizedWord.length <= 2) return;

            if (!stopWordsSet.has(lemmatizedWord)) {
                const wordCount = (subtitleWordsMap.get(lemmatizedWord) || 0) + 1;
                subtitleWordsMap.set(lemmatizedWord, wordCount);
            } else {
                console.log("tried to add", lemmatizedWord);
            }
        }
    ));

    const sortedConceptWordsMap = new Map([...subtitleWordsMap.entries()].sort((a, b) => b[1] - a[1]).slice(initialWordsSplice));

    return shuffle([...sortedConceptWordsMap.keys()]).slice(0, MAX_WORDS);
}

export async function getWordCards(imdbId, cardsAmount) {
    const conceptWords = await getConceptWords(imdbId);

    if (!conceptWords) return [];

    const cards = await Promise.all(conceptWords.map(async (word) => {
        try {
            const definition = await getWordDefinition(word);
            return {
                id: word,
                concept: word,
                definition: definition,
            };
        } catch (error) {
            return null;
        }
    }));

    return cards.filter(card => card).slice(0, cardsAmount);
}