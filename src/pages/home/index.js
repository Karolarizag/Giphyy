import React, { useState } from 'react';
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs';
import { Link, useLocation } from 'wouter';
import { useGif } from '../../hooks/useGif';

const popularGifs = ['One piece', 'Naruto', 'Kimetsu no yaiba', 'Jujutsu kaisen', 'Wakimi no uso', 'Pokemon'];

export default function Home () {
  const [keyword, setKeyword] = useState('')
  const [path, pushLocation] = useLocation()

  const {loading, gifs} = useGif()
  
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
      <div className='text-center'>

        <form onSubmit={handleSubmit} className='my-10'>
          <input 
          className="input input-bordered input-primary w-full max-w-xs" 
          placeholder="Text your search here!"
          type="text" 
          onChange={handleChange} 
          value={keyword} />
          <button className="btn btn-ghost">Buscar</button>
        </form>

        <h3>Última búsqueda:</h3>

        <ListOfGifs gifs={gifs}/>

        <h3>Los gifs más populares:</h3>
        <ul>
          {popularGifs.map((anime) => (
            <li key={anime.split(' ').join('+')}>
              <Link to={`/search/${anime}`}> {anime} </Link>
            </li>
          ))}
        </ul>

      </div>
    )
  )
}