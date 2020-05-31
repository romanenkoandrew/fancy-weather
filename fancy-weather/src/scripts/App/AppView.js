import DATA from './constants'

class AppView {
  constructor(obj) {
    this.obj = obj
  }

  render() {
    const { cityName, latitude, longitude } = DATA
    cityName.innerText = `${this.obj.city}, ${this.obj.country}`
    latitude.innerText = `Latitude: ${this.obj.cityLat}`
    longitude.innerText = `Longitude: ${this.obj.cityLng}`
  }
}

export default AppView
