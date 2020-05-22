const API_KEY = 'lgNnGzsAiWUFzmixA02M5LGC4Nk78OqU'
const BASE_URL = 'http://www.mapquestapi.com/geocoding/v1/address'

export async function getGeocode(geoCode) {
  const params = new URLSearchParams()
  params.append('key', API_KEY)
  params.append('location', geoCode)

  const endpoint = `${BASE_URL}?${params}`

  const response = await fetch(endpoint)
  const { results } = await response.json()
  const [{ locations }] = results

  return locations.map(location => ({
    street: location.street,
    neighborhood: location.adminArea6,
    city: location.adminArea5,
    county: location.adminArea5,
    state: location.adminArea3,
    country: location.adminArea1,
    type: location.geocodeQuality.toLowerCase(),
    latLng: location.latLng,
  }))
}

export default {
  getGeocode,
}
