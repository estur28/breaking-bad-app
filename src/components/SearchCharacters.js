import React, {useState} from 'react'
import styled from 'styled-components'
// import './SearchCharacter.scss'

const SearchBox = styled.section`
    height: 100px;
`

const SearchInput = styled.input`
    display: block;
    padding: 10px;
    font-size: 20px;
    border: 0;
    border-radius: 5px;
    width: 60%;
    margin: auto;
    outline: none;
`

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
                        placeholder="Find your favorite characters..."
                        value={text}
                        onChange={
                            (e) =>onChangeText(e.target.value)
                        } />
            </form>
        </SearchBox>
    )
}
export default SearchCharacters
