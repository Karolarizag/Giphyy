import React from 'react'
import {Link} from 'wouter'

const BestAnimes = ['one piece', 'naruto', 'kimetsu no yaiba', 'jujutsu kaisen', 'wakimi no uso']

export default function Home () {
  
  
  return (
    (
      <>
        <h3>Lo animes más populares</h3>
        <ul>
          {BestAnimes.map((anime) => (
            <li key={anime.split(' ').join('+')}>
              <Link to={`/gif/${anime}`} className="Link">Gifs de {anime} </Link>
            </li>
          ))}
        </ul>
      </>
    )
  )
}