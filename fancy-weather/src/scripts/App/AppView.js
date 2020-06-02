import DATA from './constants'
// import Clock from './helpers/Clock'

class AppView {
  constructor(obj) {
    this.obj = obj
  }

  render() {
    const { cityName, latitude, longitude } = DATA
    cityName.innerText = `${this.obj.city}, ${this.obj.country}`
    latitude.innerText = `Latitude: ${this.obj.cityLat}`
    longitude.innerText = `Longitude: ${this.obj.cityLng}`
    this.getClock()
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
