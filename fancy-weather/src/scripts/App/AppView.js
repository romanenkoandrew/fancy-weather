import DATA from './constants'
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
      weatherIcon
    } = DATA

    cityName.innerText = `${this.obj.city}, ${this.obj.country}`
    latitude.innerText = `Latitude: ${this.obj.cityLat}`
    longitude.innerText = `Longitude: ${this.obj.cityLng}`

    this.getClock()

    overcast.innerText = `${this.obj.overcast}`
    feelsLike.innerText = `Feels like: ${this.obj.feelsLike} °`
    wind.innerText = `wind: ${this.obj.wind} m/s`
    humidity.innerText = `humidity: ${this.obj.humidity} %`
    console.log(this.obj.temperature)

    temperature.forEach((el, index) => {
      el.innerText = `${this.obj.temperature[index]}`
    })

    weatherIcon.forEach((el, index) => {
      el.src = `http://openweathermap.org/img/wn/${this.obj.weatherIcon[index]}@2x.png`
    })

    tomorrowDay.innerText = `${nameOfTheDay[this.obj.dayToday + 1]}`
    tomorrowDayNext.innerText = `${nameOfTheDay[this.obj.dayToday + 2]}`
    tomorrowDayNextNext.innerText = `${nameOfTheDay[this.obj.dayToday + 3]}`
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
    const a = localStorage.getItem('interval')
    if (a) clearInterval(a)
    const interval = setInterval(startClock, 1000)
    localStorage.setItem('interval', interval)
  }
}

export default AppView
