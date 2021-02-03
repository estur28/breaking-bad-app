import React, { useState, useEffect } from 'react';
import axios from '../node_modules/axios';
import AllCharacters from './pages/characters/AllCharacters'
import './App.scss';
import Title from './components/Title'
import SearchCharacters from './components/SearchCharacters'
import AllEpisodes from './pages/episodes/AllEpisodes';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import RandomChar from './pages/random/RandomChar';
import AllQuotes from './pages/quotes/AllQuotes';
import Search from './components/Search';


const App = () => {
  
  const [itemsChar, setItemsChar] = useState([])
  const [itemsRandom, setItemsRandom] = useState([])
  const [itemsEpisode, setItemsEpisode] = useState([])
  const [itemsQuote, setItemsQuote] = useState([])

  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')
  const [randomQuery, setRandomQuery] = useState()  


  useEffect(() => {
  const fetchItems = async() => {
    setIsLoading(true);
    const charApi = (`https://www.breakingbadapi.com/api/characters?name=${query}`)
    const randomApi = (`https://www.breakingbadapi.com/api/character/random?limit=${randomQuery}`)
    const episodeApi = ('https://www.breakingbadapi.com/api/episodes')
    const quoteApi = (`https://www.breakingbadapi.com/api/quotes`)

    const getItemsChar = axios.get(charApi)
    const getItemsRandom = axios.get(randomApi)
    const getItemsEpisode = axios.get(episodeApi)
    const getItemsQuote = axios.get(quoteApi)

    await axios.all([getItemsChar, getItemsRandom, getItemsEpisode, getItemsQuote])
      .then(axios.spread((...allData) => {
        const allDataChar = allData[0].data
        const allDataRandom = allData[1].data
        const allDataEpisode = allData[2].data
        const allDataQuotes = allData[3].data

        setItemsChar(allDataChar)
        setItemsRandom(allDataRandom)
        setItemsEpisode(allDataEpisode)
        setItemsQuote(allDataQuotes)
        setIsLoading(false)
      }),
      
      )}
      fetchItems()

    }, [query, randomQuery])
   
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

    <Route exact path="/random">
    <div className='container'>
    <Navbar/>
      <Title />
      <Search 
      getRandomQuery={(n) => setRandomQuery(n)}
       /> 
      <RandomChar isLoading={isLoading} itemsRandom={itemsRandom} />
    </div>
    </Route>

    <Route exact path="/episodes">
    <div className='container'>
    <Navbar/>
      <Title />
      {/* <SearchCharacters  
      // getQuery={(q) => setQuery(q)}
       />  */}
      <AllEpisodes isLoading={isLoading} itemsEpisode={itemsEpisode} />
    </div>
    </Route>

    <Route exact path="/quotes">
    <div className='container'>
    <Navbar/>
      <Title />
      {/* <SearchCharacters  
      getQuery={(q) => setQuery(q)}
       />  */}
      <AllQuotes isLoading={isLoading} itemsQuote={itemsQuote} />
    </div>
    </Route>
    </Switch>
    </BrowserRouter>
    </>
  )
}



export default App;

