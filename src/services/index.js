import moment from 'moment-timezone'
import map from 'lodash/map'

import WindSpeedApi from '../api'
import { WindModel } from './windModel'

class WindSpeedService {
  static get(geocode, startTime, endTime, timePeriod, units) {
    let timeZone = startTime._z.name

    return WindSpeedApi
      .get(geocode, startTime, endTime, timePeriod, units)
      .then(apiResult => map(apiResult, result => new WindModel(result.windSpeed, moment.tz(result.observationTime, timeZone))))
  }
}

export default WindSpeedService