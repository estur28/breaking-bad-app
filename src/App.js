import React from 'react';
import AllCharacters from './features/characters/AllCharacters'
import Title from './components/Title'
import Search from './features/search/Search'
import AllEpisodes from './features/episodes/AllEpisodes';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import AllQuotes from './features/quotes/AllQuotes';
import './App.scss';


export default function App() {
  return (
    <>
    <BrowserRouter basename="/breaking-bad-app">
    <Switch>
      <div className='container'>
        <Navbar/>
          <Title />
          <Search />
            <Route exact path="/" component={AllCharacters}></Route>
            <Route exact path="/episodes" component={AllEpisodes}></Route>
            <Route exact path="/quotes" component={AllQuotes}></Route>
      </div>
    </Switch>
    </BrowserRouter>
    </>
  )
}

