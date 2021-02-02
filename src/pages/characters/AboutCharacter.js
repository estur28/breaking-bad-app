import React from 'react'

import './AboutCharacter.scss'


const AboutCharacter = ({ item }) => (
        <section className='about'>
           <div className="about-inner">
               <div className="about-image">
                   <img src={item.img} alt='Character' />
               </div>
               <section className='about-info'>
                    <h1>{item.name}</h1>
                    <div>
                        <p>
                            <strong>Actor Name:</strong>
                            {item.portrayed}
                        </p>

                        <p>
                            <strong>Nickame:</strong>
                            {item.nickname}
                        </p>

                        <p>
                            <strong>Birthday:</strong>
                            {item.birthday}
                        </p>

                        <p>
                            <strong>Status:</strong>
                            {item.status}
                        </p>
                    </div>
               </section>
           </div>
        </section>
    )

export default AboutCharacter
   