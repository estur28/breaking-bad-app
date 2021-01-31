import React from 'react'

import './AllEpisodes.scss'

const AboutEpisode = ( { item }) => (
    <section className='about-episode'>
           <div className="about-episode__inner">
               <div className='about-episode__info'>
                    <h1>{item.title}</h1>
                    <ul>
                        <li>
                            <strong>Season:</strong>
                            {item.season}
                        </li>

                        <li>
                            <strong>Episode:</strong>
                            {item.episode}
                        </li>

                        <li>
                            <strong>Air Date:</strong>
                            {item.air_date}
                        </li>

                        <li>
                            <strong>Characters:</strong>
                            <span>{item.characters}</span>
                        </li>
                    </ul>
               </div>
           </div>
        </section>
    )

export default AboutEpisode
