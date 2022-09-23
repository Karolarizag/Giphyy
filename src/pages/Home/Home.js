import React, { useState } from 'react';
import ListOfGifs from 'components/ListOfGifs/ListOfGifs';
import { useLocation } from 'wouter';
import { useGif } from 'hooks/useGif';
import Category from 'components/Category/Category';
import TrendingSearches from 'components/TrendingSearches/TrendingSearches';

export default function Home () {
  const [keyword, setKeyword] = useState('')
  const [path, pushLocation] = useLocation()
  console.log(path)

  const {gifs} = useGif()
  
  const handleSubmit = evt => {
    evt.preventDefault()
    // navegador otra ruta
    pushLocation(`/search/${keyword}`)
  }

  const handleChange = evt => {
    setKeyword(evt.target.value)
  }

  return (
    (
      <>
      <div class='text-center'>

        <form onSubmit={handleSubmit} class='my-10 form-control'>
          <div class="input-group flex justify-center">
            <input 
            class="input input-bordered input-primary w-full max-w-xs input-group" 
            placeholder="Text your search here!"
            type="text" 
            onChange={handleChange} 
            value={keyword} />
            <button class="btn btn-primary">Buscar</button>
          </div>
        </form>
        
      </div>

       <div className="App-wrapper">
        <div className="App-main">
          <div className="App-results">
            <h3 className="App-title">Última búsqueda</h3>
            <ListOfGifs gifs={gifs} />
          </div>
          <div className="App-category">
            <TrendingSearches />

          <Category 
            name="Fav Series"
            options={["Friends", "Big bang theory", "Anne with an E", "Game of Thrones", "Bridgerton"]}
            />        

          <Category 
            name="Fav movies"
            options={["Harry Potter", "Tangled", "Pride and prejudice", "Shrek"]}
            />
          </div>
        </div>
      </div>

      </>
    )
  )
}