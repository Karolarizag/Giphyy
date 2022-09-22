import React, { useState } from 'react';
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs';
import { Link, useLocation } from 'wouter';
import { useGif } from '../../hooks/useGif';

const popularGifs = ['Shingeki no Kyojin', 'Boku no Hero Academia', 'Kimetsu no yaiba', 'Jujutsu kaisen', 'JoJo\'s Bizarre Adventure', 'Dr. Stone', 'One-Punch Man', 'One piece', 'Tokyo Revengers', 'Hunter x Hunter', 'Naruto'];

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
      <div class='text-center'>

        <form onSubmit={handleSubmit} class='my-10'>
          <input 
          class="input input-bordered input-primary w-full max-w-xs" 
          placeholder="Text your search here!"
          type="text" 
          onChange={handleChange} 
          value={keyword} />
          <button class="btn btn-ghost">Buscar</button>
        </form>

        <h3>Última búsqueda:</h3>

        <ListOfGifs gifs={gifs}/>

        <h3>Los animes más populares:</h3>
        <ul>
          {popularGifs.map((anime) => (
            <li key={anime.split(' ').join('+')}>
              <Link to={`/search/${anime}`}> 
                <p class="my-2"> {anime} </p> 
              </Link>
            </li>
          ))}
        </ul>

      </div>
    )
  )
}