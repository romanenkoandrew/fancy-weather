import App from './App'
import searchStartHandler from './App/helpers/searchStartHandler'
import { changeBackground } from './App/helpers/getBackground'
// import getMyCity from './App/helpers/getMyCityCoords'

document.addEventListener('DOMContentLoaded', () => {
  // const myCoords = async () => {
  //   const city = await getMyCity()
  //   return city
  // }
  // const startPage = new App(myCoords)
  // const startPage = new App(52.0976667, 23.6871711)
  const startPage = new App('Minsk')
  startPage.start()
  searchStartHandler()
  changeBackground()
})
