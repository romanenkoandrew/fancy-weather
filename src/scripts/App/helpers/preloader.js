const loadData = () => {
  return new Promise(resolve => {
    resolve()
  })
}

const preloader = value => {
  value
    ? loadData().then(() => {
        const preloaderEl = document.getElementById('preloader')
        preloaderEl.classList.add('hidden')
        preloaderEl.classList.remove('visible')
      })
    : loadData().then(() => {
        const preloaderEl = document.getElementById('preloader')
        preloaderEl.classList.remove('hidden')
        preloaderEl.classList.add('visible')
      })
}

export default preloader
