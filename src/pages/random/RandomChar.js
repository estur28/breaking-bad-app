import React from 'react'
import AboutCharacter from '../characters/AboutCharacter'
import Spinner from '../../components/Spinner'
import './RandomChar.scss'

const RandomChar = ( {itemsRandom, isLoading} ) => isLoading ? ( 
            <Spinner/>
                ) : ( 
            <section className='about-all'>
            {itemsRandom.map((item) => (
                <AboutCharacter
                    key={item.char_id}
                    item={item} />
            ))}
            </section>
        )
    


export default RandomChar
