import React from 'react'

import './AboutEpisode.scss'

const AboutEpisode = ( { item, children  }) => {
    
    return (
    <section className='about-episode'>
           <div className="about-episode__inner">
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
               { children }
        </section>
    )
    
}

export default AboutEpisode
