import React, {useState} from 'react'

import './SearchCharacters.scss'

const SearchCharacters = ({ getQuery }) => {

    const [text, setText] = useState('')    


    const onChangeText = (q) => {
        setText(q)
        getQuery(q)
    }

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
