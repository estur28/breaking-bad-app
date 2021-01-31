import React, { useState, useEffect } from 'react';
import axios from '../node_modules/axios';
import AllCharacters from './pages/characters/AllCharacters'
import AllEpisodes from './pages/episodes/AllEpisodes'
import './App.scss';
import Title from './components/Title'
import SearchCharacters from './components/SearchCharacters'


const App = () => {
  
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  const [searchOption, setSearchOption] = useState('characters')
 
 

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true)
      const result = await axios(
        `https://www.breakingbadapi.com/api/${searchOption}?name=${query}`,
      )

      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [query, searchOption])



  const getSearchOption = () => {
       if (items && items.length === 0) {
          return <div>No results</div>
        }
      if (items && items.length > 0) {
        return items[0].characters 
        ? <AllCharacters data={items}/> :
          <AllEpisodes data={items} />
      }
    }

    
  return (
    <>
    <div className='container'>
      <Title />
      <SearchCharacters  getQuery={(q) => setQuery(q)}
        isLoading={isLoading}
        searchOption={searchOption} 
        setSearchOption={setSearchOption} 
        items={items}
       /> 
      <AllCharacters isLoading={isLoading} items={items} />
      <AllEpisodes isLoading={isLoading} items={items} />
      {getSearchOption()}
    </div>
    </>
  )
}



export default App;

