import React from 'react'
import Gif from '../Gif/Gif'
import './ListOfGifs.css'

export default function ListOfGifs ({gifs, title}) {

  return <div>

    <h3>{title}</h3>

    <div class='ListOfGifs'>
      {
        
        gifs.map(({id, title, url}) => 
        <Gif 
        title={title} 
        id={id} 
        url={url} 
        key={id} 
        />
        )
        
      }
    </div>

  </div>

}