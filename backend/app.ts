import { RadioBrowserApi, StationSearchType } from 'radio-browser-api'

const api = new RadioBrowserApi('My Radio App')

const getStations = async () => {

const stations = await api.searchStations({
  countryCode: 'UA',
  limit: 5,
  tag: "jazz"
  })
  console.log(stations)
  
}

getStations()