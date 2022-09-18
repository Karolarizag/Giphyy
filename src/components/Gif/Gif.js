import React from 'react'
import './Gif.css'
import {Link} from 'wouter'

export default function Gif ( {title, id, url} ) {
  return (
    <div className='Gif'>
      <Link to={`/gif/${id}`} className="Link">
        <h3 className='AnimeTitle' > {title} </h3>
        <img loading='lazy' alt={title} src={url} className="AnimeImg" />
      </Link>
    </div>
  )
}