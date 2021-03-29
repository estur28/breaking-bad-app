import { configureStore } from '@reduxjs/toolkit';
import allCharactersReducer from '../features/characters/allCharactersSlice';
import allEpisodesReducer from '../features/episodes/allEpisodesSlice';
import searchReducer from '../features/search/searchSlice';
import allQuotesReducer from '../features/quotes/allQuotesSlice';

export default configureStore({
    reducer: {
        allCharacters: allCharactersReducer,
        allEpisodes: allEpisodesReducer,
        allQuotes: allQuotesReducer,
        search: searchReducer,
    },
});