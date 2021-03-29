import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import AboutEpisode from "./AboutEpisode"
import Spinner from '../../components/Spinner'

import styled from 'styled-components'

import {selectFilteredAllEpisodes} from '../../features/episodes/allEpisodesSlice'
import { getAllEpisodes } from '../../features/episodes/allEpisodesSlice';


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

const AllEpisodes = () => {
    // const { state } = useSelector((state) => state.allEpisodes);
    const dispatch = useDispatch();
    const allEpisodes = useSelector(selectFilteredAllEpisodes);
    const { isLoading } = useSelector((state) => state.allEpisodes);

    useEffect(() => {
        dispatch(getAllEpisodes());
    }, [dispatch]);

    if (isLoading) {
        return <Spinner />
    }
    return (
    <AboutAllSection>
                {allEpisodes.map((item) => (
                    <AboutEpisode 
                        key={item.episode_id}
                        item={item} />
                ))}
    </AboutAllSection>
    ) 
}

export default AllEpisodes


                
