import React, { useState, useEffect } from 'react'
import RecipeBody from './RecipeBody/RecipeBody'
import Search from './Search/Search'

const Recipe = () => {
  const [searchKey,setSearchKey] = useState("salad");

  useEffect(() => {
    console.log(searchKey)
  }, [searchKey])

  

  return (
    <div className='recipe-con'>
      <div className='search-div'>
        <Search setSearchKey = {setSearchKey} searchKey={searchKey}/>
      </div>
      <div className='cards-con'>
        <RecipeBody searchKey={searchKey}/>
      </div>

    </div>
  )
}

export default Recipe