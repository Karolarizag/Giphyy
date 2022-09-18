import React from 'react'
import Spinner from '../../components/Spinner/Spinner.js'
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs'
import { useGif } from '../../hooks/useGif'

export default function SearchResults ({ params }) {

  const { keyword } = params

  // Custom hook
  const { loading, gifs } = useGif({ keyword })
  const title = keyword.split('%20').join(' ')

  return <>
  
      {
        loading 
        ? <Spinner />
        : <ListOfGifs title={title} gifs={gifs} /> 
      }
  </>

}
