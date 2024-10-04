import React from 'react'
import SearchBar from './SearchBar'
import StateList from './StateList'

const Home = () => {
  return (
    <main>
    <div className="search-filter-container">
    <SearchBar/>
    </div>
    <StateList/>
    </main>
  )
}

export default Home