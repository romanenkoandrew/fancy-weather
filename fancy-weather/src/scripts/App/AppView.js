import DATA from './constants'
import { getBackground } from './helpers/getBackground'
// import Clock from './helpers/Clock'

class AppView {
  constructor(obj) {
    this.obj = obj
  }

  render() {
    const {
      cityName,
      latitude,
      longitude,
      overcast,
      feelsLike,
      wind,
      humidity,
      tomorrowDay,
      tomorrowDayNext,
      tomorrowDayNextNext,
      nameOfTheDay,
      temperature,
      weatherIcon,
      fahrenheitButton,
      celsiusButton
    } = DATA

    const degree = localStorage.getItem('degree')
    if (degree === 'fahr') {
      celsiusButton.classList.remove('active')
      fahrenheitButton.classList.add('active')
    } else {
      fahrenheitButton.classList.remove('active')
      celsiusButton.classList.add('active')
    }

    cityName.innerText = `${this.obj.city}, ${this.obj.country}`
    latitude.innerText = `Latitude: ${this.obj.cityLat}`
    longitude.innerText = `Longitude: ${this.obj.cityLng}`

    this.getClock()

    overcast.innerText = `${this.obj.overcast}`
    feelsLike.innerText = `Feels like: ${this.obj.feelsLike} °`
    wind.innerText = `wind: ${this.obj.wind} m/s`
    humidity.innerText = `humidity: ${this.obj.humidity} %`

    temperature.forEach((el, index) => {
      el.innerText = `${this.obj.temperature[index]}`
    })

    weatherIcon.forEach((el, index) => {
      el.src = `http://openweathermap.org/img/wn/${this.obj.weatherIcon[index]}@2x.png`
    })

    tomorrowDay.innerText = `${nameOfTheDay[this.obj.dayToday]}`
    tomorrowDayNext.innerText = `${nameOfTheDay[this.obj.dayToday + 1]}`
    tomorrowDayNextNext.innerText = `${nameOfTheDay[this.obj.dayToday + 2]}`

    getBackground()
  }

  getClock() {
    const options = {
      timeZone: this.obj.timeZone,
      weekday: 'short',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: false
    }

    function startClock() {
      const { dateToday } = DATA
      dateToday.innerText = new Date().toLocaleString('en-US', options)
    }
    const interval = localStorage.getItem('interval')
    if (interval) clearInterval(interval)
    const newInterval = setInterval(startClock, 1000)
    localStorage.setItem('interval', newInterval)
  }
}

export default AppView
