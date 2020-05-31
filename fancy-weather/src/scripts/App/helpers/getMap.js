import mapboxgl from 'mapbox-gl/dist/mapbox-gl'
import DATA from '../constants'

const getMap = (latitude, longitude) => {
  mapboxgl.accessToken = DATA.MAP_TOKEN
  return new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [longitude, latitude],
    zoom: 12
  })
}

export default getMap
