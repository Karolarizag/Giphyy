import {useEffect, useState, useContext} from 'react'
import GifsContext from '../context/GifsContext'
import getGifs from '../services/getGifs'

export function useGif ({keyword} = {keyword : null}) {
  const [loading, setLoading] = useState(false)
  const {gifs, setGifs} = useContext(GifsContext)

  useEffect(function () {

    setLoading(true)
    
    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'welcome'

    getGifs({keyword : keywordToUse})
    
    .then(gifs => {
      setGifs(gifs)
      setLoading(false)
      localStorage.setItem('lastKeyword', keyword)
    })

  }, [keyword, setGifs])

  return {loading, gifs}
}