import React from 'react'
import AboutCharacter from './AboutCharacter'
import Spinner from '../../components/Spinner'

import styled from 'styled-components'

const AboutAllCharacters = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin-bottom: 100px;
    @media (max-width: 1130px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 820px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

const AllCharacters = ( { itemsChar, isLoading } ) => isLoading ? (
            <Spinner />
        ) : (
            <AboutAllCharacters>
                {itemsChar.map((item) => (
                    <AboutCharacter 
                        key={item.char_id}
                        item={item} />
                ))}
            </AboutAllCharacters>
        )

export default AllCharacters