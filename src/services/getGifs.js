const apiKey = 'ZyEnMFPi1nuxuJggV1BCWWFilotepRFP'

export default function getGifs ({keyword = 'love'} = {}) {
  
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=es`
  
  return fetch(apiURL)
    .then(res => res.json())
    .then(response => {
      const { data } = response 
      const gifs = data.map(gif => {
        const {images, title, id} = gif
        const {url} = images.downsized_medium
        return {title, id, url}
      })
      return gifs
    })
    .catch(err => console.log(err.json()))
}