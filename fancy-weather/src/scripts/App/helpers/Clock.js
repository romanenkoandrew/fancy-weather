import DATA from '../constants'

const { dateToday } = DATA
class Clock {
  constructor() {
    this.options = {
      timeZone: '',
      weekday: 'short',
      day: 'numeric',
      month: 'long',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: false
    }
    this.parentElement = dateToday
  }

  renderClock() {
    this.element = document.createElement('span')
    this.element.innerText = new Date().toLocaleString('en-US', this.options)
    this.parentElement.appendChild(this.element)
  }

  startClock() {
    if (this.interval) return
    this.interval = setInterval(() => {
      this.element.innerText = new Date().toLocaleString('en-US', this.options)
    }, 1000)
  }

  stopClock() {
    clearInterval(this.interval)
  }

  changeTimeZone(value) {
    this.options.timeZone = value
  }

  deleteClock() {
    this.parentElement.firstElementChild.remove()
  }
}

export default Clock
