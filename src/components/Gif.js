import React from 'react'
import '../styles/Gif.css'
import {Link} from 'wouter'

export default function Gif ( {title, id, url} ) {
  return (
    <div className='Gif'>
      <Link to={`/gif/${id}`} className="Link">
        <h3> {title} </h3>
        <img alt={title} src={url} />
      </Link>
    </div>
  )
}