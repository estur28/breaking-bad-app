import React from 'react'
import Spinner from '../../components/Spinner'
import AboutEpisode from "./AboutEpisode"

import './AboutEpisode.scss'

// const initialQuote = {
//     text: 'Quote',
//     author: 'Author'
// }
const AllEpisodes = ({itemsEpisode, isLoading}) => {
    return (
    (isLoading) ?
     (<Spinner />) : 
     (<section className='about-episodes__all'>
                {itemsEpisode.map((item) => (
                    <AboutEpisode 
                        key={item.char_id}
                        item={item} />
                ))}
    </section>)
    ) 
    
}

export default AllEpisodes


    // const [quotes, setQuotes] = useState(initialQuote);
    // const getAllQuotes = async() => {
    //     const API_BASE_URL = 'https://www.breakingbadapi.com/api/episodes';
    //     const res = await fetch(API_BASE_URL);
    //     const [newQuote] = await res.json();

    //     setQuotes({})
    // }

    // useEffect(() => {
    //     getAllQuotes();
    // }, []);

    // return (

                
