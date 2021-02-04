import React from 'react'
import Spinner from '../../components/Spinner'
import AboutEpisode from "./AboutEpisode"
import styled from 'styled-components'

const AboutAllSection = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    @media (max-width: 1050px) {
        grid-template-columns: repeat(3, 1fr);
        }

    @media (max-width: 840px) {
        grid-template-columns: repeat(2, 1fr);
        }

    @media (max-width: 560px) {
        grid-template-columns: 1fr;
    }
`

const AllEpisodes = ({itemsEpisode, isLoading}) => {
    return (
    (isLoading) ?
     (<Spinner />) : 
     (<AboutAllSection>
                {itemsEpisode.map((item) => (
                    <AboutEpisode 
                        key={item.episode_id}
                        item={item} />
                ))}
    </AboutAllSection>)
    ) 
}

export default AllEpisodes


                
