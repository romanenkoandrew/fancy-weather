import DATA from '../constants'

const body = value => {
  document.body.style = `background: url(${value}) no-repeat rgba(255,255,255,0.2);
    background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  background-blend-mode: difference;`
}

const loadImage = imageUrl => {
  const src = imageUrl
  const img = document.createElement('img')
  img.onload = () => {
    body(src)
  }
  img.src = src
}

const getBackground = async () => {
  try {
    const { UNSPLASH_TOKEN, cityName } = DATA
    const location = cityName.textContent
    const date = new Date()
    const month = date.getMonth()

    let season = ''
    switch (month) {
      case 2:
      case 3:
      case 4:
        season += 'spring'
        break
      case 5:
      case 6:
      case 7:
        season += 'summer'
        break
      case 8:
      case 9:
      case 10:
        season += 'fall'
        break
      default:
        season += 'winter'
    }

    const url = `https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&w=800&query=${season},${location}&client_id=${UNSPLASH_TOKEN}`
    const response = await fetch(url)
    const data = await response.json()
    const regular = await data?.urls?.regular
    console.log('season:', season, 'location:', location)
    loadImage(regular)
    return true
  } catch (err) {
    loadImage('./assets/img/defaultImage.jpg')
    return console.log(err, 'loading default image')
  }
}

const changeBackground = () => {
  const { changeBackgroundImage } = DATA
  changeBackgroundImage.addEventListener('click', () => {
    getBackground()
  })
}

export { getBackground, changeBackground }
