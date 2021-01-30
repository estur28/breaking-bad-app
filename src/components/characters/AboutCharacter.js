import React from 'react'

import './AboutCharacter.scss'


const AboutCharacter = ({ item }) => (
        <section className='about'>
           <div className="about-inner">
               <div className="about-image">
                   <img src={item.img} alt='Character' />
               </div>

               <div className='about-info'>
                    <h1>{item.name}</h1>
                    <ul>
                        <li>
                            <strong>Actor Name:</strong>
                            {item.portrayed}
                        </li>

                        <li>
                            <strong>Nickame:</strong>
                            {item.nickname}
                        </li>

                        <li>
                            <strong>Birthday:</strong>
                            {item.birthday}
                        </li>

                        <li>
                            <strong>Status:</strong>
                            {item.status}
                        </li>
                    </ul>
               </div>
           </div>
        </section>
    )

export default AboutCharacter
   