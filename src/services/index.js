import moment from 'moment-timezone'
import map from 'lodash/map'

import WindSpeedApi from '../api'
import WindData from './windData'

class WindSpeedService {
  static get(geocode, startTime, endTime, timePeriod) {
    let timeZone = startTime._z.name

    return WindSpeedApi
      .get(geocode, startTime, endTime, timePeriod)
      .then(apiResult => map(apiResult, result => new WindData(result.windSpeed, moment.tz(result.observationTime, timeZone))))
  }
}

export default WindSpeedService