# 🎥 Movielary 📖

## Learn vocabulary from movies. A React app that turns movies into flashcards.

## About 🎥

Movielary is a personal project built with React, CSS and HTML. It uses the TMDB API to fetch movie data and create an interactive list of movies. Once a movie is selected, the application uses the OpenSubtitles API to extract keywords from the subtitles. These words are then defined using a dictionary API and transformed into simple cards.

## Features 🌟

- Movie Search: Discover your favorite movies using the TMDB API.
- Flashcard Generation: Create flashcards based on movie vocabulary.
- Interactive Flashcards: Flip through cards to learn new words.
- Clean and User-Friendly Interface: Enjoy a simple and intuitive design.

## Tech Stack 🚀

- Frontend: React, CSS, HTML
- APIs: TMDB, OpenSubtitles, a dictionary API

## How it Works 💡

1. Movie Selection: Choose a movie from the list populated by TMDB.
2. Subtitle Extraction: OpenSubtitles API fetches subtitles for the selected movie.
3. Word Extraction: Key words are identified from the subtitles.
4. Definition Retrieval: Dictionary API provides definitions for the extracted words.
5. Flashcard Creation: Flashcards are generated with the word on one side and the definition on the other.
