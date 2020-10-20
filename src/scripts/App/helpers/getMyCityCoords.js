import DATA from '../constants'

const getMyCity = async () => {
  try {
    const { MY_GEOLOCATION_URL } = DATA
    const responseData = await fetch(MY_GEOLOCATION_URL)
    const data = await responseData.json()
    const { loc } = await data
    return loc
  } catch (err) {
    return console.log('Please, disable IP block\n', Error(err))
  }
}

export default getMyCity
