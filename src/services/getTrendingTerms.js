import { API_KEY, API_URL } from './settings'

const fromApiResponse = apiResponse => {
  const {data = []} = apiResponse
  return data
}

export default function getTrendingTerms ({ limit = 25, keyword = 'love' } = {}) {
  
  const apiURL = `${API_URL}/trending/searches?api_key=${API_KEY}`
  
  return fetch(apiURL)
    .then(res => res.json())
    .then(fromApiResponse)
}