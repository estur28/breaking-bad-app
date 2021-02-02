import React, { useState, useEffect } from 'react';
import axios from '../node_modules/axios';
import AllCharacters from './pages/characters/AllCharacters'
// import AllEpisodes from './pages/episodes/AllEpisodes'
import './App.scss';
import Title from './components/Title'
import SearchCharacters from './components/SearchCharacters'
import AllEpisodes from './pages/episodes/AllEpisodes';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';


const App = () => {
  
  const [itemsChar, setItemsChar] = useState([])
  const [itemsEpisode, setItemsEpisode] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  // const [query, setQuery] = useState('')

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchItems = async() => {
    setIsLoading(true);
    const charApi = ('https://www.breakingbadapi.com/api/characters')
    const episodeApi = ('https://www.breakingbadapi.com/api/episodes')

    const getItemsChar = axios.get(charApi)
    const getItemsEpisode = axios.get(episodeApi)
    await axios.all([getItemsChar, getItemsEpisode])
      .then(axios.spread((...allData) => {
        const allDataChar = allData[0].data
        const allDataEpisode = allData[1].data

        console.log(allDataChar);
        setItemsChar(allDataChar);
        console.log(allDataEpisode);
        setItemsEpisode(allDataEpisode);
        setIsLoading(false)
      })
    )
  }
 

  useEffect(() => {
    fetchItems()
    // const fetchItems = async () => {
    //   setIsLoading(true)
    //   const result = await axios.all([
    //     axios.get(`https://www.breakingbadapi.com/api/characters?name=${query}`),
    //     axios.get(`https://www.breakingbadapi.com/api/character/random?limit=${query}`)
    //   ])
    //   // .then(response => {
    //   //   console.log('Date created: ', response[0].result);
    //   //   console.log('Date created: ', response[1].result);
    //   // })

    //   setItems(result.data)
    //   setIsLoading(false)
    // }

    // fetchItems()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

   
  return (
    <>
    <BrowserRouter>
    <Switch>
      <Route exact path="/">
    <div className='container'>
      <Title />
      <SearchCharacters  
      // getQuery={(q) => setQuery(q)}
       /> 
      <AllCharacters isLoading={isLoading} itemsChar={itemsChar} />
      <Navbar/>
    </div>
    </Route>

    <Route exact path="/random">
    <div className='container'>
      <Title />
      <SearchCharacters  
      // getQuery={(q) => setQuery(q)}
       /> 
      <AllEpisodes isLoading={isLoading} itemsEpisode={itemsEpisode} />
      <Navbar/>
    </div>
    </Route>
    </Switch>
    </BrowserRouter>
    </>
  )
}



export default App;

