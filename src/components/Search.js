import React, {useState} from 'react'

const Search = ({getRandomQuery}) => {
    const [number, setNumber] = useState() 

    const onChangeNumber = (n) => {
        setNumber(n)
        getRandomQuery(n)
    }


    return (
        <section className='search'>
            <form>
                <input type='number'
                        className="form-control"
                        placeholder="Enter number of random characters"
                        value={number}
                        onChange={
                            (e) =>onChangeNumber(e.target.value)
                        } />
            </form>
        </section>
    )
}

export default Search
