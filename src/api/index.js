import map from 'lodash/map'

import ajaxMockResult from './mockedData'
import ApiResponse from "./apiResponse"

const IS_DEVELOPMENT = process.env.NODE_ENV === 'development'
const CLIMACELL_URL = process.env.REACT_APP_CLIMACELL_URL
const CLIMACELL_API_KEY = process.env.REACT_APP_CLIMACELL_API_KEY


class WindSpeedApi {
  static get(geocode, startTime, endTime, timePeriod, units) {
    return this._fetchApi(geocode, startTime, endTime, timePeriod, units)
      .then(jsonArray => map(jsonArray, json => ApiResponse.fromJson(json)))
  }

  static _fetchApi(geocode, startTime, endTime, timePeriod, units) {
    if (IS_DEVELOPMENT)
      return Promise.resolve(ajaxMockResult)

    let requestParams = {
      method: 'POST',
      body: JSON.stringify({
        'geocode': {
          'lon': geocode.lon,
          'lat': geocode.lat
        },
        'start_time': startTime.toISOString(),
        'end_time': endTime.toISOString(),
        'timestep': timePeriod,
        'fields': [
          {
            'name': 'wind_speed',
            'units': units
          }
        ]
      }),
      headers: new Headers({
        'apikey': CLIMACELL_API_KEY,
        'accept': 'application/json',
        'Content-Type': 'application/json'
      })
    }

    return fetch(CLIMACELL_URL, requestParams)
      .then(this._handleErrors)
      .then(response => response.json())
  }

  static _handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
  }
}


export default WindSpeedApi