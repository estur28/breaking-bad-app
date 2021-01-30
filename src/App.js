import React, { useState, useEffect } from 'react';
import axios from '../node_modules/axios';
import AllCharacters from './pages/characters/AllCharacters'
import './App.scss';
import Title from './components/Title'
import Search from './components/Search'


const App = () => {
  
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')
 
 

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true)
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      )

      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [query])

    
  return (
    <div className='container'>
      <Title />
      <Search getQuery={(q) => setQuery(q)} />
      <AllCharacters isLoading={isLoading} items={items} />
    </div>
  )
}



export default App;

