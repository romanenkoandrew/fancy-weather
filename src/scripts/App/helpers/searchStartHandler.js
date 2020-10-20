import DATA from '../constants'
import App from '../App'

const { searchButton, searchInput } = DATA

const appStart = () => {
  const searchInputValue = searchInput.value
  if (searchInputValue) {
    const app = new App(searchInputValue)
    app.start()
  }
}

const searchStartHandler = () => {
  searchButton.addEventListener('click', event => {
    event.preventDefault()
    appStart()
  })
}

export default searchStartHandler
