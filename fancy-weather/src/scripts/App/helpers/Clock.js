// import DATA from '../constants'

// class Clock {
//   constructor(zone) {
//     this.options = {
//       timeZone: zone,
//       weekday: 'short',
//       day: 'numeric',
//       month: 'long',
//       hour: 'numeric',
//       minute: 'numeric',
//       second: 'numeric',
//       hour12: false
//     }
//     this.timerObj = setInterval(this.startClock, 1000)
//     // this.fn = fn
//     // this.t = t
//     // this.dateToday = DATA.dateToday
//   }

//   startClock() {
//     const { dateToday } = DATA
//     dateToday.innerText = new Date().toLocaleString('en-US', this.options)
//   }

//   timeStop() {
//     if (this.timerObj) {
//       clearInterval(this.timerObj)
//       this.timerObj = null
//     }
//     // return this
//   }

//   timeStart() {
//     this.timeStop()
//     this.timerObj = setInterval(this.startClock, 1000)
//     // return this
//   }
// }

// export default Clock
