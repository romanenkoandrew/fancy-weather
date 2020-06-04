import DATA from './constants'

class AppModel {
  constructor(value) {
    this.value = value
  }

  async getCoords() {
    try {
      const { GEOCODING_TOKEN } = DATA
      const url = `https://api.opencagedata.com/geocode/v1/json?q=${this.value}&key=${GEOCODING_TOKEN}&pretty=1&limit=1&language=en`
      const responceData = await fetch(url)
      const data = await responceData.json()
      return data
    } catch (err) {
      return Error(err)
    }
  }

  async getWeather(latitude, longitude) {
    try {
      console.log(this.value)
      const { WEATHER_TOKEN } = DATA
      const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly&units=metric&appid=${WEATHER_TOKEN}`
      const response = await fetch(url)
      const data = await response.json()
      return data
    } catch (err) {
      return Error(err)
    }
  }
}

export default AppModel
