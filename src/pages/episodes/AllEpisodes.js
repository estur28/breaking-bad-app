import React from 'react'
import Spinner from '../../components/Spinner'
import AboutEpisode from "./AboutEpisode"

import './AboutEpisode.scss'


const AllEpisodes = ({ items, isLoading}) => isLoading ? (
    <Spinner />
) : (
    <section className='about-episodes__all'>
                {items.map((item) => (
                    <AboutEpisode 
                        key={item.episode_id}
                        item={item} />
                ))}
            </section>
)
      

export default AllEpisodes
