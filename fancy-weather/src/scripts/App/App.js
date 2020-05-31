// import getMyCity from './helpers/getMyCityCoords'
import AppModel from './AppModel'
import getMap from './helpers/getMap'
import AppView from './AppView'

class App {
  constructor(...args) {
    this.state = args
  }

  async start() {
    try {
      const dataObj = {}
      // console.log('appstart', this.state)
      // const myCity = await getMyCity()
      // console.log(myCity)
      const model = new AppModel(this.state)
      const coords = await model.getCoords()
      dataObj.cityLat = coords.results[0].annotations.DMS.lat
      dataObj.cityLng = coords.results[0].annotations.DMS.lng
      dataObj.city =
        coords.results[0].components.city || coords.results[0].components.state
      dataObj.country = coords.results[0].components.country
      // console.log('appstart', dataObj.city, dataObj.country)
      await getMap(
        coords.results[0].geometry.lat,
        coords.results[0].geometry.lng
      )
      const view = new AppView(dataObj)
      view.render()
    } catch (err) {
      throw Error(err)
    }
  }
}

export default App
