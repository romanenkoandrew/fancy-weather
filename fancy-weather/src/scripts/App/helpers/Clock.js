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

  render() {
    this.element = document.createElement('span')
    this.element.innerText = new Date().toLocaleString('en-US', this.options)
    this.parentElement.appendChild(this.element)
  }

  start() {
    if (this.interval) return
    this.interval = setInterval(() => {
      this.element.innerText = new Date().toLocaleString('en-US', this.options)
    }, 1000)
  }

  changeTimeZone(value) {
    this.options.timeZone = value
  }

  delete() {
    clearInterval(this.interval)
    this.parentElement.firstElementChild.remove()
  }
}

export default Clock
