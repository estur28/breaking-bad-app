import React from 'react'
import AboutCharacter from './AboutCharacter'
import Spinner from '../../components/Spinner'
import './AllCharacters.scss'

const AllCharacters = ( { itemsChar, isLoading } ) => isLoading ? (
            <Spinner />
        ) : (
            <section className='about-all'>
                
                {itemsChar.map((item) => (
                    <AboutCharacter 
                        key={item.char_id}
                        item={item} />
                ))}
            </section>
        )

export default AllCharacters