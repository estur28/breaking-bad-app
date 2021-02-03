import React, {useState} from 'react'
import {SearchBox, SearchInput} from './Search.styled'



const SearchCharacters = ({ getQuery }) => {

    const [text, setText] = useState('') 

    const onChangeText = (q) => {
        setText(q)
        getQuery(q)
    }


    return (
        <SearchBox>
            <form>
                <SearchInput type='text'
                        className="form-control"
                        placeholder="Walter White..."
                        value={text}
                        onChange={
                            (e) =>onChangeText(e.target.value)
                        } />
            </form>
        </SearchBox>
    )
}
export default SearchCharacters
