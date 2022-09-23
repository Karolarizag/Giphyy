import { API_KEY, API_URL } from './settings'

const fromApiResponse = apiResponse => {
  const {data = []} = apiResponse
  if ( Array.isArray(data) ) {
    const gifs = data.map(gif => {
        const {images, title, id} = gif
        const {url} = images.downsized_medium
        return {title, id, url}
      })
      return gifs
  }
  return []
}

export default function getGifs ({ limit = 25, keyword = 'love' } = {}) {
  
  const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=25&offset=0&rating=g&lang=es`
  
  return fetch(apiURL)
    .then(res => res.json())
    .then(fromApiResponse)
}