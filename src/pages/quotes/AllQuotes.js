import React from 'react'
import AboutQuote from './AboutQuote'
import Spinner from '../../components/Spinner'
import styled from 'styled-components'


const AboutAllSection = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    @media (max-width: 800px) {
        grid-template-columns: repeat(2, 1fr);
        }

    @media (max-width: 500px) {
        grid-template-columns: 1fr;
    }
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
