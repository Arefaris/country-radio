import { RadioBrowserApi, StationSearchType } from 'radio-browser-api'
import type { radio } from '../types'


const api = new RadioBrowserApi('My Radio App')

export const getStations = async (query: radio) => {

  try {
    const stations = await api.searchStations({
    countryCode: query.country,
    limit: 100,
    tag: query.tag
  })

    return stations

  }catch(error){
    console.log(error)
    throw new Error
  }
 
    
}
