import App from './App'
import searchStartHandler from './App/helpers/searchStartHandler'
import { changeBackground } from './App/helpers/getBackground'
import getMyCity from './App/helpers/getMyCityCoords'
import changeDegree from './App/helpers/changeDegree'

document.addEventListener('DOMContentLoaded', async () => {
  const myCity = await getMyCity()
  const startPage = new App(myCity)
  startPage.start()
  searchStartHandler()
  changeBackground()
  changeDegree()
})
