import React, {useState} from 'react'
// import AllCharacters from '../pages/characters/AllCharacters'
// import AllEpisodes from '../pages/episodes/AboutEpisode'

import './SearchCharacter.scss'

const SearchCharacters = ({ getQuery }) => {

    const [text, setText] = useState('')    
    // const [searchOption, setSearchOption] = useState('characters');

    const onChangeText = (q) => {
        setText(q)
        getQuery(q)
    }

    // const onRadioChange = (e) => {
    //     setSearchOption(e.target.value);
    // }

    // const getSearchOption = () => {
    //             if (items && items.length === 0) {
    //                 return <div>No results</div>
    //             }
    //     if (items && items.length > 0) {
    //         return items[0].characters 
    //         ? <AllCharacters data={items}/> :
    //           <AllEpisodes data={items} />
    //     }
    //     return null
    // }

    return (
        <section className='search'>
            <form>
                <input type='text'
                        className="form-control"
                        placeholder="Breaking Bad Search"
                        value={text}
                        onChange={(e) => onChangeText(e.target.value)} />
            </form>
        </section>
    )
}
export default SearchCharacters
