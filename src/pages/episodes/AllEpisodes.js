import React from 'react'
import Spinner from '../../components/Spinner'
import AboutEpisode from "./AboutEpisode"
import styled from 'styled-components'

const AboutAllSection = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
`

const AllEpisodes = ({itemsEpisode, isLoading}) => {
    return (
    (isLoading) ?
     (<Spinner />) : 
     (<AboutAllSection>
                {itemsEpisode.map((item) => (
                    <AboutEpisode 
                        key={item.char_id}
                        item={item} />
                ))}
    </AboutAllSection>)
    ) 
}

export default AllEpisodes


                
