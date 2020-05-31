import DATA from './constants'

class AppModel {
  constructor(value) {
    this.value = value
  }

  async getCoords() {
    try {
      const { GEOCODING_TOKEN } = DATA
      const url = `https://api.opencagedata.com/geocode/v1/json?q=${this.value}&key=${GEOCODING_TOKEN}&pretty=1&limit=1&language=en`
      const responceData = await fetch(url)
      const data = await responceData.json()
      console.log(data)

      return data
    } catch (err) {
      return console.log('getCoordsAndMap:', Error(err))
    }
  }
}

export default AppModel
