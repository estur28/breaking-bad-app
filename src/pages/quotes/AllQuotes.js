import React from 'react'
import AboutQuote from './AboutQuote'
import Spinner from '../../components/Spinner'
import styled from 'styled-components'


const AboutAllSection = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
`

const AllQuotes = ( { itemsQuote, isLoading }) => {
    return (
        isLoading ?
        (<Spinner />) : 

        <AboutAllSection>
            {itemsQuote.map((item) => (
                <AboutQuote 
                    key={item.quote_id}
                    item={item} />
            ))}
        </AboutAllSection>
    )
}

export default AllQuotes
