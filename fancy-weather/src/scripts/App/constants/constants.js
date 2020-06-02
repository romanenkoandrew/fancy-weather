const DATA = {
  MY_GEOLOCATION_URL: `https://ipinfo.io/json?token=3a679ebc1a0df9`,
  GEOCODING_TOKEN: `7956a5d1d13849909bc7d0512ac78434`,
  MAP_TOKEN:
    'pk.eyJ1Ijoid2V0ZXJvNGVrIiwiYSI6ImNrYXR6cXU2dTB5cTgyc281MnowdngybW0ifQ.mgoiVzJKrcBmZHaAGMxJcQ',
  WEATHER_TOKEN: `f862a3ee73f36b8c4199828d0135593b`,
  cityName: document.getElementById('cityName'),
  latitude: document.getElementById('latitude'),
  longitude: document.getElementById('longitude'),
  searchButton: document.getElementById('search-button'),
  searchInput: document.getElementById('search-input'),
  dateToday: document.getElementById('date-today'),
  overcast: document.getElementById('overcast'),
  feelsLike: document.getElementById('feels-like'),
  wind: document.getElementById('wind'),
  humidity: document.getElementById('humidity'),
  temperature: [...document.querySelectorAll('.temperature')],
  weatherIcon: [...document.querySelectorAll('.weather-icon')],
  tomorrowDay: document.getElementById('tomorrow-day'),
  tomorrowDayNext: document.getElementById('tomorrow-nextDay-day'),
  tomorrowDayNextNext: document.getElementById('tomorrow-next-nextDay-day'),
  nameOfTheDay: [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ]
}

export default DATA
