import React from 'react'
import {FaSearch} from 'react-icons/fa'
function Search({handleSearch,itemSearched,displaySearchItem}) {
  return (
    <div className='header--search'>
      <input type="search" name="search" id="search" className='search--input' onChange={handleSearch}/>
      <button type="submit" className='search--btn'
      onClick={()=> displaySearchItem(itemSearched)}><FaSearch/> </button>
    </div>
  )
}

export default Search

