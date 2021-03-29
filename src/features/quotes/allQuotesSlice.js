import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { selectSearchTerm } from '../search/searchSlice';

const BASE_URL = 'https://www.breakingbadapi.com/api/quotes';
export const getAllQuotes = createAsyncThunk(
    'allQuotes/getQuote',
     async () => {
    const response = await fetch(`${BASE_URL}`);
    const json = await response.json();
    return json;
}

// const loadQuotesApi = {
//     loadQuotes
// };

// export default loadQuotesApi;
//     loadQuotesApi.getQuote
)

export const allQuotesSlice = createSlice({
    name: "allQuotes",
    initialState: {
        quotes: [],
        isLoading: false,
    },

    reducers: {},
    extraReducers: {
        [getAllQuotes.pending]: (state) => {
            state.isLoading = true;
        },

        [getAllQuotes.fulfilled]: (state, action) => {
            state.quotes = action.payload;
            state.isLoading = false;
        },

        [getAllQuotes.rejected]: (state) => {
            state.isLoading = false;
        }
    }
});

// export const allQuotesSlice = createSlice(sliceOptions);

export const selectAllQuotes = (state) => state.allQuotes.quotes;

export const selectFilteredAllQuotes = (state) => {
    const allQuotes = selectAllQuotes(state);
    const searchTerm = selectSearchTerm(state);

    return allQuotes.filter((quote) => quote.author.toLowerCase().includes(searchTerm.toLowerCase()));
}

export default allQuotesSlice.reducer;
