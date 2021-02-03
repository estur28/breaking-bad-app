import React from 'react'

import './AboutQuote.scss'

const AboutQuote = ( {item} ) => {
    return (
        <section className='about-quote'>
            <div className='about-quote__inner'>
                <div className='about-quote__info'>
                    <h1>Author: {item.author} </h1>

                    <ul>
                        <li>
                            <strong>Quote:</strong>
                            {item.quote}
                        </li>

                        <li>
                            <strong>Series:</strong>
                            {item.series}
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default AboutQuote
