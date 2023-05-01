import React from 'react'
import {FaSearch} from 'react-icons/fa'
function Search() {
  return (
    <form className='header--search'>
      <input type="search" name="search" id="search" className='search--input' />
      <button type="submit" className='search--btn'><FaSearch/> </button>
    </form>
  )
}

export default Search

