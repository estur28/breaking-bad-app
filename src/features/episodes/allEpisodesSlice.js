import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { selectSearchTerm } from '../search/searchSlice';



const BASE_URL = 'https://www.breakingbadapi.com/api/episodes';

export const getAllEpisodes = createAsyncThunk(
    'allEpisodes/getEpisode',


     async () => {
    const response = await fetch(`${BASE_URL}`);
    const json = await response.json();
    return json;
    }
)

// const loadEpisodesApi = {
//     loadEpisodes
// };

// export default loadEpisodesApi;
//     loadEpisodesApi.getEpisode
// )

export const allEpisodesSlice = createSlice({
    name: "allEpisodes",
    initialState: {
        episodes: [],
        isLoading: false,
        hasError: false
    },

    reducers: {},
    extraReducers: {
        [getAllEpisodes.pending]: (state) => {
            state.isLoading = true;
        },

        [getAllEpisodes.fulfilled]: (state, action) => {
            state.episodes = action.payload;
            state.isLoading = false;
        },

        [getAllEpisodes.rejected]: (state) => {
            state.isLoading = false;
        }
    }
});

// export const allEpisodesSlice = createSlice(sliceOptions);

export const selectAllEpisodes = (state) => state.allEpisodes.episodes;

export const selectFilteredAllEpisodes = (state) => {
    const allEpisodes = selectAllEpisodes(state);
    const searchTerm = selectSearchTerm(state);

    return allEpisodes.filter((episode) => episode.title.toLowerCase().includes(searchTerm.toLowerCase()));
}

export default allEpisodesSlice.reducer;
