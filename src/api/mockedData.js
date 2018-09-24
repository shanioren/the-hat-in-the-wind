import ApiResponse from './apiResponse'

const LAT = 42.30260171891152
const LON = -71.17609710203855

const mockedData1 = new ApiResponse(LAT, LON, {value: 0, units: 'knots'}, '2018-07-01T12:00:00.000Z')
const mockedData2 = new ApiResponse(LAT, LON, {value: 11.05, units: 'knots'}, '2018-07-01T13:00:00.000Z')
const mockedData3 = new ApiResponse(LAT, LON, {value: 11.05, units: 'knots'}, '2018-07-01T14:00:00.000Z')
const mockedData4 = new ApiResponse(LAT, LON, {value: 14.03, units: 'knots'}, '2018-07-01T15:00:00.000Z')
const mockedData5 = new ApiResponse(LAT, LON, {value: 12.87, units: 'knots'}, '2018-07-01T16:00:00.000Z')
const mockedData6 = new ApiResponse(LAT, LON, {value: 13.91, units: 'knots'}, '2018-07-01T17:00:00.000Z')
const mockedData7 = new ApiResponse(LAT, LON, {value: 15.83, units: 'knots'}, '2018-07-01T18:00:00.000Z')

const ajaxMockResult = [
  mockedData1.toJson(),
  mockedData2.toJson(),
  mockedData3.toJson(),
  mockedData4.toJson(),
  mockedData5.toJson(),
  mockedData6.toJson(),
  mockedData7.toJson()
]

export default ajaxMockResult