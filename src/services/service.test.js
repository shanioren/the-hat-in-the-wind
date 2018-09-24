import moment from 'moment-timezone'

import WindSpeedApi from '../api'
import ApiResponse from '../api/apiResponse'
import WindSpeedService from './index'
import { WindModel, WindSpeedUnits } from './windModel'

jest.mock('moment-timezone')

const timezone = 'sometimezone'
const startTime = moment.tz('2018-03-19 06:00', timezone)
const endTime = moment.tz('2018-03-19 22:00', timezone)

describe('When API returns valid results', () => {
  const apiResponse1 = new ApiResponse(42.302, -71.176, { value: 0, units: WindSpeedUnits.KNOTS }, '2018-03-19 06:00')
  const apiResponse2 = new ApiResponse(42.302, -71.176, { value: 1.05, units: WindSpeedUnits.KNOTS }, '2018-03-19 22:00')
  const windData1 = new WindModel(apiResponse1.windSpeed, moment.tz(apiResponse1.observationTime, timezone))
  const windData2 = new WindModel(apiResponse2.windSpeed, moment.tz(apiResponse2.observationTime, timezone))

  beforeAll(() => {
    WindSpeedApi.get = jest.fn(() => Promise.resolve([apiResponse1, apiResponse2]))
  })

  it('Should returned valid wind data', async function () {
    const response = await WindSpeedService.get({ lon: -70, lat: 40 }, startTime, endTime, 30)

    expect(response).toEqual([windData1, windData2]
    )
  })
})

describe('When API throws', () => {
  const error = 'Uh-oh!'

  beforeAll(() => {
    WindSpeedApi.get = jest.fn(() =>
      new Promise(() => {
        throw error
      }))
  })

  it('Should throw the error', async function () {
    try {
      await WindSpeedService.get({ lon: -70, lat: 40 }, startTime, endTime, 30)
    }
    catch (error) {
      expect(error).toBe(error)
    }
  })
})