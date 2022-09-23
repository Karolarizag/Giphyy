import React, { useEffect, useRef, useState } from 'react'
import getTrendingTerms from 'services/getTrendingTerms'
import Category from '../Category/Category'

function TrendingSearches () {

  const [trends, setTrends] = useState([])
  
  useEffect(function () {
    
    getTrendingTerms().then(setTrends)
    
  }, [])
  
  return <Category options={trends} name="Trending Gifs" />
  
}

export default function LazyTrending () {
  
  const [ show, setShow ] = useState(false)
  const ref = useRef()
  
  useEffect(function () {
    const onChange = (entries, ob) => {
      const el = entries[0]
      console.log(el.isIntersecting)
      if (el.isIntersecting) {
        setShow(true)
        ob.disconnect() // para que una vez el estado pase a true no vuelva a cambiar
      }
    }

    const observer = new IntersectionObserver(onChange, {
      rootMargin: '100px'
    })

    observer.observe(ref.current)

    return () => observer.disconnect()

  })

  return <div ref={ref}>
    {show ? <TrendingSearches /> : null }
  </div>

}