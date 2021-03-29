import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
    clearSearchTerm,
    selectSearchTerm,
    setSearchTerm,
  } from './searchSlice.js';

import {SearchBox, SearchInput, ClearButton } from './Search.styled';

const Search = () => {

    const dispatch = useDispatch();
    const searchTerm = useSelector(selectSearchTerm);

    const onSearchChangeHandler = (e) => {
        dispatch(setSearchTerm(e.target.value));
      };

    const onSearchTermClearHandler = () => {
        dispatch(clearSearchTerm());
    };

    return (
        <SearchBox>
            <form>
                <SearchInput 
                        id = "search"
                        type='text'
                        className="form-control"
                        placeholder="Walter White"
                        value={searchTerm}
                        onChange={onSearchChangeHandler} 
                />
                {searchTerm.length > 0 && (
        <ClearButton
          onClick={onSearchTermClearHandler}
          type="button"
          id="search-clear-button">	
            &#10006;
        </ClearButton>
      )}
            </form>
        </SearchBox>
    )
}
export default Search
