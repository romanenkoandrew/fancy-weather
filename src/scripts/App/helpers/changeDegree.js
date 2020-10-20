import DATA from '../constants'

const { fahrenheitButton, celsiusButton, temperature } = DATA

const toFahrenheit = el => {
  return ((Number(el) * 9) / 5 + 32).toFixed(0)
}

const toCelsius = el => {
  return (((Number(el) - 32) * 5) / 9).toFixed(0)
}

const changeDegree = () => {
  fahrenheitButton.addEventListener('click', event => {
    event.preventDefault()
    const degree = localStorage.getItem('degree')
    if (degree !== 'fahr') {
      localStorage.setItem('degree', 'fahr')
      temperature.forEach(el => {
        el.innerText = toFahrenheit(el.textContent)
      })
    }
  })

  celsiusButton.addEventListener('click', event => {
    event.preventDefault()
    const degree = localStorage.getItem('degree')
    if (degree !== 'cels') {
      localStorage.setItem('degree', 'cels')
      temperature.forEach(el => {
        el.innerText = toCelsius(el.textContent)
      })
    }
  })
}

export default changeDegree
