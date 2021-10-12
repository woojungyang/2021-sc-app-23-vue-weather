import axios from 'axios'

const appid = 'cc18d66c3de8507d60a1eb517ef969a1'
const url = {
  daily: 'https://api.openweathermap.org/data/2.5/weather',
  days: 'https://api.openweathermap.org/data/2.5/forecast'
}
// const icons = ['http://openweathermap.org/img/wn/', '@2x.png']
const params = { units: 'metric', lang: 'kr', appid }

const apiWeather = (_url, options) => {
  params.lang = options.lang || 'kr'
  if (options.id) {
    params.id = options.id
  } else if (options.lat && options.lon) {
    params.lat = options.lat
    params.lon = options.lon
  } else {
    throw new Error('Error')
  }
  return axios.get(url[_url], { params })
}

export default apiWeather
