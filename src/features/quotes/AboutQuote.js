import React from 'react'

import './AboutQuote.scss'

const AboutQuote = ( {item, children } ) => {
    return (
        <section className='about-quote'>
            <div className='about-quote__inner'>
                    <h1>{item.author} </h1>
                    <ul>
                        <li>
                            <strong>Quote:</strong>
                            {item.quote}
                        </li>

                    </ul>
                </div>
                { children }
        </section>
    )
}

export default AboutQuote
