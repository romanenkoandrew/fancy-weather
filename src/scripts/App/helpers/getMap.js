import mapboxgl from 'mapbox-gl/dist/mapbox-gl'
import DATA from '../constants'

const getMap = (latitude, longitude) => {
  mapboxgl.accessToken = DATA.MAP_TOKEN
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [longitude, latitude],
    zoom: 12
  })
  new mapboxgl.Marker().setLngLat([longitude, latitude]).addTo(map)
}

export default getMap
