import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { selectSearchTerm } from '../search/searchSlice'
 
const BASE_URL = 'https://www.breakingbadapi.com/api/characters';


export const getAllCharacters = createAsyncThunk(
    'allCharacters/getCharacter',
    async () => {
        const response = await fetch(`${BASE_URL}`);
        const json = await response.json();
    
        return json;
    }
);

export const allCharactersSlice = createSlice({
    name: "allCharacters",
    initialState: {
        characters: [],
        isLoading: false,
    },

    reducers: {},
    extraReducers: {
        [getAllCharacters.pending]: (state) => {
            state.isLoading = true;
        },

        [getAllCharacters.fulfilled]: (state, action) => {
            state.characters = action.payload;
            state.isLoading = false;
        },

        [getAllCharacters.rejected]: (state) => {
            state.isLoading = false;
        }
    }
});

// export const allCharactersSlice = createSlice(sliceOptions);

export const selectAllCharacters = (state) => state.allCharacters.characters;

export const selectFilteredAllCharacters = (state) => {
    const allCharacters = selectAllCharacters(state);
    const searchTerm = selectSearchTerm(state);

    return allCharacters.filter((character) => character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
}

export default allCharactersSlice.reducer;

