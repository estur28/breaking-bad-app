import React from 'react'
import AboutQuote from './AboutQuote'
import Spinner from '../../components/Spinner'

import './AllQuotes.scss'

const AllQuotes = ( { itemsQuote, isLoading }) => {
    return (
        isLoading ?
        (<Spinner />) : 

        <section className='about-quotes__all'>
            {itemsQuote.map((item) => (
                <AboutQuote 
                    key={item.quote_id}
                    item={item} />
            ))}
        </section>
    )
}

export default AllQuotes
