import React, { useState, useEffect } from 'react';
import axios from '../node_modules/axios';
import AllCharacters from './pages/characters/AllCharacters'
import Title from './components/Title'
import SearchCharacters from './components/SearchCharacters'
import AllEpisodes from './pages/episodes/AllEpisodes';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import AllQuotes from './pages/quotes/AllQuotes';

import './App.scss';

const App = () => {
  
  const [itemsChar, setItemsChar] = useState([])
  const [itemsEpisode, setItemsEpisode] = useState([])
  const [itemsQuote, setItemsQuote] = useState([])

  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')


  useEffect(() => {
  const fetchItems = async() => {
    setIsLoading(true);
    const charApi = (`https://www.breakingbadapi.com/api/characters?name=${query}`)
    const episodeApi = ('https://www.breakingbadapi.com/api/episodes')
    const quoteApi = (`https://www.breakingbadapi.com/api/quotes`)

    const getItemsChar = axios.get(charApi)
    const getItemsEpisode = axios.get(episodeApi)
    const getItemsQuote = axios.get(quoteApi)

    await axios.all([getItemsChar, getItemsEpisode, getItemsQuote])
      .then(axios.spread((...allData) => {
        const allDataChar = allData[0].data
        const allDataEpisode = allData[1].data
        const allDataQuotes = allData[2].data

        setItemsChar(allDataChar)
        setItemsEpisode(allDataEpisode)
        setItemsQuote(allDataQuotes)
        setIsLoading(false)
      }),
      
      )}
      fetchItems()

    }, [query])
    
   
  return (
    <>
    <BrowserRouter>
    <Switch>
      <Route exact path="/">
    <div className='container'>
    <Navbar/>
      <Title />
      <SearchCharacters  
      getQuery={(q) => setQuery(q)}
       /> 
      <AllCharacters isLoading={isLoading} itemsChar={itemsChar} />
    </div>
    </Route>

    <Route exact path="/episodes">
    <div className='container'>
    <Navbar/>
      <Title />
      <AllEpisodes isLoading={isLoading} itemsEpisode={itemsEpisode} />
    </div>
    </Route>

    <Route exact path="/quotes">
    <div className='container'>
    <Navbar/>
      <Title />
      <AllQuotes isLoading={isLoading} itemsQuote={itemsQuote} />
    </div>
    </Route>
    </Switch>
    </BrowserRouter>
    </>
  )
}



export default App;

