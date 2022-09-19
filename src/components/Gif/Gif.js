import React from 'react'
import {Link} from 'wouter'
import './Gif.css'

export default function Gif ( {title, id, url} ) {
  return (
    <div class="Gif">
      {/* <div class="Gif-buttons">
        <Fav id={id}></Fav>
      </div> */}
      <Link to={`/gif/${id}`} class='Gif-link'>
        <h4>{title}</h4>
        <img loading='lazy' alt={title} src={url} />
      </Link>
    </div>
  )
}