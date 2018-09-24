import moment from 'moment-timezone'
import map from 'lodash/map'

import WindSpeedApi from '../api'
import { WindModel, WindSpeedUnits } from './windModel'

const HatBlowsInWindSpeed = {
  [WindSpeedUnits.KNOTS]: 13,
  [WindSpeedUnits.MPH]: 15
}

class WindSpeedService {
  static get = (geocode, startTime, endTime, timePeriod, units) => {
    let timeZone = startTime._z.name

    return WindSpeedApi
      .get(geocode, startTime, endTime, timePeriod, units)
      .then(apiResult => map(apiResult, result => new WindModel(result.windSpeed, moment.tz(result.observationTime, timeZone))))
  }

  static getHatBlowsInWindSpeed = (units) => {
    return HatBlowsInWindSpeed[units]
  }
}

export default WindSpeedService