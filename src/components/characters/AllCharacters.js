import React from 'react'
import AboutCharacter from './AboutCharacter'
import Spinner from '../../misc/Spinner'
import './AllCharacters.scss'

const AllCharacters = ( { items, isLoading } ) => isLoading ? (
            <Spinner />
        ) : (
            <section className='about-all'>
                {items.map((item) => (
                    <AboutCharacter 
                        key={item.char_id}
                        item={item} />
                ))}
            </section>
        )

export default AllCharacters