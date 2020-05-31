// import getMyCity from './helpers/getMyCityCoords'
import AppModel from './AppModel'
import getMap from './helpers/getMap'

class App {
  constructor(...args) {
    this.state = args
  }

  async start() {
    try {
      const dataObj = {}
      console.log('appstart', this.state)
      // const myCity = await getMyCity()
      // console.log(myCity)
      const model = new AppModel(this.state)
      const coords = await model.getCoords()
      dataObj.cityLat = coords.results[0].geometry.lat
      dataObj.cityLng = coords.results[0].geometry.lng
      dataObj.city =
        coords.results[0].components.city || coords.results[0].components.state
      dataObj.country = coords.results[0].components.country
      console.log('appstart', dataObj.city, dataObj.country)
      await getMap(dataObj.cityLat, dataObj.cityLng)
    } catch (err) {
      throw Error(err)
    }
  }
}

export default App
