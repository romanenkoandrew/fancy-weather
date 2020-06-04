import AppModel from './AppModel'
import getMap from './helpers/getMap'
import AppView from './AppView'
import preloader from './helpers/preloader'

class App {
  constructor(...args) {
    this.state = args
  }

  async start() {
    try {
      preloader(false)
      const dataObj = {}
      const model = new AppModel(this.state)
      const coords = await model.getCoords()

      dataObj.cityLat = coords.results[0].annotations.DMS.lat
      dataObj.cityLng = coords.results[0].annotations.DMS.lng
      dataObj.timeZone = coords.results[0].annotations.timezone.name
      dataObj.city =
        coords.results[0].components.city || coords.results[0].components.state
      dataObj.country = coords.results[0].components.country

      const latitude = coords.results[0].geometry.lat
      const longitude = coords.results[0].geometry.lng

      await getMap(latitude, longitude)

      const weather = await model.getWeather(latitude, longitude)

      dataObj.dayToday = new Date().getDay()
      dataObj.overcast = weather.current.weather[0].main
      dataObj.feelsLike = weather.current.feels_like.toFixed(0)
      dataObj.humidity = weather.current.humidity.toFixed(0)
      dataObj.wind = weather.current.wind_speed.toFixed(0)

      dataObj.temperature = [
        weather.current.temp.toFixed(0),
        weather.daily[0].temp.day.toFixed(0),
        weather.daily[1].temp.day.toFixed(0),
        weather.daily[2].temp.day.toFixed(0)
      ]

      dataObj.weatherIcon = [
        weather.current.weather[0].icon,
        (dataObj.tomorrowIcon = weather.daily[0].weather[0].icon),
        (dataObj.tomorrowNextIcon = weather.daily[1].weather[0].icon),
        (dataObj.tomorrowNextNextIcon = weather.daily[2].weather[0].icon)
      ]
      const view = new AppView(dataObj)
      view.render()
      preloader(true)
    } catch (err) {
      throw Error(err)
    }
  }
}

export default App
