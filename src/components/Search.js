import React from 'react'
import './Search.css'

function Search({search, onSearchChange}) {
  return (
    <div className='search-container'>
        <input type="text" placeholder='Search for a country...' value={search} onChange={(e) => onSearchChange(e.target.value)}/>

    </div>
  )
}

export default Search